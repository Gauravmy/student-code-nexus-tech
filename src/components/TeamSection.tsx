
import { Github, Linkedin, Mail } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Advay",
      role: "Founder",
      bio: "Passionate about algorithms and web technologies. Founded Tech Hub to create a collaborative learning environment for students.",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      socials: {
        github: "#",
        linkedin: "#",
        mail: "#"
      }
    },
    {
      name: "Gaurav",
      role: "Manager",
      bio: "Experienced in organizing technical communities and events. Ensures smooth operation of all Tech Hub sessions and activities.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      socials: {
        github: "#",
        linkedin: "#",
        mail: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated individuals behind Tech Hub who work tirelessly to create valuable learning experiences.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden max-w-md w-full hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-techhub-purple font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.bio}</p>
                <div className="flex space-x-4">
                  <a 
                    href={member.socials.github} 
                    className="text-gray-600 hover:text-techhub-purple transition-colors"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href={member.socials.linkedin}
                    className="text-gray-600 hover:text-techhub-purple transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href={member.socials.mail}
                    className="text-gray-600 hover:text-techhub-purple transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-md p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Global Reach</h3>
          <p className="text-gray-600 mb-6">
            Our community extends beyond borders with active members and friends across multiple countries,
            bringing diverse perspectives to our technical discussions and problem-solving approaches.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["India", "United States", "Canada", "Germany", "Singapore", "Australia", "United Kingdom"].map(country => (
              <span key={country} className="bg-techhub-soft-purple px-4 py-2 rounded-full text-sm font-medium text-techhub-purple">
                {country}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
