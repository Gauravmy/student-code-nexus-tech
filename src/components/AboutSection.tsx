
import { BookOpen, Code, Database, Layers, Users, Calendar, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const platforms = [
    { name: 'LeetCode', color: 'bg-orange-500' },
    { name: 'Codeforces', color: 'bg-red-500' },
    { name: 'CodeChef', color: 'bg-yellow-600' },
    { name: 'GeeksForGeeks', color: 'bg-green-600' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-techhub-soft-purple/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Tech Hub</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Formed by students, for students. We're dedicated to collaborative learning, professional growth, 
            and mastering both theoretical concepts and practical applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <CardContent className="p-6">
              <div className="mb-4 text-techhub-purple">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Student-Led Community</h3>
              <p className="text-gray-600">
                Created and managed by passionate students who believe in the power of collaborative learning and knowledge sharing.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <CardContent className="p-6">
              <div className="mb-4 text-techhub-purple">
                <Database className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">DSA Problem Solving</h3>
              <p className="text-gray-600">
                Regular sessions focused on mastering data structures and algorithms across popular competitive programming platforms.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <CardContent className="p-6">
              <div className="mb-4 text-techhub-purple">
                <Code className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Development Practice</h3>
              <p className="text-gray-600">
                Hands-on web development sessions covering modern frameworks, best practices, and real-world applications.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <CardContent className="p-6">
              <div className="mb-4 text-techhub-purple">
                <Calendar className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Regular Sessions</h3>
              <p className="text-gray-600">
                Consistent weekly meetups and practice sessions to ensure continuous learning and improvement.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <CardContent className="p-6">
              <div className="mb-4 text-techhub-purple">
                <Globe className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-gray-600">
                A diverse community with members from across the globe, bringing different perspectives and problem-solving approaches.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <CardContent className="p-6">
              <div className="mb-4 text-techhub-purple">
                <Rocket className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Growth</h3>
              <p className="text-gray-600">
                Focus on developing skills that matter for technical interviews, internships, and professional careers.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Platforms We Cover</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform) => (
              <div 
                key={platform.name} 
                className={`${platform.color} text-white px-6 py-3 rounded-full font-medium flex items-center gap-2`}
              >
                <Code className="h-4 w-4" />
                {platform.name}
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-techhub-purple to-techhub-blue rounded-xl shadow-lg p-8 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold mb-3">Learn By Doing</h3>
              <p className="text-white/90">
                At Tech Hub, we believe in active learning. Our sessions are designed to be interactive, 
                hands-on, and focused on practical implementation rather than theory alone.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <BookOpen className="h-24 w-24 text-white/80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
