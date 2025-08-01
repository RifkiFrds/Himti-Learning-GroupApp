import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const MentorCard = ({ mentor }) => {
  // Varian animasi untuk setiap kartu, akan dipicu oleh parent
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={cardVariants}
      layout // Animasikan perubahan posisi saat filter
      exit={{ opacity: 0, scale: 0.8 }} // Animasi saat kartu hilang
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={mentor.image}
        alt={mentor.name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-bold text-secondary">{mentor.name}</h3>
      <p className="text-primary font-semibold">{mentor.role}</p>
      <p className="text-sm text-gray-500 mt-2 flex-grow">{mentor.bio}</p>
      <div className="flex justify-center gap-4 mt-4">
        <a
          href={mentor.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-800"
        >
          <FaGithub size={20} />
        </a>
        <a
          href={mentor.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-600"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href={mentor.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-pink-500"
        >
          <FaInstagram size={20} />
        </a>
      </div>
    </motion.div>
  );
};

export default MentorCard;
