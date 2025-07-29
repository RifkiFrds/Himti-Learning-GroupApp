import heroIllustration from '../../assets/images/hero-illustration.png';
import Button from '../Atoms/Button'; 
import ParticlesBackground from '../Atoms/ParticlesBackground';
import AnimatedHeroTitle from '../Molecules/AnimatedHeroTitle';

const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden animate-fade-in-up">
      <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-[#9038FF] via-[#f9f6f4] to-white"></div>
      <ParticlesBackground />
      <div className="container mx-auto flex min-h-screen items-center px-4 pt-1 pb-12 sm:px-6">
        <div className="grid w-full grid-cols-1 items-center gap-y-16 lg:grid-cols-2 lg:gap-x-16">
          <div className="text-center lg:text-left">
            <AnimatedHeroTitle/>

            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              HIMTI Learning Group hadir sebagai ruang belajar interaktif bagi mahasiswa Teknik Informatika UMT. Dapatkan materi, diskusi, dan jaringan yang mendukung karirmu di dunia digital.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button
                variant="primary"
                href="https://himti-lms.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mulai Sekarang
              </Button>

              <Button
                variant="secondary"
                as='Link'
                to="/course"
                rel="noopener noreferrer"
              >
                Lihat Course
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
             <div className="relative w-full max-w-xl lg:max-w-none">
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