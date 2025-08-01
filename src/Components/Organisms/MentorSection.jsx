import React, { useState, useMemo } from "react";
import { mentorsData } from "../../Data/mentors";
import { motion, AnimatePresence } from "framer-motion";
import MentorCard from "../Molecules/MentorCard";

const MentorSection = () => {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filterOptions = useMemo(() => {
    const allSkills = mentorsData.flatMap((mentor) => mentor.keahlian);
    return ["Semua", ...new Set(allSkills)];
  }, []);

  const filteredMentors = useMemo(() => {
    if (activeFilter === "Semua") {
      return mentorsData;
    }
    return mentorsData.filter((mentor) =>
      mentor.keahlian.includes(activeFilter),
    );
  }, [activeFilter]);

  // Varian untuk container grid, untuk menganimasikan anak-anaknya (stagger effect)
  const containerVariants = {
    hidden: { opacity: 1 }, // Mulai dengan container terlihat
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Setiap anak akan beranimasi 0.1d setelah sebelumnya
      },
    },
  };

  return (
    <section id="mentorsection" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
            Tim <span className="text-primary">Mentor & Pengurus</span> Kami
          </h2>
          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
            Mereka adalah para mahasiswa berdedikasi dan praktisi berpengalaman
            yang siap membimbing Anda.
          </p>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-3 mb-10">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible" // Animasikan anak-anak saat komponen ini dirender
        >
          <AnimatePresence>
            {filteredMentors.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default MentorSection;
