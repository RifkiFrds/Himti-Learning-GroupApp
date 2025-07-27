import React, { useState, useRef, useEffect } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const ChatInputForm = ({ onSubmit, isLoading }) => {
  const [prompt, setPrompt] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [prompt]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    onSubmit(prompt);
    setPrompt('');
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex items-end gap-2">
      <textarea
        ref={textareaRef}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Tanya tentang coding... (Shift+Enter untuk baris baru)"
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none overflow-y-auto"
        rows={1}
        style={{ maxHeight: '120px' }}
        disabled={isLoading}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleFormSubmit(e);
          }
        }}
      />
      <button
        type="submit"
        disabled={isLoading || !prompt.trim()}
        className="p-3 bg-primary text-white font-bold rounded-lg hover:bg-purple-700 disabled:bg-gray-400 transition-colors self-stretch flex items-center"
        aria-label="Kirim Pesan"
      >
        <FaPaperPlane />
      </button>
    </form>
  );
};

export default ChatInputForm;
