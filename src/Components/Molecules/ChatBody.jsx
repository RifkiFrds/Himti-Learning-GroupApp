import React, { useState } from "react";
import CodeBlock from "./CodeBlock";
import { FaThumbsUp, FaThumbsDown, FaCheckCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import FeedbackPopup from "./FeedbackPopup";
import avatarMain from "../../assets/images/avatar-main.png";
import avatarThinking from "../../assets/images/avatar-thinking.png";

const ChatBody = ({ chatHistory, isLoading, chatEndRef, onFeedback }) => {
  const [feedbackPopup, setFeedbackPopup] = useState({
    isOpen: false,
    messageIndex: null,
  });

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
          onCancel={() =>
            setFeedbackPopup({ isOpen: false, messageIndex: null })
          }
        />
      )}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        <AnimatePresence>
          {chatHistory.map((msg, index) => (
            <motion.div
              key={msg.id || index}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`flex items-start gap-3 mb-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.sender === "ai" && (
                <img
                  src={avatarMain}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full flex-shrink-0"
                />
              )}
              <div
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`py-2 px-3 rounded-xl max-w-md break-words mb-1 
                ${
                  msg.sender === "user"
                    ? "bg-gradient-to-br from-primary to-purple-700 text-white"
                    : "bg-white text-secondary"
                }`}
                >
                  {msg.text
                    .split(/(```[\s\S]*?```)/g)
                    .filter(Boolean)
                    .map((part, i) =>
                      part.startsWith("```") && part.endsWith("```") ? (
                        <CodeBlock key={i} code={part.slice(3, -3).trim()} />
                      ) : (
                        <div
                          key={i}
                          className={`prose prose-sm max-w-none ${msg.sender === "user" && "prose-invert"}`}
                        >
                          <ReactMarkdown>{part}</ReactMarkdown>
                        </div>
                      ),
                    )}
                </div>
                {msg.sender === "ai" && (
                  <div className="h-8 flex items-center">
                    {msg.feedback === null ? (
                      <div className="flex items-center gap-2 text-gray-400">
                        <button
                          onClick={() => onFeedback(index, "like")}
                          className="hover:text-primary transition-colors p-1"
                          aria-label="Suka jawaban ini"
                        >
                          <FaThumbsUp size={14} />
                        </button>
                        <button
                          onClick={() => handleDislikeClick(index)}
                          className="hover:text-red-500 transition-colors p-1"
                          aria-label="Tidak suka jawaban ini"
                        >
                          <FaThumbsDown size={14} />
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-xs text-green-600 p-1">
                        <FaCheckCircle />
                        <span>Terima kasih atas masukan Anda!</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-3"
          >
            <img
              src={avatarThinking}
              alt="Avatar Berpikir"
              className="w-18 h-14 rounded-full"
            />
            <div className="p-3 rounded-xl bg-gray-200 text-secondary">
              <div className="flex items-center gap-1 text-xs">
                <motion.span
                  animate={{ y: [0, -2, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ●
                </motion.span>
                <motion.span
                  animate={{ y: [0, -2, 0] }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ●
                </motion.span>
                <mospan
                  animate={{ y: [0, -2, 0] }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ●
                </mospan>
              </div>
            </div>
          </motion.div>
        )}
        <div ref={chatEndRef} />
      </div>
    </>
  );
};

export default ChatBody;
