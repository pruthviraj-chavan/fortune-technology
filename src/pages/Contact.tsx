
import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initialize Google Maps
    const initMap = () => {
      if (mapRef.current && window.google) {
        const location = { lat: 16.7050, lng: 74.2433 }; // Kolhapur coordinates
        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 15,
          center: location,
          mapId: 'fdc7ba9fdf410ab7',
          disableDefaultUI: true,
          zoomControl: true,
        });
        
        const marker = new window.google.maps.Marker({
          position: location,
          map: map,
          title: 'Fortune Technology',
          animation: window.google.maps.Animation.DROP
        });

        const infowindow = new window.google.maps.InfoWindow({
          content: `<div class="p-2"><strong class="text-lg">Fortune Technology</strong><p>Rajarampuri 8th Lane, Kolhapur</p></div>`,
        });

        marker.addListener('click', () => {
          infowindow.open(map, marker);
        });
      }
    };

    // Load Google Maps API
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBz6RXoH9ds4EuBadQBMMJRTL5ECtlqlQM&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }

    return () => {
      window.initMap = null;
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-vibrant text-white py-16 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us ✉️</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Reach out to us for inquiries about courses, job placements, or institute visits
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="section-title">Get In Touch 👋</h2>
              <p className="text-gray-700 mb-8">
                We're here to answer any questions you have about our language courses, 
                job placement services, or study abroad programs. Connect with us today!
              </p>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md flex animate-slide-in stagger-1">
                  <div className="shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-fortune-pink/10 flex items-center justify-center">
                      <MapPin className="text-fortune-pink" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Our Location 📍</h3>
                    <p className="text-gray-600">
                      Rajarampuri 8th Lane, <br />
                      Kolhapur, Maharashtra, <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex animate-slide-in stagger-2">
                  <div className="shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-fortune-orange/10 flex items-center justify-center">
                      <Phone className="text-fortune-orange" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Phone Number 📱</h3>
                    <p className="text-gray-600">+91 7057617979</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Available for calls and WhatsApp messages
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex animate-slide-in stagger-3">
                  <div className="shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-fortune-green/10 flex items-center justify-center">
                      <Mail className="text-fortune-green" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Email Address ✉️</h3>
                    <p className="text-gray-600">info@fortunetech.com</p>
                    <p className="text-sm text-gray-500 mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex animate-slide-in stagger-4">
                  <div className="shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-fortune-red/10 flex items-center justify-center">
                      <Clock className="text-fortune-red" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Business Hours ⏰</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 8:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in">
              <div className="p-6 bg-gradient-sunset text-white">
                <h3 className="text-2xl font-bold mb-2">Connect With Us 🤝</h3>
                <p>
                  Reach out via WhatsApp for quick responses to your inquiries.
                </p>
              </div>
              <div className="p-6">
                <div className="mb-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto animate-pulse-slow">
                    <MessageCircle className="text-[#25D366]" size={32} />
                  </div>
                  <h4 className="font-semibold text-gray-800 mt-4 mb-1">WhatsApp Enquiry 📲</h4>
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

      {/* Map Section */}
      <section className="py-16 bg-gray-50 animate-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-8">Visit Our Institute 🏢</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div id="map" ref={mapRef} className="h-96 w-full rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-ocean text-white animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Future? 🚀</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Take the first step towards global opportunities with Fortune Technology's expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/917057617979" 
              target="_blank"
              className="btn-secondary bg-white text-fortune-blue flex items-center justify-center"
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
