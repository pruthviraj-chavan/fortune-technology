
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const WhatsAppButton = () => {
  const isMobile = useIsMobile();
  const phoneNumber = '917057617979'; // Format: country code + number without + or spaces
  const message = "Hello, I'm interested in learning more about Fortune Technology's services.";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`whatsapp-float flex items-center ${isMobile ? 'gap-0' : 'gap-2'}`}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={isMobile ? 28 : 32} />
      {!isMobile && (
        <span className="hidden md:inline-block font-medium">Chat Now</span>
      )}
    </button>
  );
};

export default WhatsAppButton;
