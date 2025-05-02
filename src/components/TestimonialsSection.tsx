
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  university: string;
  country: string;
  image: string;
  rating: number;
  quote?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Vanshikaraje Bhosale",
    university: "University of Sussex",
    country: "UK",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    rating: 5,
    quote: "Fortune Technology helped me secure admission to my dream university in the UK. Their IELTS coaching was exceptional!"
  },
  {
    id: 2,
    name: "Pradyumn Naik",
    university: "De Montfort University, Leicester",
    country: "UK",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    rating: 5,
    quote: "Thanks to the guidance from Fortune, I improved my IELTS score from 6.0 to 8.0 in just two months!"
  },
  {
    id: 3,
    name: "Nilesh Haval",
    university: "Michigan State University",
    country: "USA",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    rating: 5,
    quote: "The personalized attention and study materials provided by Fortune Technology were key to my success in IELTS."
  },


];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-fortune-pink/10 to-fortune-orange/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-fortune-pink/30 to-fortune-purple/20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-l from-fortune-orange/30 to-fortune-pink/20 blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-fortune-pink">
            Success Stories <span className="text-3xl md:text-4xl">✨</span>
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8 text-lg">
            Hear from our students who have successfully built international careers
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border-0 hover:translate-y-[-5px] bg-white"
              >
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 -mt-2 -mr-2">
                    <div className="bg-gradient-to-r from-fortune-pink to-fortune-orange text-white py-1 px-3 rounded-full text-sm font-medium shadow-md transform rotate-3 transition-all duration-300">
                      {testimonial.country} 🌟
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-fortune-pink to-fortune-orange rounded-full blur-sm opacity-70 animate-pulse-slow"></div>
                      <div className="relative p-1 rounded-full bg-gradient-to-r from-fortune-pink to-fortune-orange">
                        <Avatar className="w-24 h-24 border-4 border-white">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-fortune-pink mb-1">{testimonial.name}</h3>
                    <p className="text-gray-700 italic mb-3">{testimonial.university}, {testimonial.country}</p>
                    
                    <div className="flex justify-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -top-2 -left-2 text-4xl text-fortune-pink/20">"</div>
                      <p className="text-gray-600 relative z-10 px-4">
                        {testimonial.quote || "Fortune Technology helped me achieve my dream of studying abroad. Their language courses were exceptional!"}
                      </p>
                      <div className="absolute -bottom-4 -right-2 text-4xl text-fortune-pink/20">"</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
