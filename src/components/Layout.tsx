
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { motion, AnimatePresence } from 'framer-motion';

// Add Google Maps type definitions
declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const Layout = () => {
  useEffect(() => {
    // Preload Google Maps API in the Layout component
    // This ensures it's loaded once for the entire application
    if (typeof window !== 'undefined' && !window.google) {
      const loadGoogleMapsScript = () => {
        if (document.querySelector('script[src*="maps.googleapis.com/maps/api"]')) return;
        
        window.initMap = () => {
          // This empty function will be called when Google Maps script loads
          console.log("Google Maps API loaded successfully");
        };
        
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBz6RXoH9ds4EuBadQBMMJRTL5ECtlqlQM&v=weekly&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      };
      
      loadGoogleMapsScript();
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <motion.main 
        className="flex-grow w-full overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </motion.main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
