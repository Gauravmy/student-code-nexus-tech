
import { MessageSquare } from 'lucide-react';

const FloatingActionButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917668759906', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-techhub-purple to-techhub-blue text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
      aria-label="Join via WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
      <span className="sr-only">Join via WhatsApp</span>
    </button>
  );
};

export default FloatingActionButton;
