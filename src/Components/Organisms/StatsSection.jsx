const StatsSection = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="pattern"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect fill="url(#pattern)" width="52" height="24" />
            </svg>
            <span className="relative">Perjalanan & Capaian</span>
          </span>{' '}
          Terbaik HIMTI Hingga Saat Ini!
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Bersama HIMTI, kami membangun komunitas belajar yang aktif,
          produktif, dan siap bersaing di dunia industri. Berikut adalah
          capaian terbaik yang telah kami raih bersama anggota dan mentor kami.
        </p>
      </div>

      <div className="relative w-full p-px mx-auto mb-4 overflow-hidden transition-shadow duration-300 border rounded lg:mb-8 lg:max-w-4xl group hover:shadow-xl">
        <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
        <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />

        <div className="relative flex flex-col items-center h-full py-10 bg-white rounded-sm sm:items-stretch sm:flex-row">
          <div className="px-12 py-8 text-center">
            <h6 className="text-4xl font-bold text-primary sm:text-5xl">
              150+
            </h6>
            <p className="text-center md:text-base">
              Project Kolaborasi Sukses Diselesaikan
            </p>
          </div>

          <div className="w-56 h-1 bg-gray-300 rounded-full transition duration-300 transform group-hover:bg-deep-purple-accent-400 group-hover:scale-110 sm:h-auto sm:w-1" />

          <div className="px-12 py-8 text-center">
            <h6 className="text-4xl font-bold text-primary sm:text-5xl">
              200+
            </h6>
            <p className="text-center md:text-base">
              Sertifikat Lulusan Diterbitkan untuk Peserta dalam Berbagai Program
            </p>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-4 text-gray-600 sm:text-center lg:max-w-2xl lg:mb-6 md:px-16">
        Setiap langkah adalah bukti. Setiap capaian adalah hasil nyata. HIMTI
        terus melahirkan talenta siap pakai untuk dunia teknologi. Bersama kami,
        setiap anggota bukan hanya belajar—tetapi tumbuh dan berkontribusi.
      </p>
    </div>
  );
};

export default StatsSection;
