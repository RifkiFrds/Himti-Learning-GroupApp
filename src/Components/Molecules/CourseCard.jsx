import Button from "../Atoms/Button";

const CourseCard = ({ title, description, link, image }) => {
  return (
    <div className="fade-in-up flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-secondary mb-2">{title}</h2>
        <p className="text-gray-600 text-base flex-grow mb-4">{description}</p>
        <Button
          variant="secondary"
          as="a"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Belajar Sekarang
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
