import React, { useState, useEffect, useRef } from 'react';
import { FaRobot, FaCommentDots, FaTimes } from 'react-icons/fa';


const HIMTIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [chatHistory, setChatHistory] = useState([
    // Pesan sambutan otomatis
    { sender: 'ai', text: 'Halo! Saya HIMTIChat, asisten AI untuk membantumu belajar coding. Ada yang bisa saya bantu?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Fungsi untuk scroll otomatis ke pesan terbaru
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, isLoading]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    const newUserMessage = { sender: 'user', text: prompt };
    setChatHistory(prev => [...prev, newUserMessage]);
    setPrompt('');
    setIsLoading(true);

    try {
      const response = await fetch('/.netlify/functions/getAIResponse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Gagal mendapatkan respons dari server.');
      }

      const data = await response.json();
      const aiMessage = { sender: 'ai', text: data.response };
      setChatHistory(prev => [...prev, aiMessage]);

    } catch (error) {
      console.error("Gagal menghubungi AI:", error);
      const errorMessage = { sender: 'ai', text: 'Maaf, terjadi kesalahan. Coba lagi nanti.' };
      setChatHistory(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <div className="w-80 sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col transition-all duration-300">
          <div className="p-4 bg-primary text-white rounded-t-2xl flex justify-between items-center">
               <div className="flex items-center gap-2 text-lg font-semibold">
              <FaRobot className="text-blue-500" size={24} />
              HIMTIChat
            </div>
              <button onClick={toggleChat}>
              <FaTimes size={20} className="text-gray-600 hover:text-red-500" />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {chatHistory.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-3`}>
                <div className={`p-3 rounded-xl max-w-xs break-words ${msg.sender === 'user' ? 'bg-secondary text-white' : 'bg-gray-200 text-secondary'}`}>
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-3">
                <div className="p-3 rounded-xl bg-gray-200 text-secondary">
                  <p className="text-sm italic">HIMTIChat sedang mengetik...</p>
                </div>
              </div>
            )}
            <div ref={chatEndRef} /> 
          </div>
          
          <div className="p-3 border-t bg-white rounded-b-2xl">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Tanya tentang coding..."
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                disabled={isLoading}
                maxLength="20"
              />
              <button type="submit" disabled={isLoading} className="px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-purple-700 disabled:bg-gray-400">
            
                Kirim
              </button>
            </form>
          </div>
        </div>
      )}
      {!isOpen && (
  <button
    onClick={toggleChat}
    className="fixed bottom-6 right-6 w-16 h-16 bg-primary rounded-full shadow-lg flex items-center justify-center text-white hover:scale-105 transition-transform duration-200  animate-bounce"
    aria-label="Buka Chat HIMTI"
  >
    <FaCommentDots size={24} />
  </button>
)}
    </div>
  );
};

export default HIMTIChat;