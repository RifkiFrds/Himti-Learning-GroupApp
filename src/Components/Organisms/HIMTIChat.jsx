import React, { useState, useEffect, useRef } from 'react';
import { FaCommentDots } from 'react-icons/fa';
import ChatHeader from '../Molecules/ChatHeader';
import ChatBody from '../Molecules/ChatBody';
import SuggestionPanel from '../Molecules/SuggestionPanel';
import ChatInputForm from '../Molecules/ChatInputForm';

const HIMTIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { sender: 'ai', text: 'Halo! Saya HIMTIChat, asisten AI untuk membantumu belajar coding. Ada yang bisa saya bantu?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isLoading]);

  const toggleChat = () => setIsOpen(!isOpen);
  const toggleMaximize = () => setIsMaximized(!isMaximized);

  const handleSuggestionClick = (suggestion) => {
    // Kita akan buat fungsi submit baru yang bisa menerima prompt
    handleSubmit(suggestion);
  };

  const handleSubmit = async (prompt) => {
    if (!prompt.trim()) return;

    const newUserMessage = { sender: 'user', text: prompt };
    setChatHistory(prev => [...prev, newUserMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/.netlify/functions/getAIResponse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) throw new Error('Gagal mendapatkan respons dari server.');

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
    <>
      {isOpen && (
        <div className={`fixed bottom-5 right-5 z-50 flex flex-col bg-white rounded-2xl shadow-2xl transition-all duration-500 ease-in-out 
          ${isMaximized ? 'w-[90vw] max-w-[800px] h-[85vh]' : 'w-80 sm:w-96 h-[600px]'}`}>
          
          <ChatHeader 
            isMaximized={isMaximized}
            onToggleMaximize={toggleMaximize}
            onToggleChat={toggleChat}
          />
          
          <ChatBody 
            chatHistory={chatHistory}
            isLoading={isLoading}
            chatEndRef={chatEndRef}
          />

          <div className="p-3 border-t bg-white rounded-b-2xl">
            {chatHistory.length <= 1 && (
              <SuggestionPanel onSuggestionClick={handleSuggestionClick} />
            )}
            <ChatInputForm onSubmit={handleSubmit} isLoading={isLoading} />
          </div>
        </div>
      )}
      {!isOpen && (
        <button onClick={toggleChat} className="fixed bottom-5 right-5 w-16 h-16 bg-primary rounded-full shadow-lg flex items-center justify-center text-white hover:scale-105 transition-transform duration-200 animate-bounce" aria-label="Buka Chat HIMTI">
          <FaCommentDots size={24} />
        </button>
      )}
    </>
  );
};

export default HIMTIChat;
