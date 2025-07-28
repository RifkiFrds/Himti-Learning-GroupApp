import React, { useState, useEffect, useRef, useMemo } from 'react';
import { FaCommentDots } from 'react-icons/fa';
import ChatHeader from '../Molecules/ChatHeader';
import ChatBody from '../Molecules/ChatBody';
import ChatInputForm from '../Molecules/ChatInputForm';
import ChatSidebar from '../Molecules/ChatSidebar';
import SuggestionPanel from '../Molecules/SuggestionPanel';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import notificationSound from '../../assets/song/notification.mp3';
import { isToday, isYesterday, isWithinInterval, subDays, startOfMonth } from 'date-fns';

// Fungsi helper untuk mengelompokkan percakapan
const groupConversationsByDate = (conversations) => {
  const now = new Date();
  const groups = {
    "Hari Ini": [],
    "Kemarin": [],
    "7 Hari Terakhir": [],
    "Bulan Ini": [],
    "Lebih Lama": [],
  };

  conversations.forEach(convo => {
    const convoDate = new Date(convo.id);
    if (isToday(convoDate)) {
      groups["Hari Ini"].push(convo);
    } else if (isYesterday(convoDate)) {
      groups["Kemarin"].push(convo);
    } else if (isWithinInterval(convoDate, { start: subDays(now, 7), end: now })) {
      groups["7 Hari Terakhir"].push(convo);
    } else if (isWithinInterval(convoDate, { start: startOfMonth(now), end: now })) {
      groups["Bulan Ini"].push(convo);
    } else {
      groups["Lebih Lama"].push(convo);
    }
  });

  // Hapus grup yang kosong
  Object.keys(groups).forEach(key => {
    if (groups[key].length === 0) {
      delete groups[key];
    }
  });

  return groups;
};

const HIMTIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true); 
  const audioRef = useRef(new Audio(notificationSound));
  
  const [conversations, setConversations] = useState(() => {
    const saved = localStorage.getItem('himtiConversations');
    return saved ? JSON.parse(saved) : [{ 
      id: Date.now(), 
      title: "Percakapan Baru", 
      messages: [{ sender: 'ai', text: 'Halo! Saya HIMTIChat, asisten AI untuk membantumu belajar coding. Ada yang bisa saya bantu?', feedback: null }]
    }];
  });
  const [activeConversationId, setActiveConversationId] = useState(() => conversations[0]?.id);
  const [searchTerm, setSearchTerm] = useState(''); 
  
  const chatEndRef = useRef(null);
  const chatBodyContainerRef = useRef(null);

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

    const handleExport = (format) => {
    const activeConvo = conversations.find(c => c.id === activeConversationId);
    if (!activeConvo) return;

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `HIMTIChat-${activeConvo.title.replace(/\W/g, '_')}-${timestamp}`;

    if (format === 'pdf') {
      const elementToCapture = chatBodyContainerRef.current;
      if (elementToCapture) {
        html2canvas(elementToCapture, { scrollY: -window.scrollY, useCORS: true }).then(canvas => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'mm', 'a4');
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
          let heightLeft = pdfHeight;
          let position = 0;
          pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
          heightLeft -= pdf.internal.pageSize.getHeight();
          while (heightLeft > 0) {
            position = heightLeft - pdfHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
            heightLeft -= pdf.internal.pageSize.getHeight();
          }
          pdf.save(`${filename}.pdf`);
        });
      }
    }
    

    if (format === 'md') {
      let markdownContent = `# Percakapan: ${activeConvo.title}\n\n`;
      activeConvo.messages.forEach(msg => {
        const prefix = msg.sender === 'user' ? '> **Anda:**' : '**HIMTIChat:**';
        const text = msg.text.replace(/```/g, '\n```\n');
        markdownContent += `${prefix}\n${text}\n\n---\n\n`;
      });
      const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
      saveAs(blob, `${filename}.md`);
    }
  };

  const toggleSound = () => setIsSoundEnabled(!isSoundEnabled);

  const handleSuggestionClick = (suggestion) => {
    handleSubmit(suggestion);
  };

  const handleSubmit = async (prompt) => {
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

      // Mainkan suara jika aktif
      if (isSoundEnabled) {
        audioRef.current.play().catch(e => console.error("Gagal memainkan suara:", e));
      }
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

   const groupedAndFilteredConversations = useMemo(() => {
    const filtered = conversations.filter(convo => 
      convo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return groupConversationsByDate(filtered);
  }, [conversations, searchTerm]);

  const activeConversation = conversations.find(c => c.id === activeConversationId);
  
  // Filter percakapan berdasarkan searchTerm
  const filteredConversations = conversations.filter(convo => 
    convo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {isOpen && (
        <div className={`fixed inset-0 md:inset-auto md:bottom-5 md:right-5 z-50 flex bg-white md:rounded-2xl md:shadow-2xl transition-all duration-300 ease-in-out md:overflow-hidden 
          ${isMaximized ? 'md:w-[95vw] md:max-w-[1000px] md:h-[90vh]' : 'md:w-[700px] h-[600px]'}`}>
          
          <ChatSidebar 
            isOpen={isSidebarOpen}
            conversations={filteredConversations} // Gunakan data yang sudah difilter
            activeConversationId={activeConversationId}
            groupedConversations={groupedAndFilteredConversations}
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
              onExport={handleExport}
              isSoundEnabled={isSoundEnabled}
              onToggleSound={toggleSound}
            />
            
            <div className="flex-1 overflow-y-auto" ref={chatBodyContainerRef}>
            <ChatBody 
              chatHistory={activeConversation?.messages || []}
              isLoading={isLoading}
              chatEndRef={chatEndRef}
              onFeedback={handleFeedback}
            />
            </div>

             <div className="p-3 border-t bg-white">
              {activeConversation?.messages.length <= 1 && (
                <SuggestionPanel onSuggestionClick={handleSuggestionClick} />
              )}
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
