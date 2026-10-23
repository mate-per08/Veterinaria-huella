import React from 'react';
import { siteConfig } from '../config/site';
import { trackEvent } from '../utils/analytics';
import { MapPin, Navigation, Phone } from 'lucide-react';

export default function LocationMap() {
  const handleDirectionsClick = () => {
    trackEvent('click_directions', {
      address: siteConfig.contact.address,
    });
  };

  const handleCallClick = () => {
    trackEvent('click_call', {
      source: 'location_card',
    });
  };

  return (
    <div className="bg-warmwhite rounded-3xl p-6 sm:p-7 border border-forest/10 shadow-soft flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-2.5 mb-4">
          <MapPin className="w-5 h-5 text-terracota" />
          <h3 className="font-serif text-xl font-semibold text-forest">
            Encontranos en Mar del Plata
          </h3>
        </div>

        <p className="text-sm sm:text-base text-forest/80 mb-5 leading-relaxed">
          {siteConfig.contact.address}
        </p>

        {/* Embedded Google Maps */}
        <div className="relative aspect-[16/9] sm:aspect-[4/3] rounded-2xl overflow-hidden border border-forest/10 bg-forest/5 mb-5 shadow-inner">
          <iframe
            title="Ubicación de Veterinaria Huella en Google Maps"
            src={siteConfig.contact.mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[15%] contrast-[1.05]"
          ></iframe>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        <a
          href={siteConfig.contact.mapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDirectionsClick}
          className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-forest hover:bg-forest-light text-warmwhite text-sm font-semibold transition-all duration-200 shadow-soft"
        >
          <Navigation className="w-4 h-4 text-salvia-light" />
          <span>Cómo llegar</span>
        </a>

        <a
          href={siteConfig.contact.phoneHref}
          onClick={handleCallClick}
          className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-salvia/20 hover:bg-salvia/30 text-forest text-sm font-semibold transition-all duration-200 border border-salvia/40"
        >
          <Phone className="w-4 h-4 text-forest" />
          <span>Llamar ahora</span>
        </a>
      </div>
    </div>
  );
}
