import React from 'react';
import { Link } from 'react-router-dom';
import { buildWhatsAppLink } from '../config/site';
import { trackEvent } from '../utils/analytics';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function ServiceCard({ service }) {
  const { title, shortDesc, idealFor, link, isInternalPage, whatsappMessage, image } = service;

  const handleWhatsAppClick = () => {
    trackEvent('click_whatsapp', {
      source: 'service_card',
      service: title,
    });
  };

  return (
    <article className="group bg-warmwhite rounded-3xl overflow-hidden border border-forest/10 hover:border-salvia/60 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      {/* Image container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-forest/5">
        <img
          src={image}
          alt={`Servicio de ${title} en Veterinaria Huella`}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-forest mb-2.5 group-hover:text-forest-light transition-colors">
            {title}
          </h3>
          <p className="text-forest/75 text-sm sm:text-base leading-relaxed mb-4">
            {shortDesc}
          </p>

          {idealFor && (
            <div className="bg-crema/70 rounded-2xl p-3 border border-forest/5 mb-6">
              <span className="block text-[11px] font-semibold tracking-wider text-forest/60 uppercase mb-0.5">
                Ideal para
              </span>
              <p className="text-xs text-forest/80 leading-normal">
                {idealFor}
              </p>
            </div>
          )}
        </div>

        {/* Action Link */}
        <div className="pt-2 border-t border-forest/10">
          {isInternalPage && link ? (
            <Link
              to={link}
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-terracota transition-colors group/link py-1"
            >
              <span>Conocer el servicio</span>
              <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <a
              href={buildWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 text-sm font-semibold text-salvia-dark hover:text-salvia-700 transition-colors py-1"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Consultar por WhatsApp ↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
