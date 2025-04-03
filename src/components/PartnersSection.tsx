
import React from 'react';

const partners = [
  { 
    id: 1, 
    name: "Oxford University", 
    logo: "https://images.unsplash.com/photo-1580977276076-ae4b8c219b2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  { 
    id: 2, 
    name: "Cambridge University", 
    logo: "https://images.unsplash.com/photo-1594750822579-54afcf75bf1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  { 
    id: 3, 
    name: "Harvard University", 
    logo: "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  { 
    id: 4, 
    name: "Stanford University", 
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  { 
    id: 5, 
    name: "MIT", 
    logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  { 
    id: 6, 
    name: "University of Toronto", 
    logo: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center animate-fade-in">Our Trusted Partners 🤝</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 animate-fade-in text-lg">
          We collaborate with prestigious institutions around the world to provide you with the best opportunities
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="flex flex-col items-center justify-center p-4 rounded-lg hover:shadow-md transition-all duration-300 animate-fade-in"
            >
              <div className="h-20 w-20 md:h-24 md:w-24 mb-4 bg-gray-100 rounded-full overflow-hidden flex items-center justify-center p-2">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <p className="text-center text-sm md:text-base font-medium text-gray-700">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
