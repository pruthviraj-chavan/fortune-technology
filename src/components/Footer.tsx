
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Fortune Technology</h3>
            <p className="text-gray-600 mb-4">
              Your trusted partner for language courses and abroad job placements.
              We help students achieve their dreams of international education and careers.
            </p>
            <blockquote className="italic text-fortune-blue border-l-4 border-fortune-pink pl-3 py-1 mb-4">
              "Master Your communication, master your future."
            </blockquote>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-fortune-pink transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-fortune-pink transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-600 hover:text-fortune-pink transition-colors">Courses</Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-600 hover:text-fortune-pink transition-colors">Jobs</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-fortune-pink transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="text-fortune-pink shrink-0 mt-1" size={18} />
                <span className="text-gray-600">8th Ln, opposite Matoshri apartment, near GP Parsik Bank, Poorvarang, Mahalaxminagar, Rajarampuri, Kolhapur, Maharashtra 416008</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-fortune-pink" size={18} />
                <span className="text-gray-600">+91 9503714292</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-fortune-pink" size={18} />
                <span className="text-gray-600">fortunetechnologykp@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="text-fortune-pink shrink-0 mt-1" size={18} />
                <span className="text-gray-600">Mon - Sat: 9:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-gray-600">
            Copyright ©2025 | Created by <span className="font-medium">dieVektor.tech - Pruthviraj Chavan</span>, Powered by <span className="font-medium">Fortune Technology</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
