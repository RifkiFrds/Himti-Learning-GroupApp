// src/Components/Organisms/HeroSection.jsx

import heroIllustration from '../../assets/hero-illustration.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          
          {/* Kolom Teks (Kiri) */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-4xl font-bold text-secondary sm:text-5xl">
              Belajar Online Kini
              <strong className="block font-extrabold text-primary">
                Jauh Lebih Mudah
              </strong>
            </h1>

            <p className="mt-4 max-w-lg mx-auto lg:mx-0 text-pretty text-gray-700 sm:text-lg/relaxed">
              Platform komunitas untuk mahasiswa Teknik Informatika UMT. Tingkatkan skill, perluas jaringan, dan siapkan karir masa depanmu bersama kami.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="https://himti-lms.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg border border-primary bg-primary px-6 py-3 font-medium text-white shadow-lg transition hover:bg-opacity-90 focus:outline-none focus:ring"
              >
                Mulai Sekarang
              </a>

              <Link
                to="/course"
                className="inline-block rounded-lg border border-gray-200 bg-white px-6 py-3 font-medium text-primary shadow-lg transition hover:bg-gray-50 focus:outline-none focus:ring"
              >
                Lihat Course
              </Link>
            </div>
          </div>

          {/* Kolom Gambar (Kanan) */}
          <div className="relative h-80 overflow-hidden rounded-lg sm:h-80 lg:h-full">
            <img
              alt="Mahasiswa sedang belajar dan berkolaborasi"
              src={heroIllustration}
              className="absolute inset-90 h-full w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
