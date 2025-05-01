
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import JoinSection from "@/components/JoinSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EventsSection from "@/components/EventsSection";
import PlatformsSection from "@/components/PlatformsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PlatformsSection />
      <TeamSection />
      <TestimonialsSection />
      <EventsSection />
      <JoinSection />
      <Footer />
    </div>
  );
};

export default Index;
