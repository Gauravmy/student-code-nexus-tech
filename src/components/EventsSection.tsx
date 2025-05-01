
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const EventsSection = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Advanced DSA Workshop",
      date: "June 15, 2025",
      time: "2:00 PM - 4:00 PM IST",
      location: "Online (Zoom)",
      description: "Deep dive into advanced data structures and algorithms focusing on graph algorithms and dynamic programming.",
      category: "DSA"
    },
    {
      id: 2,
      title: "React & Next.js Bootcamp",
      date: "June 22, 2025",
      time: "3:00 PM - 5:30 PM IST",
      location: "Online (Discord)",
      description: "Building modern web applications with React and Next.js. Hands-on session covering key concepts and best practices.",
      category: "Web Dev"
    },
    {
      id: 3,
      title: "LeetCode Contest Preparation",
      date: "July 1, 2025",
      time: "6:00 PM - 8:00 PM IST",
      location: "Online (Google Meet)",
      description: "Group practice session focusing on typical LeetCode contest problems. Strategies and approaches will be discussed.",
      category: "DSA"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-techhub-soft-purple/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our upcoming sessions and events to enhance your skills and connect with fellow tech enthusiasts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className={`h-2 ${event.category === "DSA" ? "bg-techhub-purple" : "bg-techhub-blue"}`}></div>
              <CardContent className="p-6">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                  event.category === "DSA" ? "bg-techhub-soft-purple text-techhub-purple" : "bg-techhub-soft-blue text-techhub-blue"
                }`}>
                  {event.category}
                </div>
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                  Register
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" className="border-techhub-purple text-techhub-purple hover:bg-techhub-soft-purple">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
