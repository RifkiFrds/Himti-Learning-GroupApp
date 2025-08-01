import React, { useState } from "react";
import {
  FaBars,
  FaDownload,
  FaVolumeUp,
  FaVolumeMute,
  FaExpandAlt,
  FaCompressAlt,
  FaTimes,
  FaFilePdf,
  FaFileAlt,
} from "react-icons/fa";
import SpeedDial from "./SpeedDial";
import AvatarMain from "../../assets/images/avatar-main.png";

const ChatHeader = ({
  isMaximized,
  onToggleMaximize,
  onToggleChat,
  onToggleSidebar,
  onExport,
  isSoundEnabled,
  onToggleSound,
}) => {
  const [showExportMenu, setShowExportMenu] = useState(false);

  const handleExport = (format) => {
    onExport(format);
    setShowExportMenu(false);
  };

  const speedDialActions = [
    {
      label: "Ekspor PDF",
      icon: <FaFilePdf size={16} />,
      onClick: () => onExport("pdf"),
    },
    {
      label: "Ekspor Markdown",
      icon: <FaFileAlt size={16} />,
      onClick: () => onExport("md"),
    },
    {
      label: isSoundEnabled ? "Matikan Suara" : "Nyalakan Suara",
      icon: isSoundEnabled ? (
        <FaVolumeUp size={16} />
      ) : (
        <FaVolumeMute size={16} />
      ),
      onClick: onToggleSound,
    },
    {
      label: isMaximized ? "Kecilkan" : "Perbesar",
      icon: isMaximized ? (
        <FaCompressAlt size={16} />
      ) : (
        <FaExpandAlt size={16} />
      ),
      onClick: onToggleMaximize,
    },
    { label: "Tutup", icon: <FaTimes size={16} />, onClick: onToggleChat },
  ];

  return (
    <div className="p-4 bg-primary text-white rounded-t-none md:rounded-t-2xl flex justify-between items-center cursor-grab flex-shrink-0">
      <div className="flex items-center gap-3 text-lg font-bold">
        <button
          onClick={onToggleSidebar}
          className="hover:opacity-75"
          aria-label="Toggle Sidebar"
        >
          <FaBars size={20} />
        </button>
        <div className="relative flex-shrink-0">
          <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-inner">
            <img src={AvatarMain} alt="HIMTI-Bot Avatar" className="w-8 h-8" />
          </div>
          <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-primary animate-pulse"></span>
        </div>
        <span className="tracking-wider">HIMTIChat</span>
      </div>

      <div className="md:hidden">
        <SpeedDial actions={speedDialActions} direction="down" />
      </div>

      <div className="hidden md:flex items-center gap-4">
        <button
          onClick={onToggleSound}
          className="hover:opacity-75"
          aria-label="Toggle Sound"
        >
          {isSoundEnabled ? (
            <FaVolumeUp size={16} />
          ) : (
            <FaVolumeMute size={16} />
          )}
        </button>

        {/* Dropdown Ekspor untuk Desktop */}
        <div className="relative">
          <button
            onClick={() => setShowExportMenu(!showExportMenu)}
            className="hover:opacity-75"
            aria-label="Ekspor Percakapan"
          >
            <FaDownload size={16} />
          </button>
          {showExportMenu && (
            <div
              className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 text-secondary"
              onMouseLeave={() => setShowExportMenu(false)} // Tutup menu saat mouse keluar
            >
              <button
                onClick={() => handleExport("pdf")}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2"
              >
                <FaFilePdf className="text-red-500" /> Unduh sebagai PDF
              </button>
              <button
                onClick={() => handleExport("md")}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2"
              >
                <FaFileAlt className="text-gray-500" /> Unduh sebagai Markdown
              </button>
            </div>
          )}
        </div>

        <button
          onClick={onToggleMaximize}
          className="hover:opacity-75"
          aria-label="Toggle Maximize"
        >
          {isMaximized ? (
            <FaCompressAlt size={16} />
          ) : (
            <FaExpandAlt size={16} />
          )}
        </button>
        <button
          onClick={onToggleChat}
          className="hover:opacity-75"
          aria-label="Close Chat"
        >
          <FaTimes size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
