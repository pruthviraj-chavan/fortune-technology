import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-pink text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Reach out to us for inquiries about courses, job placements, or institute visits
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Get In Touch</h2>
              <p className="text-gray-700 mb-8">
                We're here to answer any questions you have about our language courses, 
                job placement services, or study abroad programs. Connect with us today!
              </p>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md flex">
                  <div className="shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-fortune-pink/10 flex items-center justify-center">
                      <MapPin className="text-fortune-pink" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Our Location</h3>
                    <p className="text-gray-600">
                      Rajarampuri 8th Lane, <br />
                      Kolhapur, Maharashtra, <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex">
                  <div className="shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-fortune-orange/10 flex items-center justify-center">
                      <Phone className="text-fortune-orange" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Phone Number</h3>
                    <p className="text-gray-600">+91 7057617979</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Available for calls and WhatsApp messages
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex">
                  <div className="shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-fortune-green/10 flex items-center justify-center">
                      <Mail className="text-fortune-green" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Email Address</h3>
                    <p className="text-gray-600">info@fortunetech.com</p>
                    <p className="text-sm text-gray-500 mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex">
                  <div className="shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-fortune-red/10 flex items-center justify-center">
                      <Clock className="text-fortune-red" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 8:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 bg-gradient-pink text-white">
                <h3 className="text-2xl font-bold mb-2">Connect With Us</h3>
                <p>
                  Reach out via WhatsApp for quick responses to your inquiries.
                </p>
              </div>
              <div className="p-6">
                <div className="mb-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto">
                    <MessageCircle className="text-[#25D366]" size={32} />
                  </div>
                  <h4 className="font-semibold text-gray-800 mt-4 mb-1">WhatsApp Enquiry</h4>
                  <p className="text-gray-600 mb-4">
                    For quick responses to your questions about courses and job opportunities
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-gray-700 mb-2">Contact our team directly:</p>
                    <a 
                      href="https://wa.me/917057617979" 
                      target="_blank"
                      className="btn-primary bg-[#25D366] w-full flex items-center justify-center"
                    >
                      <MessageCircle size={18} className="mr-2" />
                      <span>Message on WhatsApp</span>
                    </a>
                  </div>

                  <div className="text-center mt-6">
                    <p className="text-gray-500 text-sm">
                      Or call us directly at <span className="font-medium">+91 7057617979</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-8">Visit Our Institute</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="bg-gray-200 h-96 rounded flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin size={48} className="text-fortune-pink mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Fortune Technology</h3>
                <p className="text-gray-600 mb-4">Rajarampuri 8th Lane, Kolhapur, Maharashtra</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  className="btn-primary inline-flex items-center"
                >
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-fortune-pink to-fortune-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Take the first step towards global opportunities with Fortune Technology's expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/917057617979" 
              target="_blank"
              className="btn-secondary bg-white text-fortune-pink flex items-center justify-center"
            >
              <MessageCircle size={18} className="mr-2" />
              <span>Connect on WhatsApp</span>
            </a>
            <Link to="/courses" className="btn-primary bg-fortune-green">
              Explore Our Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
