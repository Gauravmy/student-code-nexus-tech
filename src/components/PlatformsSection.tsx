
import { Card } from '@/components/ui/card';
import { Code, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

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

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 bg-gradient-to-br from-techhub-soft-purple to-techhub-soft-blue dark:from-purple-900/20 dark:to-blue-900/20">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins animate-fade-in">Platforms We Cover</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in animate-delay-100">
            Our sessions cover problems and concepts from these leading coding platforms. 
            We help you navigate these resources effectively to maximize your learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platforms.map((platform, index) => (
            <a 
              href={platform.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              key={platform.name}
              className={`transform transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(platform.name)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className={`backdrop-blur-lg bg-white/30 dark:bg-gray-900/30 border border-white/30 dark:border-white/5 rounded-xl shadow-lg overflow-hidden h-full flex flex-col relative group ${
                hoveredCard === platform.name ? 'shadow-xl' : ''
              }`}>
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 ${platform.color.replace('bg-', 'bg-')} opacity-0 blur-2xl transition-opacity duration-500 -z-10 ${
                  hoveredCard === platform.name ? 'opacity-30' : ''
                }`}></div>
                
                <div className={`${platform.color} h-2 w-full`}></div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold font-poppins">{platform.name}</h3>
                    <div className={`${platform.color} bg-opacity-20 p-2 rounded-full transition-all duration-500 ${hoveredCard === platform.name ? 'rotate-12' : ''}`}>
                      <Code className={`h-5 w-5 ${platform.color.replace('bg-', 'text-')}`} />
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm flex-1">{platform.description}</p>
                  <div className={`flex items-center mt-4 text-techhub-purple dark:text-techhub-light-purple text-sm font-medium transition-all duration-300 ${hoveredCard === platform.name ? 'translate-x-1' : ''}`}>
                    Visit Platform <ExternalLink className="ml-2 h-4 w-4" />
                  </div>
                </div>
                
                {/* Animated neon border on hover */}
                <div className={`absolute inset-0 border border-transparent transition-all duration-500 ${
                  hoveredCard === platform.name ? `border-${platform.color.replace('bg-', '')} shadow-[0_0_15px_rgba(var(--${platform.color.replace('bg-', '')}-rgb),0.7)]` : ''
                }`}></div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
