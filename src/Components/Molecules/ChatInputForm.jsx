import React, { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaMicrophone } from "react-icons/fa";

const ChatInputForm = ({ onSubmit, isLoading }) => {
  const [prompt, setPrompt] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn("Browser tidak mendukung Web Speech API.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "id-ID";

    recognition.onresult = (event) => {
      let finalTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        }
      }
      if (finalTranscript) {
        setPrompt((prevPrompt) => prevPrompt.trim() + " " + finalTranscript);
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
  }, []);

  const handleListen = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      recognitionRef.current?.start();
    }
    setIsListening(!isListening);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [prompt]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    onSubmit(prompt);
    setPrompt("");
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex items-end gap-2">
      <textarea
        ref={textareaRef}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder={isListening ? "Mendengarkan..." : "Cari solusi coding..."}
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none overflow-y-auto"
        rows={1}
        style={{ maxHeight: "120px" }}
        disabled={isLoading}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleFormSubmit(e);
          }
        }}
      />

      <button
        type="button"
        onClick={handleListen}
        disabled={isLoading}
        className={`p-3 rounded-lg transition-colors self-stretch flex items-center ${
          isListening
            ? "bg-primary text-white animate-pulse"
            : "bg-gray-400 text-white hover:bg-gray-200"
        }`}
        aria-label="Gunakan Mikrofon"
      >
        <FaMicrophone />
      </button>

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
