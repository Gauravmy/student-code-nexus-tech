
import { useState } from 'react';
import { Calendar as CalendarIcon, Code2, Database, Clock, Calendar, Users, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SessionsContent = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  const dsaSessions = [
    {
      title: "Array & String Manipulation",
      time: "7:00 PM - 8:30 PM IST",
      day: "Monday",
      description: "Focusing on fundamental array and string manipulation techniques with practice problems from LeetCode and CodeForces."
    },
    {
      title: "Hash Tables & Sets",
      time: "7:00 PM - 8:30 PM IST",
      day: "Tuesday",
      description: "Diving into efficient lookup data structures with practical applications and problem-solving."
    },
    {
      title: "Linked Lists & Stacks/Queues",
      time: "7:00 PM - 8:30 PM IST",
      day: "Wednesday",
      description: "Exploring linear data structures with focus on implementation details and common patterns."
    },
    {
      title: "Trees & Graphs",
      time: "7:00 PM - 8:30 PM IST",
      day: "Thursday",
      description: "Tackling hierarchical and network data structures with traversal algorithms and problem patterns."
    },
    {
      title: "Dynamic Programming",
      time: "7:00 PM - 8:30 PM IST",
      day: "Friday",
      description: "Breaking down complex problems into simpler subproblems with optimization techniques."
    }
  ];
  
  const webDevSessions = [
    {
      title: "Frontend Fundamentals",
      date: "June 15-16, 2024",
      topics: ["HTML5/CSS3 Advanced", "JavaScript Essentials", "Responsive Design"],
      description: "Master the building blocks of modern web interfaces with hands-on projects and best practices."
    },
    {
      title: "React Development",
      date: "June 22-23, 2024",
      topics: ["Component Architecture", "State Management", "React Hooks"],
      description: "Build interactive UIs with the React library focusing on component-based architecture."
    },
    {
      title: "Backend with Node.js",
      date: "June 29-30, 2024",
      topics: ["Express.js", "RESTful APIs", "Database Integration"],
      description: "Create scalable server-side applications with JavaScript and modern backend technologies."
    },
    {
      title: "Full-Stack Integration",
      date: "July 6-7, 2024",
      topics: ["API Integration", "Authentication", "Deployment"],
      description: "Connect frontend and backend systems to create complete web applications."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sessions</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tech Hub offers structured learning sessions in both Data Structures & Algorithms and Web Development.
            Join our regular practice to boost your skills and prepare for technical challenges.
          </p>
        </div>

        <Tabs defaultValue="dsa" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="dsa">Daily DSA Sessions</TabsTrigger>
            <TabsTrigger value="webdev">Weekend Web Dev</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dsa" className="mt-8">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="bg-techhub-soft-purple p-4 rounded-lg mb-6">
                    <Database className="h-12 w-12 text-techhub-purple mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Daily DSA Practice</h3>
                    <p className="text-gray-600">
                      Consistent daily practice sessions to master data structures and algorithms. Each day focuses on a different concept.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-techhub-purple mr-3" />
                      <span className="text-gray-700">1.5 hours per session</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-techhub-purple mr-3" />
                      <span className="text-gray-700">Limited to 15 active participants</span>
                    </div>
                    <div className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-techhub-purple mr-3" />
                      <span className="text-gray-700">2-3 practice problems per session</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 space-y-6">
                  <h4 className="text-xl font-medium border-b border-gray-200 pb-3">Weekly Schedule</h4>
                  
                  <div className="space-y-6">
                    {dsaSessions.map((session, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h5 className="font-medium text-lg">{session.day}: {session.title}</h5>
                            <p className="text-techhub-purple font-medium">{session.time}</p>
                          </div>
                          <Button variant="outline" className="mt-3 md:mt-0">Join Session</Button>
                        </div>
                        <p className="mt-2 text-gray-600">{session.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="webdev" className="mt-8">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="bg-techhub-soft-blue p-4 rounded-lg mb-6">
                    <Code2 className="h-12 w-12 text-techhub-blue mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Weekend Web Dev</h3>
                    <p className="text-gray-600">
                      Intensive weekend workshops focused on modern web development technologies and practices.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-techhub-blue mr-3" />
                      <span className="text-gray-700">Saturday & Sunday Sessions</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-techhub-blue mr-3" />
                      <span className="text-gray-700">3-4 hours per day</span>
                    </div>
                    <div className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-techhub-blue mr-3" />
                      <span className="text-gray-700">Hands-on project work</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h4 className="text-xl font-medium border-b border-gray-200 pb-3 mb-6">Upcoming Workshops</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {webDevSessions.map((session, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <h5 className="font-semibold text-lg mb-2">{session.title}</h5>
                          <p className="text-techhub-blue font-medium mb-3">{session.date}</p>
                          <div className="mb-4">
                            <h6 className="text-sm text-gray-500 mb-2">Topics Covered:</h6>
                            <ul className="list-disc list-inside space-y-1">
                              {session.topics.map((topic, i) => (
                                <li key={i} className="text-gray-600">{topic}</li>
                              ))}
                            </ul>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">{session.description}</p>
                          <Button className="w-full bg-techhub-blue hover:bg-techhub-light-blue">Register</Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button className="bg-techhub-blue hover:bg-techhub-light-blue">
                <CalendarIcon className="mr-2 h-4 w-4" />
                View Full Session Calendar
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SessionsContent;
