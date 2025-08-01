import React from "react";
import {
  FaProjectDiagram,
  FaUsers,
  FaSmile,
  FaCode,
  FaChalkboardTeacher,
  FaLaptopCode,
} from "react-icons/fa";
import AnimatedCounter from "../Atoms/AnimatedCounter";
import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    {
      icon: <FaProjectDiagram className="w-8 h-8 text-purple-300" />,
      value: 300,
      label: "Proyek Portofolio Dibuat",
    },
    {
      icon: <FaUsers className="w-8 h-8 text-purple-300" />,
      value: 5,
      label: "Kelompok Belajar Aktif",
    },
    {
      icon: <FaSmile className="w-8 h-8 text-purple-300" />,
      value: 95,
      label: "Kepuasan Peserta",
      suffix: "%",
    },
    {
      icon: <FaCode className="w-8 h-8 text-purple-300" />,
      value: 1000,
      label: "Baris Kode Ditulis",
    },
    {
      icon: <FaChalkboardTeacher className="w-8 h-8 text-purple-300" />,
      value: 20,
      label: "Sesi Mentoring",
    },
    {
      icon: <FaLaptopCode className="w-8 h-8 text-purple-300" />,
      value: 50,
      label: "Kontribusi Open Source",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#111827] to-[#1e1b4b] text-white overflow-hidden">
      {/* --- SHAPE DIVIDER ATAS --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          className="relative block w-full h-[150px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
          82.39-16.72,168.19-17.73,250.45-.39C823.78,31,
          906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,
          214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          />
        </svg>
      </div>

      {/* --- Background Layered Effect --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239038FF' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Perjalanan & Capaian Kami
          </h2>
          <p className="mt-4 text-lg text-purple-300">
            Setiap angka adalah cerita. Setiap cerita adalah bukti komitmen kami
            untuk tumbuh bersama.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-xl hover:shadow-[0_0_40px_rgba(144,56,255,0.3)] transition-shadow duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full">
                {stat.icon}
              </div>
              <h3 className="text-5xl font-bold text-white">
                <AnimatedCounter value={stat.value} />
                {stat.suffix || "+"}
              </h3>
              <p className="mt-2 text-purple-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
