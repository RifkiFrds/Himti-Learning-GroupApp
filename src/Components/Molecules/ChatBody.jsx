import React, { useState } from 'react';
import CodeBlock from './CodeBlock';
import { FaThumbsUp, FaThumbsDown, FaCheckCircle, FaTimes } from 'react-icons/fa';
import avatarSmile from '../../assets/images/avatar-smile.png';
import avatarThinking from '../../assets/images/avatar-thinking.png';

// Komponen Popup untuk mengumpulkan feedback spesifik dari pengguna
const FeedbackPopup = ({ onSubmit, onCancel }) => {
  const [reason, setReason] = useState('');
  const feedbackOptions = ["Tidak Akurat", "Tidak Relevan", "Tidak Membantu", "Berbahaya"];

  const handleSubmit = () => {
    if (reason) {
      onSubmit(reason);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg text-secondary">Beri kami masukan</h3>
          <button onClick={onCancel} className="text-gray-400 hover:text-gray-600">
            <FaTimes />
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-4">Apa yang salah dengan jawaban ini?</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {feedbackOptions.map(opt => (
            <button 
              key={opt}
              onClick={() => setReason(opt)}
              className={`text-xs font-medium py-1 px-3 rounded-full border ${reason === opt ? 'bg-primary text-white border-primary' : 'bg-gray-100 text-secondary border-gray-200'}`}
            >
              {opt}
            </button>
          ))}
        </div>
        <textarea
          value={reason.startsWith('Tidak') ? '' : reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Tulis masukan lainnya (opsional)..."
          className="w-full p-2 border rounded-md text-sm resize-none"
          rows={3}
        />
        <div className="flex justify-end mt-4">
          <button 
            onClick={handleSubmit} 
            disabled={!reason}
            className="px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-purple-700 disabled:bg-gray-400"
          >
            Kirim Masukan
          </button>
        </div>
      </div>
    </div>
  );
};


// Komponen Utama ChatBody
const ChatBody = ({ chatHistory, isLoading, chatEndRef, onFeedback }) => {
  const [feedbackPopup, setFeedbackPopup] = useState({ isOpen: false, messageIndex: null });

  const handleDislikeClick = (index) => {
    setFeedbackPopup({ isOpen: true, messageIndex: index });
  };

  const handleFeedbackSubmit = (reason) => {
    if (feedbackPopup.messageIndex !== null) {
      onFeedback(feedbackPopup.messageIndex, `dislike: ${reason}`);
    }
    setFeedbackPopup({ isOpen: false, messageIndex: null });
  };

  return (
    <>
      {feedbackPopup.isOpen && (
        <FeedbackPopup 
          onSubmit={handleFeedbackSubmit}
          onCancel={() => setFeedbackPopup({ isOpen: false, messageIndex: null })}
        />
      )}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {chatHistory.map((msg, index) => (
          <div key={index} className={`flex items-start gap-3 mb-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.sender === 'ai' && (
              <img src={avatarSmile} alt="Avatar" className="w-10 h-10 rounded-full flex-shrink-0" />
            )}

            <div className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`py-2 px-3 rounded-xl max-w-md break-words mb-1 ${msg.sender === 'user' ? 'bg-secondary text-white' : 'bg-gray-200 text-secondary'}`}>
                {msg.text.split(/(```[\s\S]*?```)/g).filter(Boolean).map((part, i) =>
                  part.startsWith('```') && part.endsWith('```')
                    ? <CodeBlock key={i} code={part.slice(3, -3).trim()} />
                    : <p key={i} className="text-sm whitespace-pre-wrap">{part}</p>
                )}
              </div>
              
              {msg.sender === 'ai' && (
                <div className="h-8 flex items-center">
                  {msg.feedback === null ? (
                    <div className="flex items-center gap-2 text-gray-400">
                      <button onClick={() => onFeedback(index, 'like')} className="hover:text-primary transition-colors p-1" aria-label="Suka jawaban ini"><FaThumbsUp size={14} /></button>
                      <button onClick={() => handleDislikeClick(index)} className="hover:text-red-500 transition-colors p-1" aria-label="Tidak suka jawaban ini"><FaThumbsDown size={14} /></button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-xs text-green-600 p-1"><FaCheckCircle /><span>Terima kasih atas masukan Anda!</span></div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center gap-3 mb-3">
            <img src={avatarThinking} alt="Avatar Berpikir" className="w-10 h-10 rounded-full" />
            <div className="p-3 rounded-xl bg-gray-200 text-secondary">
              <p className="text-sm italic">HIMTIChat sedang mengetik...</p>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
    </>
  );
};

export default ChatBody;
