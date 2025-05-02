
import React from 'react';
import { motion } from "framer-motion";

const partners = [
  { 
    id: 1, 
    name: "Oxford University", 
    logo: "/assets/partners/oxford.png"
  },
  { 
    id: 2, 
    name: "Cambridge University", 
    logo: "/assets/partners/cambridge.png"
  },
  { 
    id: 3, 
    name: "Harvard University", 
    logo: "/assets/partners/harvard.png"
  },
  { 
    id: 4, 
    name: "Stanford University", 
    logo: "/assets/partners/stanford.png"
  },
  { 
    id: 5, 
    name: "MIT", 
    logo: "/assets/partners/mit.png"
  },
  { 
    id: 6, 
    name: "University of Toronto", 
    logo: "/assets/partners/toronto.png"
  },
];

const PartnersSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-fortune-blue/5 to-fortune-pink/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-fortune-pink/20 to-fortune-purple/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-l from-fortune-green/20 to-fortune-blue/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-fortune-pink">
            Our Trusted Partners <span className="text-3xl md:text-4xl">🤝</span>
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 text-lg">
            We collaborate with prestigious institutions around the world to provide you with the best opportunities
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {partners.map((partner) => (
            <motion.div 
              key={partner.id}
              variants={itemVariants}
              className="group"
            >
              <div className="flex flex-col items-center justify-center p-4 rounded-xl hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border border-gray-100 h-full">
                <div className="h-24 w-24 md:h-28 md:w-28 mb-4 rounded-full overflow-hidden flex items-center justify-center p-2 bg-gradient-to-br from-fortune-pink/20 to-fortune-blue/20 group-hover:from-fortune-pink/30 group-hover:to-fortune-blue/30 transition-all duration-500">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-w-full max-h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-center text-sm md:text-base font-medium text-gray-700 group-hover:text-fortune-pink transition-colors duration-300">{partner.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
