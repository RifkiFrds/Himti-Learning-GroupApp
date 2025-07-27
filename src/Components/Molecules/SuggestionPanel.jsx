import React from 'react';
import { FaCode, FaPython, FaCloud, FaBook } from 'react-icons/fa';
import { suggestionData } from '../../Data/suggestionPrompts';

const icons = {
  FaCode: <FaCode className="text-blue-500" />,
  FaPython: <FaPython className="text-green-500" />,
  FaCloud: <FaCloud className="text-purple-500" />,
  FaBook: <FaBook className="text-orange-500" />,
};

const SuggestionPanel = ({ onSuggestionClick }) => {
  return (
    <div className="mb-3">
      <p className="text-xs font-semibold text-gray-500 mb-2">Mulai dengan salah satu:</p>
      <div className="flex flex-col gap-2">
        {suggestionData.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(suggestion.prompt)}
            className="w-full flex items-center gap-3 text-left p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <div className="p-2 bg-white rounded-md shadow-sm">{icons[suggestion.iconName]}</div>
            <div className="flex-grow">
              <p className="text-sm font-bold text-secondary">{suggestion.title}</p>
              <p className="text-xs text-gray-500">{suggestion.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestionPanel;
