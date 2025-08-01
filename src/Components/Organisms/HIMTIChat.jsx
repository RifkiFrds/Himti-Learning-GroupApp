import React, { useState, useEffect, useRef } from "react";
import ChatHeader from "../Molecules/ChatHeader";
import ChatBody from "../Molecules/ChatBody";
import ChatInputForm from "../Molecules/ChatInputForm";
import ChatSidebar from "../Molecules/ChatSidebar";
import SuggestionPanel from "../Molecules/SuggestionPanel";
import ChatCTA from "../Molecules/ChatCTA";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { useChat } from "../../hooks/useChat";

const HIMTIChat = () => {
  // State yang bertanggung jawab HANYA untuk UI
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Memanggil hook untuk mendapatkan semua data dan fungsi logika
  const {
    isLoading,
    isSoundEnabled,
    activeConversation,
    groupedAndFilteredConversations,
    activeConversationId,
    searchTerm,
    setSearchTerm,
    handleNewConversation,
    handleDeleteConversation,
    handleSubmit,
    handleFeedback,
    handleSwitchConversation,
    toggleSound,
  } = useChat();

  // Refs untuk interaksi dengan DOM
  const chatEndRef = useRef(null);
  const chatBodyContainerRef = useRef(null);

  // Efek untuk auto-scroll, tetap di sini karena berhubungan dengan UI (ref)
  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeConversation, isLoading, isOpen]);

  // Handler khusus UI
  const toggleChat = () => setIsOpen(!isOpen);
  const toggleMaximize = () => setIsMaximized(!isMaximized);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Handler ekspor, tetap di sini karena butuh akses langsung ke DOM (ref)
  const handleExport = (format) => {
    if (!activeConversation) return;

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filename = `HIMTIChat-${activeConversation.title.replace(/\W/g, "_")}-${timestamp}`;

    if (format === "pdf") {
      const elementToCapture = chatBodyContainerRef.current;
      if (elementToCapture) {
        html2canvas(elementToCapture, {
          scrollY: -window.scrollY,
          useCORS: true,
        }).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF("p", "mm", "a4");
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
          pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
          pdf.save(`${filename}.pdf`);
        });
      }
    }

    if (format === "md") {
      let markdownContent = `# Percakapan: ${activeConversation.title}\n\n`;
      activeConversation.messages.forEach((msg) => {
        const prefix = msg.sender === "user" ? "> **Anda:**" : "**HIMTIChat:**";
        const text = msg.text.replace(/```/g, "\n```\n");
        markdownContent += `${prefix}\n${text}\n\n---\n\n`;
      });
      const blob = new Blob([markdownContent], {
        type: "text/markdown;charset=utf-8",
      });
      saveAs(blob, `${filename}.md`);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className={`fixed inset-0 md:inset-auto md:bottom-5 md:right-5 z-50 flex bg-white md:rounded-2xl md:shadow-2xl transition-all duration-300 ease-in-out md:overflow-hidden 
          ${isMaximized ? "md:w-[95vw] md:max-w-[1000px] md:h-[90vh]" : "md:w-[700px] h-[600px]"}`}
        >
          <ChatSidebar
            isOpen={isSidebarOpen}
            groupedConversations={groupedAndFilteredConversations}
            activeConversationId={activeConversationId}
            onSwitchConversation={handleSwitchConversation}
            onNewConversation={handleNewConversation}
            onDeleteConversation={handleDeleteConversation}
            searchTerm={searchTerm}
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
                <SuggestionPanel onSuggestionClick={handleSubmit} />
              )}
              <ChatInputForm onSubmit={handleSubmit} isLoading={isLoading} />
            </div>
          </div>
        </div>
      )}

      {!isOpen && <ChatCTA onClick={toggleChat} />}
    </>
  );
};

export default HIMTIChat;
