import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, Globe, Users, Clock, Award, MessageCircle } from 'lucide-react';

const Courses = () => {
  // Languages data
  const languages = [
    {
      name: "German",
      description: "Learn the language of philosophers and innovators with our comprehensive German course.",
      benefits: ["Business opportunities in Europe", "Academic pathways in Germany", "Rich cultural heritage"],
      level: "Beginner to Advanced",
      color: "from-fortune-pink to-fortune-orange"
    },
    {
      name: "French",
      description: "Master the language of diplomacy and culture with our interactive French language program.",
      benefits: ["Global diplomatic language", "Art and cultural exploration", "Career opportunities in France and Canada"],
      level: "Beginner to Advanced",
      color: "from-fortune-orange to-fortune-green"
    },
    {
      name: "English",
      description: "Perfect your English skills with our specialized courses designed for global communication.",
      benefits: ["International business standard", "Academic success worldwide", "Enhanced career prospects"],
      level: "Basic to Proficient",
      color: "from-fortune-green to-fortune-red"
    },
    {
      name: "Russian",
      description: "Discover the rich linguistic heritage of Russia with our comprehensive language course.",
      benefits: ["Access to Eastern European markets", "Cultural and historical insights", "Technical and scientific fields"],
      level: "Beginner to Intermediate",
      color: "from-fortune-red to-fortune-light"
    },
    {
      name: "Spanish",
      description: "Learn one of the world's most widely spoken languages with our engaging Spanish program.",
      benefits: ["Latin American business opportunities", "Global tourism industry", "Rich cultural connection"],
      level: "Beginner to Advanced",
      color: "from-fortune-pink to-fortune-green"
    },
    {
      name: "Italian",
      description: "Immerse yourself in the language of art, music, and cuisine with our Italian course.",
      benefits: ["Art and design industries", "Culinary arts career pathway", "Tourism and hospitality sectors"],
      level: "Beginner to Intermediate",
      color: "from-fortune-orange to-fortune-red"
    },
    {
      name: "Korean",
      description: "Explore the language of K-pop and Korean culture with our specialized language program.",
      benefits: ["Entertainment industry opportunities", "Technology sector in Korea", "Cultural exchange programs"],
      level: "Beginner to Intermediate",
      color: "from-fortune-green to-fortune-pink"
    },
    {
      name: "Hindi",
      description: "Master India's widely spoken language with our structured and comprehensive Hindi course.",
      benefits: ["Business opportunities in India", "Cultural integration", "Media and entertainment industry"],
      level: "Beginner to Advanced",
      color: "from-fortune-red to-fortune-orange"
    },
    {
      name: "Japanese",
      description: "Learn the language of innovation and tradition with our Japanese language program.",
      benefits: ["Technology sector opportunities", "Cultural exchange programs", "Academic pathways in Japan"],
      level: "Beginner to Intermediate",
      color: "from-fortune-pink to-fortune-light"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-pink text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Language Courses</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Unlock global opportunities with our comprehensive language programs
          </p>
        </div>
      </section>

      {/* Course Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Course Benefits</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our language courses are designed to provide you with practical skills and cultural insights
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="mb-4 text-fortune-pink">
                <Users size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Experts</h3>
              <p className="text-gray-600">
                Learn from qualified instructors with extensive experience and cultural knowledge.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="mb-4 text-fortune-orange">
                <Clock size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Schedules</h3>
              <p className="text-gray-600">
                Choose from morning, evening, and weekend batches to fit your lifestyle.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="mb-4 text-fortune-green">
                <Globe size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-World Practice</h3>
              <p className="text-gray-600">
                Engage in conversation practice and cultural immersion activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Language Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Our Language Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {languages.map((language, index) => (
              <LanguageCard 
                key={index}
                name={language.name}
                description={language.description}
                benefits={language.benefits}
                level={language.level}
                colorClass={language.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Learning Approach</h2>
              <p className="text-gray-700 mb-6">
                At Fortune Technology, we believe in a practical approach to language learning that 
                emphasizes real-world communication skills and cultural understanding.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="text-fortune-green mr-3 shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Interactive Sessions</h3>
                    <p className="text-gray-600">Engage in conversation practice with native speakers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-fortune-green mr-3 shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Comprehensive Learning Materials</h3>
                    <p className="text-gray-600">Access to textbooks, audio resources, and online practice tools</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-fortune-green mr-3 shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Cultural Immersion</h3>
                    <p className="text-gray-600">Learn about customs, traditions, and cultural contexts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-fortune-green mr-3 shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Personalized Feedback</h3>
                    <p className="text-gray-600">Regular assessments and one-on-one guidance</p>
                  </div>
                </div>
              </div>
              <a 
                href="https://wa.me/917057617979" 
                target="_blank"
                className="btn-primary inline-flex items-center"
              >
                <MessageCircle size={18} className="mr-2" />
                <span>Enquire About Courses</span>
              </a>
            </div>
            <div className="bg-gradient-to-br from-fortune-pink to-fortune-light p-1 rounded-lg">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Course Features</h3>
                <div className="space-y-5">
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-fortune-pink/10 flex items-center justify-center shrink-0">
                      <BookOpen className="text-fortune-pink" size={24} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">Levels Offered</h4>
                      <p className="text-gray-600">Beginner, Intermediate, Advanced, and Proficiency</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-fortune-orange/10 flex items-center justify-center shrink-0">
                      <Clock className="text-fortune-orange" size={24} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">Course Duration</h4>
                      <p className="text-gray-600">2-6 months depending on level and language</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-fortune-green/10 flex items-center justify-center shrink-0">
                      <Users className="text-fortune-green" size={24} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">Batch Size</h4>
                      <p className="text-gray-600">Small groups of 5-10 students for personalized attention</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-fortune-red/10 flex items-center justify-center shrink-0">
                      <Award className="text-fortune-red" size={24} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">Certification</h4>
                      <p className="text-gray-600">Internationally recognized language proficiency certificates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-fortune-pink to-fortune-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Language Journey?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact us today to learn more about our courses, schedules, and enrollment process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/917057617979" 
              target="_blank"
              className="btn-secondary bg-white text-fortune-pink"
            >
              <MessageCircle size={18} className="mr-2" />
              <span>Contact on WhatsApp</span>
            </a>
            <Link to="/contact" className="btn-primary bg-fortune-green">
              Visit Our Institute
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Component for language cards
const LanguageCard = ({ 
  name, 
  description, 
  benefits, 
  level, 
  colorClass 
}: { 
  name: string, 
  description: string, 
  benefits: string[], 
  level: string, 
  colorClass: string 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <div className={`bg-gradient-to-r ${colorClass} p-6 text-white`}>
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <p className="text-sm opacity-90">Level: {level}</p>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-5">
          <h4 className="font-semibold text-gray-800 mb-2">Key Benefits:</h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="text-fortune-green mr-2 shrink-0 mt-1" size={16} />
                <span className="text-gray-600 text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <a 
          href="https://wa.me/917057617979" 
          target="_blank" 
          className="btn-primary w-full flex items-center justify-center"
        >
          <MessageCircle size={18} className="mr-2" />
          <span>Enquire Now</span>
        </a>
      </div>
    </div>
  );
};

export default Courses;
