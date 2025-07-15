const Feature = ({ icon, title, description }) => (
  <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-primary mb-5 flex-shrink-0">
      {icon}
    </div>
    <div className="flex-grow">
      <h2 className="text-secondary text-lg title-font font-bold mb-3">{title}</h2>
      <p className="leading-relaxed text-base">{description}</p>
    </div>
  </div>
);


const WhyJoinSection = () => {
  const features = [
    {
      icon: <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path></svg>,
      title: "Komunitas Kolaboratif",
      description: "Belajar bersama teman-teman sefrekuensi, diskusikan materi, dan bangun proyek bersama untuk memperdalam pemahaman."
    },
    {
      icon: <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>,
      title: "Materi Terstruktur",
      description: "Akses kurikulum dan course yang dirancang khusus untuk kebutuhan industri saat ini, mulai dari dasar hingga tingkat lanjut."
    },
    {
      icon: <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
      title: "Mentor Berpengalaman",
      description: "Dapatkan bimbingan langsung dari para senior dan praktisi yang sudah berpengalaman di bidangnya masing-masing."
    }
  ];

  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-bold title-font text-secondary mb-4">Kenapa Bergabung di Himti Learning Group?</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">Alasan mengapa platform ini adalah tempat terbaik untuk perjalanan belajarmu.</p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-primary inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {features.map((feature, index) => (
            <Feature key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyJoinSection;