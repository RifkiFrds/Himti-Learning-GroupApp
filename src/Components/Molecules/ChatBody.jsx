import React from 'react';
import CodeBlock from './CodeBlock'; 

const ChatBody = ({ chatHistory, isLoading, chatEndRef }) => {
  return (
    <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
      {chatHistory.map((msg, index) => (
        <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-3`}>
          <div className={`py-2 px-3 rounded-xl max-w-md break-words ${msg.sender === 'user' ? 'bg-secondary text-white' : 'bg-gray-200 text-secondary'}`}>
            {msg.text.split(/(```[\s\S]*?```)/g).filter(Boolean).map((part, i) =>
              part.startsWith('```') && part.endsWith('```')
                ? <CodeBlock key={i} code={part.slice(3, -3).trim()} />
                : <p key={i} className="text-sm whitespace-pre-wrap">{part}</p>
            )}
          </div>
        </div>
      ))}
      {isLoading && (
        <div className="flex justify-start mb-3">
          <div className="p-3 rounded-xl bg-gray-200 text-secondary">
            <p className="text-sm italic">HIMTIChat sedang mengetik...</p>
          </div>
        </div>
      )}
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatBody;
