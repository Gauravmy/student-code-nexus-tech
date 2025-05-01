
import { Link } from 'react-router-dom';
import { Code, Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917668759906', '_blank');
  };
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Code className="h-6 w-6 text-techhub-light-purple" />
              <span className="text-xl font-bold tracking-tight">
                Tech<span className="text-techhub-light-purple">Hub</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              A global student-led community focused on DSA problem solving and web development sessions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-full hover:bg-techhub-purple transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-full hover:bg-techhub-purple transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-full hover:bg-techhub-purple transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-full hover:bg-techhub-purple transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-techhub-light-purple transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/#about" className="text-gray-400 hover:text-techhub-light-purple transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/sessions" className="text-gray-400 hover:text-techhub-light-purple transition-colors">Sessions</Link>
              </li>
              <li>
                <Link to="/join" className="text-gray-400 hover:text-techhub-light-purple transition-colors">Join Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-techhub-light-purple transition-colors">LeetCode</a>
              </li>
              <li>
                <a href="https://codeforces.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-techhub-light-purple transition-colors">Codeforces</a>
              </li>
              <li>
                <a href="https://codechef.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-techhub-light-purple transition-colors">CodeChef</a>
              </li>
              <li>
                <a href="https://geeksforgeeks.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-techhub-light-purple transition-colors">GeeksForGeeks</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center cursor-pointer" onClick={handleWhatsAppClick}>
                <Phone className="h-5 w-5 text-techhub-light-purple mr-3" />
                <span className="text-gray-400 hover:text-white transition-colors">7668759906</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-techhub-light-purple mr-3" />
                <a 
                  href="mailto:info@techhub.community" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@techhub.community
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-techhub-light-purple mr-3" />
                <span className="text-gray-400">Global Community</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Tech Hub. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-techhub-light-purple transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-techhub-light-purple transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
