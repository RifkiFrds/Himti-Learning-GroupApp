import heroIllustration from '../../assets/hero-illustration.png';
import { Link } from 'react-router-dom'; // Tetap import Link untuk dioper ke Button
import Button from '../Atoms/Button'; // <- 1. IMPORT KOMPONEN BUTTON

const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto flex min-h-screen max-w-screen-xl items-center px-4 py-20 sm:px-6 lg:py-24">
        <div className="grid w-full grid-cols-1 items-center gap-y-16 lg:grid-cols-2 lg:gap-x-16">
          
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl md:text-6xl">
              Belajar Online Kini
              <strong className="mt-2 block font-extrabold text-primary">
                Jauh Lebih Mudah
              </strong>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Platform komunitas untuk mahasiswa Teknik Informatika UMT. Tingkatkan skill, perluas jaringan, dan siapkan karir masa depanmu bersama kami.
            </p>

            {/* --- REVISI DI SINI --- */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              
              {/* 2. GUNAKAN BUTTON UNTUK "MULAI SEKARANG" */}
              <Button
                variant="primary" // atau bisa dihapus karena 'primary' adalah default
                href="https://himti-lms.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mulai Sekarang
              </Button>

              {/* 3. GUNAKAN BUTTON UNTUK "LIHAT COURSE" */}
              <Button
                variant="secondary"
                as={Link} // Render sebagai komponen Link
                to="/course" // Gunakan 'to' karena ini adalah Link
              >
                Lihat Course
              </Button>

            </div>
          </div>

          <div className="relative flex items-center justify-center">
             <div className="relative w-full max-w-lg lg:max-w-none">
                <img
                    alt="Mahasiswa"
                    src={heroIllustration}
                    className="max-w-lg h-auto w-full rounded-2xl object-contain"
                />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;