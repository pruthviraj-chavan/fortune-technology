import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Building, CheckCircle, ArrowRight, Users, Trophy, Target, MessageCircle, DollarSign, Stethoscope, Pill, Home } from 'lucide-react';

const Jobs = () => {
  // Job sectors data
  const jobSectors = [
    {
      title: "Engineering",
      icon: <Building size={32} />,
      description: "Opportunities for mechanical, electrical, software, and civil engineers across multiple countries.",
      positions: ["Software Developer", "Electrical Engineer", "Mechanical Engineer", "Civil Engineer", "Automation Engineer"],
      colorClass: "from-fortune-pink to-fortune-orange"
    },
    {
      title: "Finance",
      icon: <DollarSign size={32} />,
      description: "Roles in banking, financial analysis, accounting, and financial technology globally.",
      positions: ["Financial Analyst", "Accountant", "Investment Banking Associate", "Financial Consultant", "Auditor"],
      colorClass: "from-fortune-orange to-fortune-green"
    },
    {
      title: "Medical",
      icon: <Stethoscope size={32} />,
      description: "Healthcare positions for doctors, nurses, and medical technicians in developed countries.",
      positions: ["Physician", "Registered Nurse", "Medical Technician", "Healthcare Administrator", "Specialist Doctor"],
      colorClass: "from-fortune-green to-fortune-red"
    },
    {
      title: "Pharma",
      icon: <Pill size={32} />,
      description: "Roles in pharmaceutical research, development, manufacturing, and quality assurance.",
      positions: ["Pharmaceutical Researcher", "QA Specialist", "Clinical Trial Manager", "Regulatory Affairs", "Biotech Specialist"],
      colorClass: "from-fortune-red to-fortune-light"
    },
    {
      title: "Architecture",
      icon: <Home size={32} />,
      description: "Design and construction management positions for architects and related professionals.",
      positions: ["Architect", "Interior Designer", "Urban Planner", "Landscape Architect", "Construction Manager"],
      colorClass: "from-fortune-pink to-fortune-green"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-pink text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">International Job Opportunities</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Your gateway to career prospects across the globe
          </p>
        </div>
      </section>

      {/* Job Sectors Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-4">Job Sectors</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We specialize in placing qualified professionals in various industries across multiple countries
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobSectors.map((sector, index) => (
              <JobSectorCard 
                key={index}
                title={sector.title}
                icon={sector.icon}
                description={sector.description}
                positions={sector.positions}
                colorClass={sector.colorClass}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Job Placement Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Our Job Placement Process</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide end-to-end support for your international job application journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProcessCard 
              number="1"
              title="Profile Assessment"
              description="We evaluate your qualifications, experience, and career goals to identify suitable opportunities."
              colorClass="from-fortune-pink to-fortune-orange"
            />
            <ProcessCard 
              number="2"
              title="Job Matching"
              description="Our team matches your profile with relevant openings in your preferred countries."
              colorClass="from-fortune-orange to-fortune-green"
            />
            <ProcessCard 
              number="3"
              title="Application Support"
              description="We assist with resume preparation, interview coaching, and documentation."
              colorClass="from-fortune-green to-fortune-red"
            />
            <ProcessCard 
              number="4"
              title="Placement & Follow-up"
              description="Continued support through the offer negotiation and relocation process."
              colorClass="from-fortune-red to-fortune-pink"
            />
          </div>
        </div>
      </section>

      {/* Job Placement Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Job Placement Assistance</h2>
              <p className="text-gray-700 mb-6">
                At Fortune Technology, we provide comprehensive support to help you secure 
                international job opportunities that match your skills and career aspirations.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="text-fortune-green mr-3 shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Resume & Portfolio Building</h3>
                    <p className="text-gray-600">Professional assistance to create job-winning resumes tailored for international markets</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-fortune-green mr-3 shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Interview Preparation</h3>
                    <p className="text-gray-600">Mock interviews and coaching sessions to improve your performance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-fortune-green mr-3 shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Documentation Support</h3>
                    <p className="text-gray-600">Guidance with visa applications, work permits, and other required paperwork</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-fortune-green mr-3 shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Post-Placement Support</h3>
                    <p className="text-gray-600">Continued assistance after securing employment for a smooth transition</p>
                  </div>
                </div>
              </div>
              <a 
                href="https://wa.me/917057617979" 
                target="_blank"
                className="btn-primary inline-flex items-center"
              >
                <MessageCircle size={18} className="mr-2" />
                <span>Enquire About Job Opportunities</span>
              </a>
            </div>
            <div className="bg-gradient-to-br from-fortune-pink to-fortune-light p-1 rounded-lg">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Why Choose Our Placement Services</h3>
                <div className="space-y-5">
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-fortune-pink/10 flex items-center justify-center shrink-0">
                      <Building className="text-fortune-pink" size={24} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">Industry Connections</h4>
                      <p className="text-gray-600">Established relationships with employers across multiple countries</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-fortune-orange/10 flex items-center justify-center shrink-0">
                      <Users className="text-fortune-orange" size={24} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">Personalized Approach</h4>
                      <p className="text-gray-600">Tailored job matching based on your skills and career goals</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-fortune-green/10 flex items-center justify-center shrink-0">
                      <Trophy className="text-fortune-green" size={24} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">Successful Track Record</h4>
                      <p className="text-gray-600">Helped hundreds of professionals secure international positions</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-fortune-red/10 flex items-center justify-center shrink-0">
                      <Target className="text-fortune-red" size={24} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">End-to-End Support</h4>
                      <p className="text-gray-600">Comprehensive assistance from application to relocation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-fortune-orange to-fortune-pink text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your International Career?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact us today to discuss your qualifications and explore available opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/917057617979" 
              target="_blank"
              className="btn-secondary bg-white text-fortune-pink flex items-center justify-center"
            >
              <MessageCircle size={18} className="mr-2" />
              <span>Contact on WhatsApp</span>
            </a>
            <Link to="/contact" className="btn-primary bg-fortune-green">
              Visit Our Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Component for job sector cards
const JobSectorCard = ({ 
  title, 
  icon, 
  description, 
  positions,
  colorClass 
}: { 
  title: string, 
  icon: React.ReactNode, 
  description: string, 
  positions: string[],
  colorClass: string 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <div className={`bg-gradient-to-r ${colorClass} p-6 text-white flex items-center`}>
        <div className="mr-3">{icon}</div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-5">
          <h4 className="font-semibold text-gray-800 mb-2">Popular Positions:</h4>
          <ul className="space-y-2">
            {positions.map((position, index) => (
              <li key={index} className="flex items-start">
                <Briefcase className="text-fortune-pink mr-2 shrink-0 mt-1" size={16} />
                <span className="text-gray-600 text-sm">{position}</span>
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

// Component for process cards
const ProcessCard = ({ 
  number,
  title, 
  description, 
  colorClass 
}: { 
  number: string,
  title: string, 
  description: string, 
  colorClass: string 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md card-hover relative">
      <div className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br ${colorClass} text-white flex items-center justify-center font-bold`}>
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-3 mt-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Jobs;
