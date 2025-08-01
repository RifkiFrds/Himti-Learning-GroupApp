import { FaUsers, FaListAlt, FaBriefcase } from "react-icons/fa";
import Button from "../Atoms/Button";

const AboutHero = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-secondary to-primary text-white py-20 animate-fade-in-up">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tentang HIMTI Learning Group
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Tempat di mana semangat belajar bertemu dengan kolaborasi untuk
            melahirkan talenta digital masa depan.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <section className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Cerita Kami
              </h2>
              <p className="text-gray-700 mb-4">
                Himpunan Mahasiswa Teknik Informatika (HIMTI) Universitas
                Muhammadiyah Tangerang didirikan pada{" "}
                <strong>9 Oktober 2011</strong> oleh{" "}
                <strong>Muhammad Jonni, S.Kom., M.Kom.</strong> Sejak awal,
                HIMTI dirancang sebagai himpunan yang tidak hanya berfokus pada
                organisasi, tetapi juga memiliki tujuan utama untuk meningkatkan
                nilai akademik para mahasiswanya.
              </p>
              <p className="text-gray-700 mb-4">
                Sebagai perwujudan dari tujuan tersebut,{" "}
                <strong>HIMTI Learning Group</strong> hadir sebagai program
                unggulan. Program ini menjadi wadah bagi mahasiswa untuk secara
                kolaboratif mendalami minat di berbagai bidang teknologi, mulai
                dari pengembangan Web, Android Dev, Teknik Jaringan, hingga
                desain UI/UX.
              </p>
              <p className="text-gray-700">
                Kami percaya bahwa belajar paling efektif adalah ketika
                dilakukan bersama-sama, saling berbagi pengetahuan, dan
                mengerjakan proyek nyata yang dapat menjadi portofolio berharga.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Tim HIMTI sedang berdiskusi"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </section>

        <section className="bg-primary/10 rounded-xl p-12 mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-6">
              Misi Kami
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              "Menciptakan lingkungan belajar yang suportif dan inklusif untuk
              memberdayakan setiap mahasiswa menjadi talenta digital yang
              kompeten dan siap berkarir."
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64 text-center">
                <div className="text-primary mb-4 inline-block">
                  <FaUsers size={40} />
                </div>
                <h3 className="font-bold text-secondary mb-2">
                  Kolaborasi & Komunitas
                </h3>
                <p className="text-gray-600">
                  Kami membangun komunitas yang kuat tempat semua orang bisa
                  bertanya dan berbagi.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64 text-center">
                <div className="text-primary mb-4 inline-block">
                  <FaListAlt size={40} />
                </div>
                <h3 className="font-bold text-secondary mb-2">
                  Pembelajaran Terstruktur
                </h3>
                <p className="text-gray-600">
                  Menyediakan kurikulum dan alur belajar yang jelas untuk setiap
                  peminatan.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64 text-center">
                <div className="text-primary mb-4 inline-block">
                  <FaBriefcase size={40} />
                </div>
                <h3 className="font-bold text-secondary mb-2">
                  Portofolio Nyata
                </h3>
                <p className="text-gray-600">
                  Mendorong pembuatan proyek akhir yang bisa menjadi portofolio
                  berharga.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary to-accent text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Siap Bergabung dan Berkembang?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Jadilah bagian dari komunitas kami dan tingkatkan skill digital Anda
            ke level selanjutnya.
          </p>
          <Button variant="primary" as="Link" to="/" rel="noopener noreferrer">
            Daftar Sekarang
          </Button>
        </section>
      </main>
    </>
  );
};

export default AboutHero;
