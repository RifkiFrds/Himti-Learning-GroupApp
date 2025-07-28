import React from 'react';
import { FaBars, FaDownload, FaVolumeUp, FaVolumeMute, FaExpandAlt, FaCompressAlt, FaTimes } from 'react-icons/fa';
import SpeedDial from './SpeedDial';

const ChatHeader = ({ 
  isMaximized, 
  onToggleMaximize, 
  onToggleChat, 
  onToggleSidebar, 
  onExport,
  isSoundEnabled,
  onToggleSound 
}) => {
  
  const speedDialActions = [
    { label: 'Ekspor PDF', icon: <FaDownload size={16} />, onClick: () => onExport('pdf') },
    { label: isSoundEnabled ? 'Matikan Suara' : 'Nyalakan Suara', icon: isSoundEnabled ? <FaVolumeUp size={16} /> : <FaVolumeMute size={16} />, onClick: onToggleSound },
    { label: isMaximized ? 'Kecilkan' : 'Perbesar', icon: isMaximized ? <FaCompressAlt size={16} /> : <FaExpandAlt size={16} />, onClick: onToggleMaximize },
    { label: 'Tutup', icon: <FaTimes size={16} />, onClick: onToggleChat },
  ];

  return (
    <div className="p-4 bg-primary text-white rounded-t-none md:rounded-t-2xl flex justify-between items-center cursor-grab flex-shrink-0">
      <div className="flex items-center gap-3 text-lg font-bold">
        <button onClick={onToggleSidebar} className="hover:opacity-75" aria-label="Toggle Sidebar">
          <FaBars size={20} />
        </button>
        <img src="/src/assets/images/avatar-main.png" alt="HIMTI-Bot Avatar" className="w-12 h-10" />
        HIMTIChat
      </div>
      
      <div className="md:hidden">
        {/* Beri tahu Speed Dial untuk membuka ke bawah */}
        <SpeedDial actions={speedDialActions} direction="down" />
      </div>

      <div className="hidden md:flex items-center gap-4">
        <button onClick={onToggleSound} className="hover:opacity-75" aria-label="Toggle Sound">
          {isSoundEnabled ? <FaVolumeUp size={16} /> : <FaVolumeMute size={16} />}
        </button>
        <button onClick={() => onExport('pdf')} className="hover:opacity-75" aria-label="Ekspor Percakapan">
          <FaDownload size={16} />
        </button>
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
