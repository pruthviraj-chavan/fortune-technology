
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  university: string;
  country: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Vanshikaraje Bhosale",
    university: "University of Sussex",
    country: "UK",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "Pradyumn Naik",
    university: "De Montfort University, Leicester",
    country: "UK",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Nilesh Haval",
    university: "Michigan State University",
    country: "USA",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    rating: 5
  },
  {
    id: 4,
    name: "Dnyanesh Kulkarni",
    university: "TUFTS University",
    country: "USA",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    rating: 5
  },
  {
    id: 5,
    name: "Abhishek Chakote",
    university: "TUFTS University",
    country: "USA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-center animate-fade-in">Get Your Best Score in IELTS with Us ✨</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8 animate-fade-in text-lg">
            Our students have achieved remarkable success in their language proficiency and academic journeys
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 animate-fade-in">
              <CardContent className="p-6 relative">
                <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-fortune-green text-white py-1 px-3 rounded-full text-sm font-medium shadow-md">
                  {testimonial.country} 🌟
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-1 rounded-full bg-gradient-to-r from-fortune-green to-fortune-blue">
                    <Avatar className="w-24 h-24 border-4 border-white">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <h3 className="text-xl font-bold text-fortune-green mb-1">{testimonial.name}</h3>
                  <p className="text-gray-700 italic mb-3">{testimonial.university}, {testimonial.country}</p>
                  
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600">
                    "Fortune Technology helped me achieve my dream of studying abroad. Their language courses were exceptional!"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
