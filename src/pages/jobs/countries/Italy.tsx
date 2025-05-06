import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Building } from 'lucide-react';
import SEOHead from '../../../components/SEOHead';
import { countryData } from '../countryData';
 
const Italy = () => {
  const country = countryData.find(c => c.slug === 'italy');
  
  if (!country) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Country data not found</h1>
        <p className="mb-8">We're experiencing technical difficulties. Please try again later.</p>
        <Link to="/jobs" className="btn-primary">
          Back to Jobs
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEOHead 
        title={`Work in Italy from Kolhapur | Fortune Technology`}
        description={`Discover high-paying job opportunities in Italy for Kolhapur residents. Fortune Technology helps with job placement, visa assistance, and language preparation.`}
        keywords={`jobs in Italy, work in Italy, Italy jobs for Indians, jobs abroad from Kolhapur, Italy work visa, ${country.industries.join(', ')}, job opportunities in Italy, Kolhapur employment agency`}
        canonicalUrl={`/jobs/work-in-italy`}
      />

      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${country.gradientClass} text-white py-16`}>
        <div className="container mx-auto px-4">
          <Link to="/jobs" className="inline-flex items-center text-white mb-8 hover:text-gray-200 transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            <span>Back to All Countries</span>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">Work in Italy from Kolhapur</h1>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-3xl">
            <p className="text-lg">
              {country.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              {/* Why Choose This Country */}
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-6">Why Choose Italy for Jobs?</h2>
                <div className="space-y-4">
                  {country.benefits.map((benefit, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Job Sectors */}
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-6">Popular Job Sectors in Italy</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {country.industries.map((industry, index) => (
                    <div key={index} className="flex bg-white p-5 rounded-lg shadow-md">
                      <div className="w-12 h-12 rounded-full bg-fortune-pink/10 flex items-center justify-center shrink-0 mr-4">
                        <Building className="text-fortune-pink" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{industry}</h3>
                        <p className="text-gray-600 text-sm">{country.industryDescriptions[index]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eligibility & Requirements */}
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-6">Eligibility & Requirements to Work in Italy</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Visa Requirements</h3>
                  <ul className="space-y-3">
                    {country.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="h-6 w-6 rounded-full bg-fortune-green text-white flex items-center justify-center mr-3 shrink-0">✓</span>
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Job Search Platforms */}
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-6">Job Search Platforms & Agencies in Italy</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="space-y-4">
                    {country.jobPlatforms.map((platform, index) => (
                      <div key={index} className="pb-4 border-b border-gray-100 last:border-0">
                        <h3 className="text-lg font-semibold text-gray-800">{platform.name}</h3>
                        <p className="text-gray-600 mb-2">{platform.description}</p>
                        <a href={platform.url} target="_blank" rel="noopener noreferrer" className="text-fortune-blue hover:text-fortune-pink transition-colors">
                          {platform.url.replace('https://www.', '').replace('https://', '')}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Salary Expectations */}
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-6">Salary Expectations for Indians in Italy</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Average Monthly Salary</h3>
                      <p className="text-gray-600">{country.salary.average}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Cost of Living</h3>
                      <p className="text-gray-600">{country.salary.costOfLiving}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Tax Information</h3>
                      <p className="text-gray-600">{country.salary.taxInfo}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Life as an Indian */}
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-6">Life as an Indian in Italy</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="space-y-6">
                    {country.lifeAsIndian.map((item, index) => (
                      <div key={index}>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-b from-fortune-pink to-fortune-light p-1 rounded-lg sticky top-24">
                <div className="bg-white p-6 rounded-lg h-full">
                  <h2 className="text-2xl font-bold gradient-text mb-6">How Can Fortune Technology Help You?</h2>
                  
                  <div className="space-y-4 mb-6">
                    {country.services.map((service, index) => (
                      <div key={index} className="flex items-start">
                        <span className="h-6 w-6 rounded-full bg-fortune-green text-white flex items-center justify-center mr-3 shrink-0">✓</span>
                        <span className="text-gray-600">{service}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href="https://wa.me/919503714292" 
                    target="_blank"
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    <MessageCircle size={18} className="mr-2" />
                    <span>Contact Us for Italy Jobs</span>
                  </a>
                  
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Success Rate</h3>
                    <p className="text-gray-600 text-sm">
                      Fortune Technology has successfully placed over 200 candidates from Kolhapur in Italy in the last 3 years.
                    </p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Career in Italy?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact Fortune Technology today to discuss your qualifications and explore available opportunities in Italy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/919503714292" 
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

export default Italy;
