import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, Globe, Users, Clock, Award, MessageCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

// Language Data
const languages = [
  {
    name: "German",
    description: "Master the language of innovation and culture with our comprehensive German program.",
    benefits: ["Business opportunities in Europe", "Academic pathways in Germany", "Rich cultural heritage"],
    level: "Beginner to Advanced",
    color: "from-fortune-pink to-fortune-orange",
    icon: "🇩🇪"
  },
  {
    name: "French",
    description: "Learn the language of diplomacy and art with our immersive French language course.",
    benefits: ["Global diplomatic language", "Cultural exploration", "Career opportunities in France and Canada"],
    level: "Beginner to Advanced",
    color: "from-fortune-orange to-fortune-green",
    icon: "🇫🇷"
  },
  {
    name: "English",
    description: "Perfect your English skills for global communication and career growth.",
    benefits: ["International business standard", "Academic success worldwide", "Enhanced career prospects"],
    level: "Basic to Proficient",
    color: "from-fortune-green to-fortune-blue",
    icon: "🇬🇧"
  },
  {
    name: "Russian",
    description: "Unlock access to Eastern European markets and cultural insights with Russian.",
    benefits: ["Access to Eastern Europe", "Technical/scientific fields", "Historical richness"],
    level: "Beginner to Intermediate",
    color: "from-fortune-blue to-fortune-purple",
    icon: "🇷🇺"
  },
  {
    name: "Spanish",
    description: "Learn one of the most spoken languages with engaging lessons and real-world practice.",
    benefits: ["Latin American business", "Tourism industry", "Cultural connection"],
    level: "Beginner to Advanced",
    color: "from-fortune-pink to-fortune-green",
    icon: "🇪🇸"
  },
  {
    name: "Italian",
    description: "Dive into the language of art, music, and cuisine with our Italian course.",
    benefits: ["Art/design industries", "Culinary careers", "Hospitality sectors"],
    level: "Beginner to Intermediate",
    color: "from-fortune-orange to-fortune-red",
    icon: "🇮🇹"
  },
  {
    name: "Korean",
    description: "Explore the language of K-pop and Korean tech with our specialized program.",
    benefits: ["Entertainment industry", "Korean tech sector", "Cultural exchange"],
    level: "Beginner to Intermediate",
    color: "from-fortune-green to-fortune-pink",
    icon: "🇰🇷"
  },
  {
    name: "Hindi",
    description: "Learn India's widely spoken language for business and cultural integration.",
    benefits: ["Indian business opportunities", "Media & entertainment", "Cultural immersion"],
    level: "Beginner to Advanced",
    color: "from-fortune-red to-fortune-orange",
    icon: "🇮🇳"
  },
  {
    name: "Japanese",
    description: "Master the language of tradition and innovation with our Japanese course.",
    benefits: ["Japanese technology jobs", "Cultural exchange", "Academic pathways"],
    level: "Beginner to Intermediate",
    color: "from-fortune-pink to-fortune-light",
    icon: "🇯🇵"
  },
];

// Language Card Component
const LanguageCard = ({ name, description, benefits, level, colorClass, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
        {/* Header */}
        <div className={`bg-gradient-to-r ${colorClass} p-6 text-white`}>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold">{name}</h3>
              <p className="text-sm opacity-90 mt-1">Level: {level}</p>
            </div>
            <span className="text-2xl">{icon}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-grow">
          <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>
          
          {/* Benefits */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <CheckCircle className="w-4 h-4 text-fortune-green mr-2" />
              Key Benefits:
            </h4>
            <ul className="space-y-2">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="text-fortune-green mr-2 mt-1 shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Enroll Button */}
          <a 
            href="https://wa.me/917057617979" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-4 bg-gradient-to-r from-fortune-pink to-fortune-orange text-white rounded-lg 
              hover:from-fortune-orange hover:to-fortune-pink transition-all duration-300 
              flex items-center justify-center font-medium shadow-sm hover:shadow-md 
              transform group-hover:scale-[1.02] group-hover:translate-y-[-2px]"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            <span>Enquire Now</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Main Courses Component
const Courses = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fortune-pink to-fortune-orange text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Language Courses</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Unlock global opportunities with our expert-led language programs
          </p>
        </div>
      </section>

      {/* Course Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Why Choose Our Courses?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-fortune-pink">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Instructors</h3>
              <p className="text-gray-600">
                Learn from native speakers and language experts with real-world experience.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-fortune-green">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Timings</h3>
              <p className="text-gray-600">
                Morning, evening, and weekend batches available to suit your schedule.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-fortune-blue">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Exposure</h3>
              <p className="text-gray-600">
                Real-world practice with cultural insights and international certifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Language Courses Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-4">Explore Our Language Programs</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Choose from 9+ languages with structured courses for every proficiency level
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {languages.map((language, index) => (
              <LanguageCard key={index} {...language} />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Learning Methodology</h2>
              <p className="text-gray-700 mb-6">
                We combine practical skills with cultural understanding to ensure effective communication.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="text-fortune-green mr-3 shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Interactive Sessions</h3>
                    <p className="text-gray-600">Live conversations with native speakers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-fortune-green mr-3 shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Comprehensive Materials</h3>
                    <p className="text-gray-600">Access to textbooks, audio, and digital tools</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-fortune-green mr-3 shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Cultural Immersion</h3>
                    <p className="text-gray-600">Understand customs, traditions, and context</p>
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
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-fortune-pink to-fortune-orange text-white rounded-lg hover:from-fortune-orange hover:to-fortune-pink transition-all"
              >
                <MessageCircle size={18} className="mr-2" />
                <span>Ask About Courses</span>
              </a>
            </div>
            <div className="bg-gradient-to-br from-fortune-pink to-fortune-light p-1 rounded-lg">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Course Highlights</h3>
                <div className="space-y-5">
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-fortune-pink/10 flex items-center justify-center shrink-0">
                      <BookOpen className="text-fortune-pink" size={24} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">Levels Offered</h4>
                      <p className="text-gray-600">Beginner, Intermediate, Advanced, Proficiency</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-fortune-orange/10 flex items-center justify-center shrink-0">
                      <Clock className="text-fortune-orange" size={24} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">Course Duration</h4>
                      <p className="text-gray-600">2–6 months based on language and level</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-fortune-green/10 flex items-center justify-center shrink-0">
                      <Users className="text-fortune-green" size={24} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">Batch Size</h4>
                      <p className="text-gray-600">Small groups (5–10 students) for attention</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-fortune-blue/10 flex items-center justify-center shrink-0">
                      <Award className="text-fortune-blue" size={24} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">Certification</h4>
                      <p className="text-gray-600">Globally recognized language proficiency certificates</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Language Journey Today</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact us to learn more about courses, schedules, and enrollment options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/917057617979" 
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-white text-fortune-pink rounded-lg hover:bg-gray-100 transition-all"
            >
              <MessageCircle size={18} className="mr-2" />
              <span>Connect on WhatsApp</span>
            </a>
            <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-fortune-green text-white rounded-lg hover:bg-emerald-600 transition-all">
              Visit Our Institute
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
