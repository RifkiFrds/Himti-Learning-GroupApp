// components/Loaders/PowerLogoLoader.jsx
import React from "react";
import { motion } from "framer-motion";
import himtiLogo from "../../assets/images/himti-logo.png"; // Sesuaikan path ke logo Anda

const PowerLogoLoader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-900 overflow-hidden">
      {/* Container untuk menampung logo dan aura */}
      <div className="relative flex justify-center items-center w-40 h-40">
        {/* 1. Aura Energi (Cincin yang mengembang) */}
        <motion.div
          className="absolute w-full h-full rounded-full border-2 border-purple-500"
          animate={{
            scale: [0.8, 1.5],
            opacity: [1, 0],
          }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        {/* 2. Logo di tengah dengan denyut yang lebih kuat */}
        <motion.img
          src={himtiLogo}
          alt="Loading..."
          className="w-24 h-24 relative z-10"
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2.3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </div>

      {/* 3. Teks yang lebih kontekstual */}
      <motion.p
        className="mt-4 text-gray-400 font-sans tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Membangun Aplikasi...
      </motion.p>
    </div>
  );
};

export default PowerLogoLoader;
