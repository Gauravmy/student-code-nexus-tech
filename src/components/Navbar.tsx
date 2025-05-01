
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-md backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-techhub-purple" />
              <span className="text-xl font-bold tracking-tight">
                Tech<span className="text-techhub-purple">Hub</span>
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium hover:text-techhub-purple transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm font-medium hover:text-techhub-purple transition-colors">
              About
            </a>
            <a href="#team" className="text-sm font-medium hover:text-techhub-purple transition-colors">
              Team
            </a>
            <a href="#join" className="text-sm font-medium hover:text-techhub-purple transition-colors">
              Join Us
            </a>
            <Button className="bg-techhub-purple hover:bg-techhub-light-purple">
              <BookOpen className="mr-2 h-4 w-4" />
              Sessions
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-techhub-purple"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-base font-medium hover:text-techhub-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-base font-medium hover:text-techhub-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#team" 
                className="text-base font-medium hover:text-techhub-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </a>
              <a 
                href="#join" 
                className="text-base font-medium hover:text-techhub-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Us
              </a>
              <Button className="bg-techhub-purple hover:bg-techhub-light-purple w-full">
                <BookOpen className="mr-2 h-4 w-4" />
                Sessions
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
