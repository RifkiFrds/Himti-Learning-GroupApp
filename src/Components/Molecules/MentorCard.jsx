import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const MentorCard = ({ mentor }) => {
  return (
    <div className="px-12 py-8 transition-colors duration-300 transform border rounded-xl hover:border-transparent group hover:bg-primary">
      <div className="flex flex-col sm:-mx-4 sm:flex-row sm:items-center">
        <img 
          className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" 
          src={mentor.image} 
          alt={`Foto ${mentor.name}`} 
        />

        <div className="mt-4 sm:mx-4 sm:mt-0">
          <h3 className="text-xl font-semibold text-gray-800 capitalize md:text-2xl 
                       dark:text-white group-hover:text-white">
            {mentor.name}
          </h3>

          <p className="mt-1 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
            {mentor.role}
          </p>
        </div>
      </div>

      <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
        {mentor.bio}
      </p>

      <div className="flex mt-4 -mx-2">
        <a href={mentor.socials.github} target="_blank" rel="noopener noreferrer" title="GitHub"
           className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-300 group-hover:text-white"
           aria-label="Github">
          <FaGithub className="w-6 h-6" />
        </a>
        <a href={mentor.socials.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn"
           className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-300 group-hover:text-white"
           aria-label="LinkedIn">
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a href={mentor.socials.instagram} target="_blank" rel="noopener noreferrer" title="Instagram"
           className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-300 group-hover:text-white"
           aria-label="Instagram">
          <FaInstagram className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default MentorCard;