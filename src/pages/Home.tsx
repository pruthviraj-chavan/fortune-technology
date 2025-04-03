
import React from 'react';
import { ArrowRight, Award, BookOpen, Briefcase, Globe, User, CheckCircle, MessageCircle, GraduationCap, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// Country images for destinations
const countryImages = {
  USA: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  Canada: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  Germany: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2VybWFueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  Australia: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVzdHJhbGlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  Ireland: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXJlbGFuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  France: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJhbmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  Norway: "https://images.unsplash.com/photo-1516400126493-0ca934a0006d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9yd2F5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
};

const courseInfo = [
  { name: "German", icon: "🇩🇪", color: "from-fortune-orange to-fortune-red" },
  { name: "French", icon: "🇫🇷", color: "from-fortune-green to-fortune-blue" },
  { name: "English", icon: "🇬🇧", color: "from-fortune-pink to-fortune-orange" },
  { name: "Russian", icon: "🇷🇺", color: "from-fortune-blue to-fortune-indigo" },
  { name: "Spanish", icon: "🇪🇸", color: "from-fortune-yellow to-fortune-red" },
  { name: "Italian", icon: "🇮🇹", color: "from-fortune-green to-fortune-blue" }
];

const testimonials = [
  {
    name: "Aisha Patel",
    role: "Software Engineer in Germany",
    content: "Fortune Technology helped me learn German and secure a job in Berlin. Best decision of my career!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    name: "Rajesh Kumar",
    role: "Medical Professional in Canada",
    content: "The English proficiency course was excellent. Within 6 months I was fluent enough to pass my medical licensing exams in Toronto.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    name: "Priya Sharma",
    role: "Finance Analyst in Australia",
    content: "Mr. Chavan's teaching methodology is unique and effective. I'm now working in Sydney thanks to Fortune Technology.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Background Image */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt="Global opportunities" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-fortune-pink/90 to-fortune-orange/80"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Your Gateway to Global Opportunities 🌎
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl animate-fade-in">
              Unlock new horizons with Fortune Technology's language courses and 
              international job placement services tailored for your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Link to="/courses" className="btn-primary bg-white text-fortune-pink hover:bg-opacity-90 animate-pulse-slow flex items-center justify-center gap-2">
                <GraduationCap size={20} />
                <span>Explore Courses</span>
              </Link>
              <a 
                href="https://wa.me/917057617979" 
                target="_blank"
                rel="noreferrer"
                className="btn-primary bg-fortune-green hover:bg-fortune-green/90 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
          <div className="md:w-2/5 animate-slide-in">
            <div className="bg-white p-7 rounded-2xl shadow-2xl backdrop-blur-sm bg-white/95 transform hover:scale-105 transition-all duration-300">
              <h2 className="text-fortune-pink text-2xl font-bold mb-4">Begin Your Journey Today ✈️</h2>
              <p className="text-gray-700 mb-6">
                Get personalized guidance on language courses and international career opportunities from certified experts.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-fortune-green" size={20} />
                  <span className="text-gray-800">Certified Language Teachers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-fortune-green" size={20} />
                  <span className="text-gray-800">Job Placement Assistance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-fortune-green" size={20} />
                  <span className="text-gray-800">Visa Application Support</span>
                </div>
              </div>
              <a 
                href="https://wa.me/917057617979" 
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-fortune-pink to-fortune-orange"
              >
                <MessageCircle size={18} />
                <span>Connect on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            <div className="text-center p-6 rounded-lg hover:shadow-md transition-all duration-300 animate-fade-in stagger-1">
              <h3 className="text-4xl md:text-5xl font-bold text-fortune-pink mb-2">5+</h3>
              <p className="text-gray-600">Language Courses</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-md transition-all duration-300 animate-fade-in stagger-2">
              <h3 className="text-4xl md:text-5xl font-bold text-fortune-orange mb-2">10+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-md transition-all duration-300 animate-fade-in stagger-3">
              <h3 className="text-4xl md:text-5xl font-bold text-fortune-green mb-2">500+</h3>
              <p className="text-gray-600">Success Stories</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-md transition-all duration-300 animate-fade-in stagger-4">
              <h3 className="text-4xl md:text-5xl font-bold text-fortune-blue mb-2">7+</h3>
              <p className="text-gray-600">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Animation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center animate-fade-in">Why Choose Fortune Technology ✨</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 animate-fade-in">
            We offer comprehensive language education and job placement services 
            to help you achieve your international career goals.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Cards with Animation */}
            <div className="animate-fade-in stagger-1">
              <FeatureCard 
                icon={<BookOpen className="text-fortune-pink" size={36} />}
                title="5+ Language Courses 🗣️"
                description="Learn from a variety of language courses tailored to your needs."
              />
            </div>
            <div className="animate-fade-in stagger-2">
              <FeatureCard 
                icon={<User className="text-fortune-orange" size={36} />}
                title="Expert Native Instructors 👨‍🏫"
                description="Learn from certified language experts with real-world experience."
              />
            </div>
            <div className="animate-fade-in stagger-3">
              <FeatureCard 
                icon={<Award className="text-fortune-green" size={36} />}
                title="Lifetime Access 🔄"
                description="Get unlimited access to course materials even after completion."
              />
            </div>
            <div className="animate-fade-in stagger-4">
              <FeatureCard 
                icon={<Briefcase className="text-fortune-blue" size={36} />}
                title="Job Assistance 💼"
                description="Receive guidance for job applications and placement abroad."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center animate-fade-in">Featured Courses 🎓</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 animate-fade-in">
            Explore our popular language courses designed to prepare you for international opportunities
          </p>

          <div className="md:px-16 animate-fade-in">
            <Carousel 
              opts={{
                align: 'center',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {courseInfo.map((course, index) => (
                  <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                    <div className={`bg-gradient-to-br ${course.color} text-white rounded-xl p-6 h-full card-hover`}>
                      <div className="text-4xl mb-4">{course.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                      <p className="text-white/80 mb-4">Master {course.name} with native speakers and certified curriculum</p>
                      <Link to="/courses" className="inline-flex items-center text-white font-medium mt-auto">
                        <span>Explore Course</span>
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-8">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Top Destinations with Photos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center animate-fade-in">Top Destinations 🌍</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 animate-fade-in">
            Explore popular countries for study and work opportunities
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="animate-fade-in stagger-1">
              <DestinationCard
                country="USA"
                description="World-class universities and diverse job market"
                image={countryImages.USA}
                emoji="🇺🇸"
              />
            </div>
            <div className="animate-fade-in stagger-2">
              <DestinationCard
                country="Canada"
                description="High quality of life and immigration-friendly policies"
                image={countryImages.Canada}
                emoji="🇨🇦"
              />
            </div>
            <div className="animate-fade-in stagger-3">
              <DestinationCard
                country="Germany"
                description="Strong economy and tuition-free public universities"
                image={countryImages.Germany}
                emoji="🇩🇪"
              />
            </div>
            <div className="animate-fade-in stagger-4">
              <DestinationCard
                country="Australia"
                description="Excellent education system and work opportunities"
                image={countryImages.Australia}
                emoji="🇦🇺"
              />
            </div>
            <div className="animate-fade-in stagger-1">
              <DestinationCard
                country="Ireland"
                description="English-speaking country with growing tech industry"
                image={countryImages.Ireland}
                emoji="🇮🇪"
              />
            </div>
            <div className="animate-fade-in stagger-2">
              <DestinationCard
                country="France"
                description="Rich culture and innovative research institutions"
                image={countryImages.France}
                emoji="🇫🇷"
              />
            </div>
            <div className="animate-fade-in stagger-3">
              <DestinationCard
                country="Norway"
                description="High standard of living and quality education"
                image={countryImages.Norway}
                emoji="🇳🇴"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center animate-fade-in">Success Stories 🌟</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 animate-fade-in">
            Hear from our students who have successfully built international careers
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-fortune-pink">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-fade-in stagger-1">
              <QuickLinkCard
                icon={<BookOpen size={32} />}
                title="Language Courses 🎓"
                description="Explore our range of language courses taught by expert instructors."
                linkText="View All Courses"
                linkUrl="/courses"
                colorClass="from-fortune-pink to-fortune-orange"
              />
            </div>
            <div className="animate-fade-in stagger-2">
              <QuickLinkCard
                icon={<User size={32} />}
                title="About Our Founder 👨‍💼"
                description="Learn about Mr. Kamlesh Chavan's expertise and vision."
                linkText="Read More"
                linkUrl="/about"
                colorClass="from-fortune-orange to-fortune-green"
              />
            </div>
            <div className="animate-fade-in stagger-3">
              <QuickLinkCard
                icon={<Briefcase size={32} />}
                title="Job Opportunities 💼"
                description="Discover job placements and career opportunities abroad."
                linkText="Explore Jobs"
                linkUrl="/jobs"
                colorClass="from-fortune-green to-fortune-blue"
              />
            </div>
            <div className="animate-fade-in stagger-4">
              <QuickLinkCard
                icon={<Globe size={32} />}
                title="Study Abroad 🌎"
                description="Get guidance on universities and study programs worldwide."
                linkText="Learn More"
                linkUrl="/about"
                colorClass="from-fortune-blue to-fortune-pink"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive CTA Section */}
      <section className="py-16 bg-gradient-to-r from-fortune-purple to-fortune-pink text-white">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey? 🚀</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Connect with us today to learn more about our language courses and job placement services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/917057617979" 
              target="_blank"
              rel="noreferrer"
              className="btn-secondary bg-white text-fortune-purple hover:bg-gray-100 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              <span>Contact on WhatsApp</span>
            </a>
            <Link to="/courses" className="btn-primary bg-fortune-green hover:bg-fortune-green/90 flex items-center justify-center gap-2">
              <GraduationCap size={20} />
              <span>Explore Courses</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Component for feature cards
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Component for destination cards with images
const DestinationCard = ({ 
  country, 
  description, 
  image,
  emoji
}: { 
  country: string, 
  description: string, 
  image: string,
  emoji: string
}) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-64 relative img-overlay group">
      <img src={image} alt={country} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 p-6 flex flex-col justify-end text-white">
        <h3 className="text-xl font-bold mb-2">{emoji} {country}</h3>
        <p className="mb-4 text-sm">{description}</p>
        <a 
          href="https://wa.me/917057617979" 
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-white font-medium group"
        >
          <span>Enquire</span>
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

// Component for quick link cards
const QuickLinkCard = ({ 
  icon, 
  title, 
  description, 
  linkText, 
  linkUrl,
  colorClass 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string, 
  linkText: string, 
  linkUrl: string,
  colorClass: string 
}) => {
  return (
    <div className="flex bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className={`bg-gradient-to-b ${colorClass} p-6 flex items-center justify-center text-white`}>
        <div className="w-12">{icon}</div>
      </div>
      <div className="p-6 flex-1">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to={linkUrl} className="text-fortune-pink font-medium inline-flex items-center group">
          <span>{linkText}</span>
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
