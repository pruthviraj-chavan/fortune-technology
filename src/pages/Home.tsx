
import React from 'react';
import { ArrowRight, Award, BookOpen, Briefcase, Globe, User, CheckCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Animation */}
      <section className="bg-gradient-vibrant text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Open Doors to Global Opportunities 🌎
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Learn languages and access international job opportunities 
                with Fortune Technology's expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/courses" className="btn-secondary bg-white text-fortune-pink animate-pulse-slow">
                  Explore Courses 🎓
                </Link>
                <Link to="/contact" className="btn-primary bg-fortune-orange">
                  Contact Us 📞
                </Link>
              </div>
            </div>
            <div className="md:w-2/5 animate-slide-in">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-fortune-pink text-xl font-bold mb-4">Start Your Journey Today ✨</h2>
                <p className="text-gray-600 mb-4">
                  Get personalized guidance on courses and job opportunities.
                </p>
                <a 
                  href="https://wa.me/917057617979" 
                  target="_blank"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Animation */}
      <section className="py-16">
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
                icon={<Briefcase className="text-fortune-red" size={36} />}
                title="Job Assistance 💼"
                description="Receive guidance for job applications and placement abroad."
              />
            </div>
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
                colorClass="from-fortune-green to-fortune-red"
              />
            </div>
            <div className="animate-fade-in stagger-4">
              <QuickLinkCard
                icon={<Globe size={32} />}
                title="Study Abroad 🌎"
                description="Get guidance on universities and study programs worldwide."
                linkText="Learn More"
                linkUrl="/about"
                colorClass="from-fortune-red to-fortune-pink"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-forest text-white">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey? 🚀</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Connect with us today to learn more about our language courses and job placement services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/917057617979" 
              target="_blank"
              className="btn-secondary bg-white text-fortune-green"
            >
              Contact on WhatsApp 📱
            </a>
            <Link to="/courses" className="btn-primary bg-fortune-blue">
              Explore Courses 🎓
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
    <div className="bg-white p-6 rounded-lg shadow-md card-hover">
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
    <div className="rounded-lg overflow-hidden shadow-md card-hover h-64 relative img-overlay">
      <img src={image} alt={country} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end text-white">
        <h3 className="text-xl font-bold mb-2">{emoji} {country}</h3>
        <p className="mb-4 text-sm">{description}</p>
        <a 
          href="https://wa.me/917057617979" 
          target="_blank"
          className="inline-flex items-center text-white font-medium"
        >
          <span>Enquire</span>
          <ArrowRight size={16} className="ml-1" />
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
    <div className="flex bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <div className={`bg-gradient-to-b ${colorClass} p-6 flex items-center justify-center text-white`}>
        <div className="w-12">{icon}</div>
      </div>
      <div className="p-6 flex-1">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to={linkUrl} className="text-fortune-pink font-medium inline-flex items-center">
          <span>{linkText}</span>
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
