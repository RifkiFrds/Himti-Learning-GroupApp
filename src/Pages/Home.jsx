import HeroSection from "../components/Organisms/HeroSection";
import StatsSection from "../components/Organisms/StatsSection";
import TestimonialSection from "../components/Organisms/TestimonialSection";
import WhyJoinSection from "../components/Organisms/WhyJoinSection";
import MentorSection from "../components/Organisms/MentorSection";

function Home() {
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
