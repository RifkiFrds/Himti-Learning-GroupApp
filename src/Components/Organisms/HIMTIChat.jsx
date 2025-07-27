import React, { useState, useEffect, useRef } from 'react';
import { FaCommentDots } from 'react-icons/fa';
import ChatHeader from '../Molecules/ChatHeader';
import ChatBody from '../Molecules/ChatBody';
import ChatInputForm from '../Molecules/ChatInputForm';
import ChatSidebar from '../Molecules/ChatSidebar';

const HIMTIChat = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const [conversations, setConversations] = useState(() => {
    const saved = localStorage.getItem('himtiConversations');
    return saved ? JSON.parse(saved) : [{ 
      id: Date.now(), 
      title: "Percakapan Baru", 
      messages: [{ sender: 'ai', text: 'Halo! Saya HIMTIChat, asisten AI untuk membantumu belajar coding. Ada yang bisa saya bantu?', feedback: null }]
    }];
  });
  const [activeConversationId, setActiveConversationId] = useState(() => conversations[0]?.id);
  const [searchTerm, setSearchTerm] = useState(''); // State untuk search
  
  const chatEndRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('himtiConversations', JSON.stringify(conversations));
  }, [conversations]);

  useEffect(() => {
    if(isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversations, activeConversationId, isLoading, isOpen]);

  const toggleChat = () => setIsOpen(!isOpen);
  const toggleMaximize = () => setIsMaximized(!isMaximized);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleNewConversation = () => {
    const newId = Date.now();
    const newConversation = {
      id: newId,
      title: "Percakapan Baru",
      messages: [{ sender: 'ai', text: 'Halo! Ada lagi yang bisa saya bantu?', feedback: null }]
    };
    setConversations(prev => [newConversation, ...prev]);
    setActiveConversationId(newId);
  };

  const handleSwitchConversation = (id) => {
    setActiveConversationId(id);
  };
  
  const handleDeleteConversation = (idToDelete) => {
    const remainingConversations = conversations.filter(convo => convo.id !== idToDelete);
    
    // Jika tidak ada percakapan tersisa, buat satu yang baru
    if (remainingConversations.length === 0) {
      handleNewConversation();
    } else {
      setConversations(remainingConversations);
      // Jika percakapan yang aktif dihapus, pindah ke yang paling atas
      if (activeConversationId === idToDelete) {
        setActiveConversationId(remainingConversations[0].id);
      }
    }
  };

  const handleSubmit = async (prompt) => {
    // ... (Logika handleSubmit tetap sama, tidak perlu diubah)
    if (!prompt.trim()) return;
    const newUserMessage = { sender: 'user', text: prompt };
    const updatedConversations = conversations.map(convo => {
      if (convo.id === activeConversationId) {
        const newTitle = convo.messages.length === 1 ? prompt.substring(0, 25) + '...' : convo.title;
        return { ...convo, title: newTitle, messages: [...convo.messages, newUserMessage] };
      }
      return convo;
    });
    setConversations(updatedConversations);
    setIsLoading(true);
    try {
      const response = await fetch('/.netlify/functions/getAIResponse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      if (!response.ok) throw new Error('Gagal mendapatkan respons dari server.');
      const data = await response.json();
      const aiMessage = { sender: 'ai', text: data.response, feedback: null };
      setConversations(prev => prev.map(convo => 
        convo.id === activeConversationId 
          ? { ...convo, messages: [...convo.messages, aiMessage] } 
          : convo
      ));
    } catch (error) {
      console.error("Gagal menghubungi AI:", error);
      const errorMessage = { sender: 'ai', text: 'Maaf, terjadi kesalahan. Coba lagi nanti.', feedback: null };
      setConversations(prev => prev.map(convo => 
        convo.id === activeConversationId 
          ? { ...convo, messages: [...convo.messages, errorMessage] } 
          : convo
      ));
    } finally {
      setIsLoading(false);
    }
  };

  const handleFeedback = (messageIndex, feedbackType) => {
    // ... (Logika handleFeedback tetap sama, tidak perlu diubah)
    const updatedConversations = conversations.map(convo => {
      if (convo.id === activeConversationId) {
        const newMessages = [...convo.messages];
        if (newMessages[messageIndex].feedback === null) {
          newMessages[messageIndex].feedback = feedbackType;
        }
        return { ...convo, messages: newMessages };
      }
      return convo;
    });
    setConversations(updatedConversations);
  };

  const activeConversation = conversations.find(c => c.id === activeConversationId);
  
  // Filter percakapan berdasarkan searchTerm
  const filteredConversations = conversations.filter(convo => 
    convo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {isOpen && (
        <div className={`fixed inset-0 md:inset-auto md:bottom-5 md:right-5 z-50 flex bg-white md:rounded-2xl md:shadow-2xl transition-all duration-300 ease-in-out 
          ${isMaximized ? 'md:w-[95vw] md:max-w-[1000px] md:h-[90vh]' : 'md:w-[700px] h-[600px]'}`}>
          
          <ChatSidebar 
            isOpen={isSidebarOpen}
            conversations={filteredConversations} // Gunakan data yang sudah difilter
            activeConversationId={activeConversationId}
            onSwitchConversation={handleSwitchConversation}
            onNewConversation={handleNewConversation}
            onDeleteConversation={handleDeleteConversation} // Teruskan fungsi hapus
            searchTerm={searchTerm} // Teruskan state & handler search
            onSearchChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <div className="flex-1 flex flex-col min-w-0">
            <ChatHeader 
              isMaximized={isMaximized}
              onToggleMaximize={toggleMaximize}
              onToggleChat={toggleChat}
              onToggleSidebar={toggleSidebar}
            />
            
            <ChatBody 
              chatHistory={activeConversation?.messages || []}
              isLoading={isLoading}
              chatEndRef={chatEndRef}
              onFeedback={handleFeedback}
            />

            <div className="p-3 border-t bg-white md:rounded-br-2xl">
              <ChatInputForm onSubmit={handleSubmit} isLoading={isLoading} />
            </div>
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
