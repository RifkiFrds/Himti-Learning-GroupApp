import HeroSection from "../Components/Organisms/HeroSection";
import StatsSection from "../Components/Organisms/StatsSection";
import TestimonialSection from "../Components/Organisms/TestimonialSection";
import WhyJoinSection from "../Components/Organisms/WhyJoinSection";
import MentorSection from "../Components/Organisms/MentorSection";
import AnimatedSection from "../Components/Atoms/AnimatedSection";
import HIMTIChatSection from "../Components/Organisms/HIMTIChatSection";

const Home = () => {
  return (
    <>
      <HeroSection />

      <AnimatedSection>
        <HIMTIChatSection />
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

      <AnimatedSection>
        <StatsSection />
      </AnimatedSection>
     
    </>
  )
}

export default Home
