import React, { useState } from "react";
import { FaPlus, FaSearch, FaTrash, FaChevronDown } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";
import { motion, AnimatePresence } from "framer-motion";

const ChatSidebar = ({
  isOpen,
  groupedConversations,
  activeConversationId,
  onSwitchConversation,
  onNewConversation,
  onDeleteConversation,
  searchTerm,
  onSearchChange,
}) => {
  const [openGroups, setOpenGroups] = useState(() =>
    Object.keys(groupedConversations).length > 0
      ? [Object.keys(groupedConversations)[0]]
      : [],
  );

  const toggleGroup = (groupTitle) => {
    setOpenGroups((prev) =>
      prev.includes(groupTitle)
        ? prev.filter((g) => g !== groupTitle)
        : [...prev, groupTitle],
    );
  };

  return (
    <div
      className={`transition-all duration-300 ease-in-out bg-gray-50 flex flex-col border-r border-gray-200 ${isOpen ? "w-64" : "w-0"} overflow-hidden`}
    >
      <div className="p-2 space-y-2 border-b border-gray-200 bg-white flex-shrink-0">
        <button
          onClick={onNewConversation}
          className="w-full flex items-center justify-center gap-2 text-sm font-semibold p-2 rounded-lg bg-primary text-white hover:bg-purple-700 transition-colors"
        >
          <FaPlus size={12} />
          Percakapan Baru
        </button>
        <div className="relative">
          <FaSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={14}
          />
          <input
            type="text"
            placeholder="Cari riwayat..."
            value={searchTerm}
            onChange={onSearchChange}
            className="w-full pl-8 pr-2 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        <AnimatePresence>
          {Object.entries(groupedConversations).map(([groupTitle, convos]) => (
            <div key={groupTitle} className="mb-2">
              <button
                onClick={() => toggleGroup(groupTitle)}
                className="w-full flex justify-between items-center text-xs font-bold text-gray-400 uppercase p-1 rounded hover:bg-gray-200"
              >
                <span>{groupTitle}</span>
                <FaChevronDown
                  className={`transition-transform duration-200 ${openGroups.includes(groupTitle) ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openGroups.includes(groupTitle) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-1 pt-1">
                      {convos.map((convo) => (
                        <div
                          key={convo.id}
                          className="relative group flex items-center"
                        >
                          <button
                            onClick={() => onSwitchConversation(convo.id)}
                            className={`w-full text-left p-2 rounded-md transition-all duration-200 ${
                              activeConversationId === convo.id
                                ? "bg-secondary text-white"
                                : "text-secondary hover:bg-gray-200 hover:pl-3"
                            }`}
                          >
                            <p className="text-sm truncate">{convo.title}</p>
                            <p
                              className={`text-xs truncate ${activeConversationId === convo.id ? "text-gray-300" : "text-gray-400"}`}
                            >
                              {formatDistanceToNow(new Date(convo.id), {
                                addSuffix: true,
                                locale: id,
                              })}
                            </p>
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ChatSidebar;
