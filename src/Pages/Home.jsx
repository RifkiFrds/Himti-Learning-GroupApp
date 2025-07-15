import HeroSection from "../Components/Organisms/HeroSection";
import StatsSection from "../Components/Organisms/StatsSection";
import WhyJoinSection from "../Components/Organisms/WhyJoinSection";


const Home = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyJoinSection />
      {/* Di sini Anda bisa menambahkan section lain seperti Testimoni atau Info HIMTI UMT */}
    </>
  );
};

export default Home;