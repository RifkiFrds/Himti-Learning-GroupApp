import { Link } from "react-router-dom";
import {
  FaCode,
  FaMobileAlt,
  FaPalette,
  FaNetworkWired,
  FaUserSecret,
  FaUsers,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const icons = {
  web: FaCode,
  mobile: FaMobileAlt,
  uiux: FaPalette,
  network: FaNetworkWired,
  cyberscurity: FaUserSecret,
  sharing: FaUsers,
};

const ProgramCard = ({ icon, title, description, link }) => {
  const IconComponent = icons[icon] || icons.web;

  return (
    <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
      <div className="flex-grow">
        <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
          <IconComponent className="w-8 h-8" />
        </div>
        <h2 className="text-secondary text-xl font-bold mb-3">{title}</h2>
        <p className="leading-relaxed text-base text-gray-700">{description}</p>
      </div>
      <Link
        to={link}
        className="mt-4 text-primary inline-flex items-center font-semibold"
        target="_blank"
      >
        Pelajari Lebih Lanjut
        <HiArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </div>
  );
};

export default ProgramCard;
