import React from 'react';
import { FaRobot, FaTimes, FaExpandAlt, FaCompressAlt } from 'react-icons/fa';

const ChatHeader = ({ isMaximized, onToggleMaximize, onToggleChat }) => {
  return (
    <div className="p-4 bg-primary text-white rounded-t-2xl flex justify-between items-center cursor-grab">
      <div className="flex items-center gap-3 text-lg font-bold">
        <FaRobot size={22} />
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
