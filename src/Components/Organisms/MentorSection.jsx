import { mentorsData } from '../../Data/mentors';
import MentorCard from '../Molecules/MentorCard';
import Button from '../Atoms/Button';

const MentorSection = ({ limit, showCTA = true }) => {

  // jika limit diberikan, hanya tampilkan sejumlah mentor sesuai limit
  const visibleMentors = limit ? mentorsData.slice(0, limit) : mentorsData;
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Tim <span className="text-primary">Mentor & Pengurus</span> Kami
        </h2>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
          Mereka adalah para mahasiswa berdedikasi dan praktisi berpengalaman yang meluangkan waktunya untuk berbagi pengetahuan dan membimbing Anda.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2">
           {visibleMentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}

        </div>
         {showCTA && (
          <div className="flex justify-center mt-10">
          <Button
          variant="secondary"
          as="Link"
          to="/about#mentorsection"
          >Lihat Semua Mentor</Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MentorSection;