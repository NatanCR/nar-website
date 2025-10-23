import React from 'react';

/**
 * WhatsApp Floating Button Component
 * 
 * A fixed-position floating button that opens WhatsApp chat in a new tab.
 * 
 * To change the phone number:
 * 1. Update the WHATSAPP_PHONE_NUMBER constant below
 * 2. Update the WHATSAPP_MESSAGE constant if needed
 * 
 * To change the position:
 * - Modify the CSS classes: fixed bottom-6 right-6 (bottom-right corner)
 * - Available positions: bottom-6 right-6, bottom-6 left-6, top-6 right-6, top-6 left-6
 */
const WhatsAppButton: React.FC = () => {
  // Configuration - Easy to modify
  const WHATSAPP_PHONE_NUMBER = '5511952750824'; // Your phone number (no spaces or symbols)
  const WHATSAPP_MESSAGE = 'Olá!%20Gostaria%20de%20um%20orçamento%20de%20paisagismo.'; // URL-encoded message
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${WHATSAPP_MESSAGE}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="
          fixed bottom-6 right-6 
          w-14 h-14 
          bg-[#25D366] 
          text-white 
          rounded-full 
          shadow-lg 
          hover:shadow-xl 
          hover:scale-110 
          transition-all 
          duration-300 
          ease-in-out
          z-50
          flex 
          items-center 
          justify-center
          group
          focus:outline-none 
          focus:ring-4 
          focus:ring-[#25D366]/30
        "
        aria-label="Abrir WhatsApp para contato"
        title="Fale conosco no WhatsApp"
      >
        {/* WhatsApp Icon from Font Awesome */}
        <i className="fab fa-whatsapp text-2xl group-hover:scale-110 transition-transform duration-300"></i>
      </button>

      {/* Optional: Pulse animation ring */}
      <div className="
        fixed bottom-6 right-6 
        w-14 h-14 
        rounded-full 
        bg-[#25D366] 
        opacity-20 
        animate-ping 
        z-40
      "></div>
    </>
  );
};

export default WhatsAppButton;
