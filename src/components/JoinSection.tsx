
import { Phone, CalendarDays, Mail, Users, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const JoinSection = () => {
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
          </div>
          
          <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Us to Join</h3>
            <p className="text-gray-600 mb-8">
              We're looking for active members who are committed to regular participation and professional growth. 
              Reach out to us with a brief introduction about yourself and why you'd like to join.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-techhub-soft-purple p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-techhub-purple" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-techhub-purple font-medium">7668759906</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-techhub-soft-purple p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-techhub-purple" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-techhub-purple font-medium">info@techhub.community</p>
                </div>
              </div>
              
              <Button className="w-full bg-techhub-purple hover:bg-techhub-light-purple py-6 text-lg">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
