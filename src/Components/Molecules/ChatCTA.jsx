import React, { useState } from 'react';
import Lottie from 'lottie-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWandSparkles } from 'react-icons/fa6'; // Menggunakan ikon baru
import robotAnimation from '../../assets/robot-lottie.json';

const ChatCTA = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Varian animasi untuk container teks (agar anak-anaknya bisa beranimasi berurutan)
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Setiap anak akan beranimasi 0.1 detik setelah sebelumnya
        delayChildren: 0.2,
      },
    },
  };

  // Varian animasi untuk setiap baris teks
  const textItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="fixed bottom-5 right-5 z-40 flex items-end gap-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            // --- KODE YANG DIPERBARUI DIMULAI DI SINI ---
            className="w-52 p-4 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-lg border border-gray-200"
          >
            <motion.div
              variants={textContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={textItemVariants} className="flex items-center gap-2">
                <FaWandSparkles className="text-primary" />
                <p className="text-sm font-bold text-secondary">Butuh Bantuan?</p>
              </motion.div>
              <motion.p variants={textItemVariants} className="text-xs text-gray-500 mt-1">
                Klik aku untuk tanya apa saja seputar coding!
              </motion.p>
            </motion.div>
            <div className="absolute w-3 h-3 bg-gray-100 transform rotate-45 right-[-6px] bottom-5 border-t border-r border-gray-200"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-28 h-28">
        <div className="absolute inset-0 bg-primary rounded-full animate-pulse-slow"></div>
        <button
          onClick={onClick}
          className="relative w-full h-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
          aria-label="Buka Chat HIMTI"
        >
          <Lottie
            animationData={robotAnimation}
            loop={true}
            className="w-full h-full"
          />
        </button>
      </div>
    </div>
  );
};

export default ChatCTA;
