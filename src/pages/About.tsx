
import React from 'react';
import { CheckCircle, MapPin, Phone, Mail, Clock, Award, Globe, User, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-pink text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Fortune Technology</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Your trusted partner for language education and international career opportunities
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Fortune Technology was founded with a mission to empower individuals with language skills 
                and connect them to global opportunities. We believe that language proficiency opens doors 
                to international education, career advancement, and cross-cultural understanding.
              </p>
              <p className="text-gray-700 mb-6">
                Since our establishment, we have helped hundreds of students master new languages and 
                secure positions abroad. Our comprehensive approach combines quality language education 
                with practical guidance on international job applications and placement.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="text-fortune-green mr-3 shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">Comprehensive language training in 9+ languages</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-fortune-green mr-3 shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">Job placement assistance for international opportunities</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-fortune-green mr-3 shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">Personalized counseling for study abroad programs</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-fortune-green mr-3 shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">Expert guidance on visa applications and documentation</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-fortune-pink to-fortune-light p-1 rounded-lg">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Our Address</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-fortune-pink shrink-0 mt-1" size={20} />
                    <div className="ml-4">
                      <p className="text-gray-700">
                        Rajarampuri 8th Lane, <br />
                        Kolhapur, Maharashtra, <br />
                        India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-fortune-pink" size={20} />
                    <p className="ml-4 text-gray-700">+91 7057617979</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-fortune-pink" size={20} />
                    <p className="ml-4 text-gray-700">info@fortunetech.com</p>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-fortune-pink shrink-0 mt-1" size={20} />
                    <p className="ml-4 text-gray-700">
                      Monday - Saturday: 9:00 AM - 8:00 PM <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Meet Our Founder</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-6 bg-gradient-pink text-white md:col-span-1">
                <div className="text-center mb-4">
                  <div className="w-32 h-32 rounded-full bg-white/20 mx-auto flex items-center justify-center">
                    <User size={64} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Mr. Kamlesh Chavan</h3>
                <p className="text-white/80 text-center mb-4">Founder & Director</p>
                <div className="space-y-2 mt-6">
                  <div className="flex items-center">
                    <Award size={18} className="mr-2" />
                    <p className="text-sm">Certified Language Expert</p>
                  </div>
                  <div className="flex items-center">
                    <Globe size={18} className="mr-2" />
                    <p className="text-sm">Proficient in Six Languages</p>
                  </div>
                  <div className="flex items-center">
                    <Clock size={18} className="mr-2" />
                    <p className="text-sm">10+ Years Experience</p>
                  </div>
                </div>
              </div>
              <div className="p-8 md:col-span-2">
                <h3 className="text-2xl font-bold mb-4 gradient-text">About Mr. Kamlesh Chavan</h3>
                <p className="text-gray-700 mb-4">
                  Mr. Kamlesh Chavan is a certified language expert with over 10 years of experience 
                  in language education and international student placement. Proficient in six languages, 
                  he has a deep understanding of the challenges and opportunities in global education and employment.
                </p>
                <p className="text-gray-700 mb-4">
                  His passion for languages and dedication to helping students achieve fluency has driven 
                  the success of Fortune Technology. Under his guidance, the institute has developed comprehensive 
                  language courses and established partnerships with international organizations for job placements.
                </p>
                <p className="text-gray-700 mb-6">
                  Mr. Chavan holds certifications in language instruction and cross-cultural communication. 
                  His expertise extends to counseling students on study abroad opportunities and 
                  navigating the complexities of international job applications.
                </p>
                <a 
                  href="https://wa.me/917057617979" 
                  target="_blank"
                  className="btn-primary inline-flex items-center"
                >
                  <MessageCircle size={18} className="mr-2" />
                  <span>Connect with Mr. Chavan</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-fortune-orange to-fortune-pink text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Language Journey?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Explore our language courses and job placement services to open doors to global opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses" className="btn-secondary bg-white text-fortune-pink">
              View Courses
            </Link>
            <Link to="/contact" className="btn-primary bg-fortune-green">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
