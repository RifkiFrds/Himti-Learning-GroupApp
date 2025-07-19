import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaHeart } from 'react-icons/fa';

const testimonialsData = [
  {
    name: 'Siti Aminah',
    handle: '@sitiaminah',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    testimonial: 'Selain dapat ilmu UI/UX, yang paling berharga itu komunitasnya. Bisa diskusi bareng teman-teman, dapat feedback langsung, jadi makin semangat belajarnya.',
    likes: 121,
    timestamp: '10:15 AM · 12 Jul 2025',
    socials: {
      github: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Muhamad Rifki Firdaus',
    handle: '@rifkifrds_',
    image: '/rifki-formal.png',
    testimonial: 'Ikut kelompok belajar Web Development di HIMTI adalah keputusan terbaik. Materinya terstruktur, mentornya sabar, dan di akhir program punya proyek nyata buat dipamerin!',
    likes: 240,
    timestamp: '3:45 PM · 10 Jul 2025',
    socials: {
      github: 'https://github.com/RifkiFrds/',
      instagram: 'https://www.instagram.com/frdskii_/',
      linkedin: 'https://www.linkedin.com/in/muhamad-rifkifrds/'
    }
  },
  {
    name: 'Anggi',
    handle: '@anggi23_',
    image: 'https://randomuser.me/api/portraits/women/54.jpg',
    testimonial: 'Portofolio dari kelompok belajar Mobile Dev jadi nilai plus waktu saya magang. Dikasih kepercayaan megang proyek karena dianggap sudah punya pengalaman. Keren!',
    likes: 315,
    timestamp: '9:00 AM · 8 Jul 2025',
    socials: {
      github: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
   {
    name: 'Daris',
    handle: '@daris12_',
    image: 'https://randomuser.me/api/portraits/men/43.jpg',
    testimonial: 'Workshop jaringan dari HIMTI benar-benar membuka wawasan. Pematerinya praktisi langsung dari industri, jadi ilmunya relevan banget buat dunia kerja.',
    likes: 188,
    timestamp: '7:30 PM · 5 Jul 2025',
    socials: {
      github: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Dewi Lestari',
    handle: '@dewilestari',
    image: 'https://randomuser.me/api/portraits/women/43.jpg',
    testimonial: 'Awalnya takut ikut kelompok belajar karena merasa paling pemula. Ternyata lingkungannya sangat welcome, semua saling bantu. Terima kasih HIMTI!',
    likes: 250,
    timestamp: '11:11 AM · 2 Jul 2025',
    socials: {
      github: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
   {
    name: 'Agus Setiawan',
    handle: '@agus_setia',
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
    testimonial: 'Sharing session rutinnya juara! Dapat banyak insight baru dari kating dan kadang dari alumni juga. Sangat bermanfaat untuk pengembangan diri.',
    likes: 198,
    timestamp: '8:05 PM · 1 Jul 2025',
    socials: {
      github: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
];


const TestimonialSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-secondary">
            Apa Kata Anggota Kami
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Pengalaman nyata dari para mahasiswa yang telah bergabung dan berkembang bersama kami di HIMTI Learning Group.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={`Profil ${testimonial.name}`} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.handle}</p>
                </div>

                <div className="ml-auto flex items-center space-x-3">
                  <a href={testimonial.socials.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="text-gray-400 hover:text-gray-800 transition-colors">
                    <FaGithub size={20} />
                  </a>
                  <a href={testimonial.socials.instagram} target="_blank" rel="noopener noreferrer" title="Instagram" className="text-gray-400 hover:text-pink-500 transition-colors">
                    <FaInstagram size={20} />
                  </a>
                   <a href={testimonial.socials.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.testimonial}</p>
              <div className="flex items-center mt-4 text-gray-500">
                <FaHeart className="w-5 h-5 mr-1 text-red-500" />
                <span className="mr-4 font-medium">{testimonial.likes}</span>
                <span className="text-sm ml-auto">{testimonial.timestamp}</span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;