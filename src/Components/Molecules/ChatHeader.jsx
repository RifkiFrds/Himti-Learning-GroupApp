import React from 'react';
import { FaTimes, FaExpandAlt, FaCompressAlt, FaBars } from 'react-icons/fa';
import avatarMain from '../../assets/images/avatar-main.png'; // 1. Impor avatar utama

const ChatHeader = ({ isMaximized, onToggleMaximize, onToggleChat, onToggleSidebar }) => {
  return (
    <div className="p-4 bg-primary text-white rounded-t-none md:rounded-t-2xl flex justify-between items-center cursor-grab flex-shrink-0">
      <div className="flex items-center gap-3 text-lg font-bold">
        <button onClick={onToggleSidebar} className="hover:opacity-75" aria-label="Toggle Sidebar">
          <FaBars size={20} />
        </button>
        <img src={avatarMain} alt="HIMTI-Bot Avatar" className="w-10 h-10" />
        HIMTIChat
      </div>
      <div className="flex items-center gap-4">
        <button onClick={onToggleMaximize} className="hover:opacity-75" aria-label="Toggle Maximize">
          {isMaximized ? <FaCompressAlt size={16} /> : <FaExpandAlt size={16} />}
        </button>
        <button onClick={onToggleChat} className="hover:opacity-75" aria-label="Close Chat">
          <FaTimes size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
