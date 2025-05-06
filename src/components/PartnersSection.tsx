
import React from 'react';
import { motion } from "framer-motion";

const partners = [
  { 
    id: 1, 
    name: "Massachusetts Institute of Technology (MIT)", 
    logo: "/lovable-uploads/b29fe251-df8d-4716-84b4-f76dc20e593d.png",
    website: "mit.edu",
    location: "USA"
  },
  { 
    id: 2, 
    name: "University of Oslo", 
    logo: "/lovable-uploads/4cf02bd2-ece2-4779-be4b-da506cc8c599.png",
    website: "uio.no",
    location: "Norway"
  },
  { 
    id: 3, 
    name: "University of Bristol", 
    logo: "/lovable-uploads/0fad941f-d3da-4300-8cf1-3234548b3275.png",
    website: "bristol.ac.uk",
    location: "United Kingdom"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {partners.map((partner) => (
            <motion.div 
              key={partner.id}
              variants={itemVariants}
              className="group h-full"
            >
              <a
                href={`https://${partner.website}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${partner.name}'s website`}
                title={`Visit ${partner.name}`}
                className="block h-full"
              >
                <div className="flex flex-col h-full rounded-xl hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border border-gray-100 overflow-hidden">
                  <div className="h-48 w-full overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col items-center">
                    <h3 className="text-center text-lg font-medium text-gray-800 group-hover:text-fortune-pink transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <p className="text-center text-sm text-gray-500 mt-1">{partner.location}</p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
