import React from 'react';
import { siteConfig, buildWhatsAppLink } from '../config/site';
import { MessageCircle } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    trackEvent('click_whatsapp', {
      source: 'floating_button',
      destination: siteConfig.contact.whatsappNumber,
    });
  };

  const whatsappUrl = buildWhatsAppLink("Hola! Quisiera hacer una consulta para mi mascota.");

  return (
    <div className="fixed bottom-5 right-5 z-40 group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Escribinos por WhatsApp"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-3 rounded-full shadow-soft-lg hover:shadow-soft-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="hidden sm:inline font-semibold text-sm tracking-wide">
          Turnos por WhatsApp
        </span>
      </a>
    </div>
  );
}
