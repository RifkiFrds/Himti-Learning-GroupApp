import React, { useState } from "react";
import { FaRegClipboard, FaCheck } from "react-icons/fa";

const CodeBlock = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="bg-[#282c34] rounded-lg my-2 overflow-hidden border border-gray-700">
      <div className="flex justify-between items-center px-4 py-1 bg-gray-700">
        <span className="text-xs text-gray-400 font-sans">Code</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-white font-semibold py-1 px-2 rounded-md transition-colors"
        >
          {isCopied ? (
            <>
              <FaCheck className="text-green-400" />
              Tersalin!
            </>
          ) : (
            <>
              <FaRegClipboard />
              Salin
            </>
          )}
        </button>
      </div>
      <pre className="p-4 text-white text-sm overflow-x-auto font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
