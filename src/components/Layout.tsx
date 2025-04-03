
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

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
        
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBz6RXoH9ds4EuBadQBMMJRTL5ECtlqlQM&v=weekly`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      };
      
      loadGoogleMapsScript();
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
