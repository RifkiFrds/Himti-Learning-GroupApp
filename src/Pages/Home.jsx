import HeroSection from "../Components/Organisms/HeroSection";
import StatsSection from "../Components/Organisms/StatsSection";
import TestimonialSection from "../Components/Organisms/TestimonialSection";
import WhyJoinSection from "../Components/Organisms/WhyJoinSection";
import MentorSection from "../Components/Organisms/MentorSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyJoinSection />
      <MentorSection limit={4} showCTA={true} />
      <TestimonialSection />
    </>
  )
}

export default Home
