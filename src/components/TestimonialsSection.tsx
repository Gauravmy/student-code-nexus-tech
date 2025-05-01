
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: "Tech Hub has transformed my approach to DSA. The collaborative environment and regular practice sessions have helped me significantly improve my problem-solving skills.",
      name: "Rahul Singh",
      role: "Computer Science Student",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 2,
      content: "Joining Tech Hub was one of the best decisions I made as a student. The community is supportive, the sessions are insightful, and I've learned so much about modern web development practices.",
      name: "Priya Patel",
      role: "Frontend Developer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 3,
      content: "The focused approach to DSA problem-solving at Tech Hub helped me ace my technical interviews. I'm now working at my dream company, thanks in part to the skills I developed here.",
      name: "Alex Chen",
      role: "Software Engineer",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Members Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the students who have experienced the Tech Hub difference.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-gradient-to-br from-techhub-soft-purple to-techhub-soft-blue rounded-xl shadow-lg p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -top-2 -right-2 bg-techhub-purple rounded-full p-2 shadow">
                            <Quote className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <p className="text-lg md:text-xl italic mb-6">{testimonial.content}</p>
                        <div>
                          <h4 className="font-bold text-xl">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-3">
            <button 
              onClick={prevTestimonial}
              className="bg-white rounded-full p-2 shadow-md hover:bg-techhub-soft-purple transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-techhub-purple" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-techhub-purple' : 'bg-techhub-purple/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="bg-white rounded-full p-2 shadow-md hover:bg-techhub-soft-purple transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-techhub-purple" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
