const CourseCard = ({ title, description, link, thumbnailColor }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className={`h-40 w-full ${thumbnailColor}`}></div>

      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-secondary mb-2">{title}</h2>
        <p className="text-gray-600 text-base flex-grow mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-block w-full text-center bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
        >
          Mulai Belajar
        </a>
      </div>
    </div>
  );
};

export default CourseCard;