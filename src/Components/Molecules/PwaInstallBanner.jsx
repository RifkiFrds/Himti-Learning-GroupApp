import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaTimes } from "react-icons/fa";
import himtiLogo from "../../assets/images/himti-logo.png"; // Pastikan path logo ini benar

const PwaInstallBanner = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // --- LOGIKA BARU: HILANG OTOMATIS ---
    let timer;
    if (isVisible) {
      // Set timer untuk menghilangkan banner setelah 8 detik
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 8000);
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
      // Bersihkan timer jika komponen di-unmount atau isVisible berubah
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isVisible]); // Tambahkan isVisible sebagai dependency

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    await deferredPrompt.userChoice;

    setIsVisible(false);
    setDeferredPrompt(null);
  };

  const handleDismissClick = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          // --- KELAS RESPONSIVE BARU ---
          className="fixed bottom-0 left-0 right-0 sm:bottom-5 sm:left-1/2 sm:-translate-x-1/2 sm:w-[90vw] max-w-lg bg-white rounded-t-2xl sm:rounded-xl shadow-2xl p-4 flex flex-col sm:flex-row items-center gap-4 z-50 border"
        >
          <div className="flex items-center gap-4 w-full">
            <img
              src={himtiLogo}
              alt="HIMTI Logo"
              className="w-12 h-12 flex-shrink-0"
            />
            <div className="flex-grow">
              <p className="font-bold text-secondary">
                Pasang Aplikasi HIMTI Sekarang!
              </p>
              <p className="text-sm text-gray-500">
                Nikmati akses instan langsung dari layar utama Anda.
              </p>
            </div>
            <button
              onClick={handleDismissClick}
              className="sm:hidden text-gray-400 hover:text-gray-600"
            >
              <FaTimes />
            </button>
          </div>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button
              onClick={handleInstallClick}
              className="w-full sm:w-auto flex-shrink-0 px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-purple-700 flex items-center justify-center gap-2"
            >
              <FaDownload />
              Install
            </button>
            <button
              onClick={handleDismissClick}
              className="hidden sm:block text-gray-400 hover:text-gray-600"
            >
              <FaTimes />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PwaInstallBanner;
