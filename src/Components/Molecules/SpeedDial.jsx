import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const SpeedDial = ({ actions, direction = "up" }) => {
  // 1. Tambahkan prop 'direction'
  const [isOpen, setIsOpen] = useState(false);

  // 2. Tentukan kelas posisi berdasarkan arah
  const menuPositionClass =
    direction === "up"
      ? "absolute bottom-full right-0 mb-3"
      : "absolute top-full right-0 mt-3";

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full shadow-lg hover:bg-purple-700 transition-transform duration-300"
        style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
        aria-label="Buka menu aksi"
      >
        {isOpen ? <FaTimes size={20} /> : <FaPlus size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: direction === "up" ? 10 : -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: direction === "up" ? 10 : -10 }}
            className={`${menuPositionClass} flex flex-col items-end gap-2`}
          >
            {actions.map((action, index) => (
              <div key={index} className="flex items-center gap-2 group">
                <span className="bg-gray-700 text-white text-xs font-bold py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {action.label}
                </span>
                <button
                  onClick={() => {
                    action.onClick();
                    setIsOpen(false);
                  }}
                  className="w-10 h-10 flex items-center justify-center bg-white text-secondary rounded-full shadow-md hover:bg-gray-100 flex-shrink-0"
                >
                  {action.icon}
                </button>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SpeedDial;
