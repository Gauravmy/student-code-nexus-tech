
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionsContent from "@/components/SessionsContent";
import PlatformsSection from "@/components/PlatformsSection";
import { Toaster } from "@/components/ui/toaster";
import FloatingActionButton from "@/components/FloatingActionButton";

const Sessions = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-20"></div>
      <SessionsContent />
      <PlatformsSection />
      <Footer />
      <Toaster />
      <FloatingActionButton />
    </div>
  );
};

export default Sessions;
