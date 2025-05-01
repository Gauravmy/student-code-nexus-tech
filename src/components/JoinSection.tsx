
import { Phone, CalendarDays, Mail, Users, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const JoinSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open WhatsApp with pre-filled message
    const message = `Hi Tech Hub! I'm ${name} and I'm interested in joining your community. My email is ${email} and I'm particularly interested in ${interest}.`;
    const whatsappUrl = `https://wa.me/917668759906?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917668759906', '_blank');
  };

  return (
    <section id="join" className="py-16 md:py-24 bg-gradient-to-br from-techhub-purple/10 to-techhub-blue/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Become part of our active community of tech enthusiasts. We welcome dedicated students 
            who are passionate about growing their skills in DSA and web development.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Why Join Tech Hub?</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="bg-techhub-soft-purple p-2 rounded-full mr-4 mt-1">
                  <CalendarDays className="h-5 w-5 text-techhub-purple" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Regular Practice Sessions</h4>
                  <p className="text-gray-600">Consistent weekly sessions to strengthen your DSA knowledge and web development skills.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-techhub-soft-purple p-2 rounded-full mr-4 mt-1">
                  <Users className="h-5 w-5 text-techhub-purple" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Supportive Community</h4>
                  <p className="text-gray-600">Connect with like-minded peers who share your passion for technology and growth.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-techhub-soft-purple p-2 rounded-full mr-4 mt-1">
                  <Code className="h-5 w-5 text-techhub-purple" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Practical Focus</h4>
                  <p className="text-gray-600">Emphasis on building practical skills that prepare you for technical interviews and professional work.</p>
                </div>
              </li>
            </ul>
            <Button 
              className="w-full bg-techhub-purple hover:bg-techhub-light-purple py-6 text-lg"
              onClick={handleWhatsAppClick}
            >
              Join via WhatsApp
            </Button>
          </div>
          
          <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Us to Join</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-techhub-purple focus:outline-none focus:ring-1 focus:ring-techhub-purple"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-techhub-purple focus:outline-none focus:ring-1 focus:ring-techhub-purple"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="interest" className="block text-sm font-medium">Primary Interest</label>
                <select
                  id="interest"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-techhub-purple focus:outline-none focus:ring-1 focus:ring-techhub-purple"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  required
                >
                  <option value="">Select your interest</option>
                  <option value="DSA">Data Structures & Algorithms</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Both">Both DSA and Web Development</option>
                </select>
              </div>
              
              <Button type="submit" className="w-full bg-techhub-purple hover:bg-techhub-light-purple py-6 text-lg">
                Send Message
              </Button>
            </form>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-techhub-purple mr-2" />
                  <p className="text-gray-600">7668759906</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-techhub-purple mr-2" />
                  <p className="text-gray-600">info@techhub.community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
