
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone } from 'lucide-react';

interface StaffMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  contact?: {
    phone?: string;
    email?: string;
  }
  social?: {
    linkedin?: string;
  }
}

const staffMembers: StaffMember[] = [
  {
    id: 1,
    name: "Kamlesh Chavan",
    position: "Foreign Language Trainer & Founder",
    bio: "With extensive experience in language education and international placements, Kamlesh has helped hundreds of students achieve their dreams of studying and working abroad.",
    image: "/lovable-uploads/0f109b97-5d87-464d-9368-c95230d421cd.png",
    contact: {
      phone: "+919420961806",
      email: "fortunetechnologykp@gmail.com"
    }
  },
  {
    id: 2,
    name: "Samruddhi Bhosale",
    position: "Co-Founder & Operation Head",
    bio: "Samruddhi brings expertise in coordinating operations and managing student interactions at Fortune Technology.",
    image: "/k2.png",
    contact: {
      phone: "+919503714292",
      email: "fortuneadmin@gmail.com"
    }
  },
  {
    id: 3,
    name: "Ishwari Mahadik",
    position: "English Language Trainer",
    bio: "Specializing in English language education, Ishwari helps students develop their communication skills with tailored teaching methods.",
    image: "/k3.png",
    contact: {
      phone: "+917276488228",
      email: "fortunetrainer@gmail.com"
    }
  },
  {
    id: 4,
    name: "Neharika Nale",
    position: "Career Counselor",
    bio: "Neharika provides expert guidance to students about international education and career pathways suited to their skills and ambitions.",
    image: "/k4.png",
    contact: {
      phone: "+919665835959",
      email: "fortuneadmin@gmail.com"
    }
  }
];

const StaffSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-fortune-blue/5 relative overflow-hidden">
      <div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-gradient-to-l from-fortune-pink/10 to-fortune-orange/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-fortune-blue/10 to-fortune-green/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-fortune-blue">
            Meet Our Team <span className="text-3xl md:text-4xl">👥</span>
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-6 text-lg">
            The dedicated professionals who work tirelessly to help you achieve your global dreams
          </p>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-xl italic text-center text-fortune-blue">
              "Master Your communication, master your future."
            </blockquote>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {staffMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-2/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-fortune-pink to-fortune-blue opacity-70 z-10 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-80 sm:h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="w-full sm:w-3/5 p-6 md:p-8 flex flex-col">
                  <h3 className="text-2xl font-bold text-fortune-pink mb-1">{member.name}</h3>
                  <p className="text-fortune-blue text-lg font-medium mb-4">— {member.position}</p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  {member.contact && (
                    <div className="space-y-2 mb-4">
                      {member.contact.phone && (
                        <a 
                          href={`tel:${member.contact.phone}`} 
                          className="flex items-center text-gray-600 hover:text-fortune-pink"
                        >
                          <Phone size={16} className="mr-2" />
                          <span>{member.contact.phone}</span>
                        </a>
                      )}
                      {member.contact.email && (
                        <a 
                          href={`mailto:${member.contact.email}`} 
                          className="flex items-center text-gray-600 hover:text-fortune-pink"
                        >
                          <Mail size={16} className="mr-2" />
                          <span className="text-sm">{member.contact.email}</span>
                        </a>
                      )}
                    </div>
                  )}
                  {member.social && (
                    <div className="mt-auto flex space-x-3">
                      {member.social.linkedin && (
                        <a 
                          href={member.social.linkedin}
                          target="_blank" 
                          rel="noreferrer" 
                          className="p-2 bg-fortune-blue/10 rounded-full text-fortune-blue hover:bg-fortune-blue hover:text-white transition-all duration-300"
                        >
                          <Linkedin size={20} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
