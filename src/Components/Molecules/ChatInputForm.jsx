import React, { useState, useRef, useEffect } from 'react';
import { FaPaperPlane, FaMicrophone } from 'react-icons/fa';

const ChatInputForm = ({ onSubmit, isLoading }) => {
  const [prompt, setPrompt] = useState('');
  const [isListening, setIsListening] = useState(false); // State untuk status mendengarkan
  const recognitionRef = useRef(null); // Ref untuk menyimpan instance SpeechRecognition
  const textareaRef = useRef(null);

  // Setup SpeechRecognition saat komponen pertama kali dimuat
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn("Browser tidak mendukung Web Speech API.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true; // Terus mendengarkan
    recognition.interimResults = true; // Dapatkan hasil sementara
    recognition.lang = 'id-ID'; // Set bahasa ke Indonesia

    recognition.onresult = (event) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        }
      }
      // Tambahkan hasil transkrip ke prompt yang sudah ada
      if (finalTranscript) {
        setPrompt(prevPrompt => prevPrompt.trim() + ' ' + finalTranscript);
      }
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
  }, []);

  // Fungsi untuk memulai atau menghentikan rekaman suara
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
        placeholder={isListening ? "Mendengarkan..." : "Tanya tentang coding... (Shift+Enter untuk baris baru)"}
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
      
      {/* Tombol Mikrofon Baru */}
      <button
        type="button"
        onClick={handleListen}
        disabled={isLoading}
        className={`p-3 text-white font-bold rounded-lg transition-colors self-stretch flex items-center ${
          isListening 
            ? 'bg-red-500 animate-pulse' 
            : 'bg-secondary hover:bg-gray-600'
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
