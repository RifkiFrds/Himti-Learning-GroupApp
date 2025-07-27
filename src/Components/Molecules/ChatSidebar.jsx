import React from 'react';
import { FaPlus, FaCommentAlt, FaSearch, FaTrash } from 'react-icons/fa';

const ChatSidebar = ({ 
  isOpen, 
  conversations, 
  activeConversationId, 
  onSwitchConversation, 
  onNewConversation,
  onDeleteConversation,
  searchTerm,
  onSearchChange
}) => {
  return (
    <div className={`transition-all duration-300 ease-in-out bg-gray-100 flex flex-col border-r border-gray-200 ${isOpen ? 'w-64 p-2' : 'w-0 p-0'} overflow-hidden`}>
      <button
        onClick={onNewConversation}
        className="w-full flex items-center justify-center gap-2 text-sm font-semibold p-2 rounded-lg bg-primary text-white hover:bg-purple-700 transition-colors mb-2 flex-shrink-0"
      >
        <FaPlus size={12} />
        Percakapan Baru
      </button>

      <div className="relative mb-2 flex-shrink-0">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
        <input 
          type="text"
          placeholder="Cari riwayat..."
          value={searchTerm}
          onChange={onSearchChange}
          className="w-full pl-8 pr-2 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        <p className="text-xs font-bold text-gray-400 uppercase mb-2 px-1">Riwayat</p>
        <div className="flex flex-col gap-1">
          {conversations.map((convo) => (
            <div key={convo.id} className="relative group flex items-center">
              <button
                onClick={() => onSwitchConversation(convo.id)}
                className={`w-full text-left text-sm p-2 rounded-md truncate flex items-center gap-2 ${
                  activeConversationId === convo.id
                    ? 'bg-secondary text-white'
                    : 'text-secondary hover:bg-gray-200'
                }`}
              >
                <FaCommentAlt className="flex-shrink-0" />
                <span className="truncate">{convo.title}</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Mencegah switch conversation saat menghapus
                  onDeleteConversation(convo.id);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full text-gray-500 hover:bg-red-100 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Hapus percakapan"
              >
                <FaTrash size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
