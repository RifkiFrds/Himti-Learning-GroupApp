import HeroSection from "../Components/Organisms/HeroSection";
import StatsSection from "../Components/Organisms/StatsSection";
import TestimonialSection from "../Components/Organisms/TestimonialSection";
import WhyJoinSection from "../Components/Organisms/WhyJoinSection";
import MentorSection from "../Components/Organisms/MentorSection";
import AnimatedSection from "../Components/Atoms/AnimatedSection";

const Home = () => {
  return (
    <>
      <HeroSection />

      <AnimatedSection>
        <StatsSection />
      </AnimatedSection>

      <AnimatedSection>
        <WhyJoinSection />
      </AnimatedSection>

      <AnimatedSection>
        <MentorSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <TestimonialSection />
      </AnimatedSection>
     
    </>
  )
}

export default Home
