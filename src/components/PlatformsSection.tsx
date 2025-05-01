
import { Card } from '@/components/ui/card';
import { Code, ExternalLink } from 'lucide-react';

const PlatformsSection = () => {
  const platforms = [
    { 
      name: 'LeetCode', 
      color: 'bg-orange-500',
      url: 'https://leetcode.com',
      description: 'The leading platform for coding interview preparation with thousands of algorithm problems.'
    },
    { 
      name: 'Codeforces', 
      color: 'bg-red-500',
      url: 'https://codeforces.com',
      description: 'Popular competitive programming platform with regular contests and educational rounds.'
    },
    { 
      name: 'CodeChef', 
      color: 'bg-yellow-600',
      url: 'https://codechef.com',
      description: 'Renowned platform for competitive programming with monthly contests and learning resources.'
    },
    { 
      name: 'GeeksForGeeks', 
      color: 'bg-green-600',
      url: 'https://geeksforgeeks.org',
      description: 'Comprehensive resource for computer science and programming with tutorials and practice problems.'
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-techhub-soft-purple to-techhub-soft-blue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Platforms We Cover</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our sessions cover problems and concepts from these leading coding platforms. 
            We help you navigate these resources effectively to maximize your learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platforms.map((platform) => (
            <a 
              href={platform.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              key={platform.name}
              className="transform transition-transform hover:scale-105"
            >
              <Card className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
                <div className={`${platform.color} h-2 w-full`}></div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{platform.name}</h3>
                    <div className={`${platform.color} bg-opacity-20 p-2 rounded-full`}>
                      <Code className={`h-5 w-5 ${platform.color.replace('bg-', 'text-')}`} />
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm flex-1">{platform.description}</p>
                  <div className="flex items-center mt-4 text-techhub-purple text-sm font-medium">
                    Visit Platform <ExternalLink className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
