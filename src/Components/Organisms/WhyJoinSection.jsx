import { FaUserTie, FaMobileAlt, FaBookOpen, } from 'react-icons/fa';

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
      icon: <FaUserTie className="w-8 h-8" />,
      title: "Mentor Berkualitas",
      description: "Dapatkan bimbingan dari mentor yang berpengalaman di bidangnya.",
    },
    {
      icon: <FaMobileAlt className="w-8 h-8" />,
      title: "Akses Mudah",
      description: "Belajar kapan saja dan di mana saja dengan platform yang responsif dan insatallble diberbagai perangkat.",
    },
    {
      icon: <FaBookOpen className="w-8 h-8" />,
      title: "Materi Terupdate",
      description: "Materi pembelajaran yang selalu diperbarui sesuai perkembangan teknologi.",
    },
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