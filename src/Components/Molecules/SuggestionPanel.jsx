import React from "react";
import {
  FaCode,
  FaPython,
  FaCloud,
  FaBook,
  FaChevronRight,
} from "react-icons/fa";
import { suggestionData } from "../../Data/suggestionPrompts";
import { motion } from "framer-motion";

const icons = {
  FaCode: <FaCode className="text-blue-500" />,
  FaPython: <FaPython className="text-green-500" />,
  FaCloud: <FaCloud className="text-purple-500" />,
  FaBook: <FaBook className="text-orange-500" />,
};

const SuggestionPanel = ({ onSuggestionClick }) => {
  return (
    <div className="mb-4">
      <p className="text-xs font-bold text-gray-500 mb-2 px-1">
        Mulai Percakapan
      </p>
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 -mx-3 px-3">
        {suggestionData.map((suggestion, index) => (
          <motion.button
            key={index}
            onClick={() => onSuggestionClick(suggestion.prompt)}
            className="flex-shrink-0 w-48 p-3 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-sm text-left hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-white rounded-full shadow-sm">
                {icons[suggestion.iconName]}
              </div>
              <FaChevronRight className="text-gray-300" />
            </div>
            <div>
              <p className="text-sm font-bold text-secondary">
                {suggestion.title}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {suggestion.description}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default SuggestionPanel;
