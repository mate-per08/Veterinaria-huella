import React, { useEffect } from 'react';
import { siteConfig, buildWhatsAppLink } from '../config/site';
import { trackEvent } from '../utils/analytics';
import SectionTitle from '../components/SectionTitle';
import AppointmentForm from '../components/AppointmentForm';
import HoursCard from '../components/HoursCard';
import LocationMap from '../components/LocationMap';
import {
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  Sparkles,
} from 'lucide-react';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contacto y Turnos · Veterinaria Huella Mar del Plata";
  }, []);

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Intro Header */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-salvia/20 text-forest border border-salvia/30">
          <Sparkles className="w-3.5 h-3.5 text-terracota" />
          <span>CANALES DE ATENCIÓN DIRECTA</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-forest tracking-tight">
          Estamos cerca tuyo en Mar del Plata.
        </h1>
        <p className="text-base sm:text-lg text-forest/75 leading-relaxed text-balance">
          Comunicate por WhatsApp para coordinar turnos, hacernos preguntas previas o acercarte a nuestro consultorio en el barrio.
        </p>
      </div>

      {/* Main Grid: Form on Left, Location & Hours on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Form (Cols 1-7) */}
        <div className="lg:col-span-7">
          <AppointmentForm />
        </div>

        {/* Info widgets (Cols 8-12) */}
        <div className="lg:col-span-5 space-y-6">
          <HoursCard />
          <LocationMap />
        </div>

      </div>

      {/* Quick Channels Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
        
        {/* WhatsApp */}
        <a
          href={buildWhatsAppLink("Hola, quisiera hacer una consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('click_whatsapp', { source: 'contact_page_card' })}
          className="bg-warmwhite rounded-2xl p-5 border border-forest/10 hover:border-salvia/50 shadow-soft transition-all duration-200 flex items-center gap-3.5 group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
            <MessageCircle className="w-5 h-5 fill-current" />
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-forest/50 block">
              WhatsApp
            </span>
            <span className="text-sm font-semibold text-forest group-hover:text-forest-light">
              {siteConfig.contact.phoneDisplay}
            </span>
          </div>
        </a>

        {/* Teléfono */}
        <a
          href={siteConfig.contact.phoneHref}
          onClick={() => trackEvent('click_call', { source: 'contact_page_card' })}
          className="bg-warmwhite rounded-2xl p-5 border border-forest/10 hover:border-salvia/50 shadow-soft transition-all duration-200 flex items-center gap-3.5 group"
        >
          <div className="w-10 h-10 rounded-xl bg-salvia/20 text-salvia-dark flex items-center justify-center shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-forest/50 block">
              Llamadas
            </span>
            <span className="text-sm font-semibold text-forest group-hover:text-forest-light">
              {siteConfig.contact.phoneDisplay}
            </span>
          </div>
        </a>

        {/* Dirección */}
        <a
          href={siteConfig.contact.mapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('click_directions', { source: 'contact_page_card' })}
          className="bg-warmwhite rounded-2xl p-5 border border-forest/10 hover:border-salvia/50 shadow-soft transition-all duration-200 flex items-center gap-3.5 group"
        >
          <div className="w-10 h-10 rounded-xl bg-terracota/15 text-terracota flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-forest/50 block">
              Dirección
            </span>
            <span className="text-sm font-semibold text-forest group-hover:text-forest-light truncate block max-w-[170px]">
              {siteConfig.contact.addressShort}
            </span>
          </div>
        </a>

        {/* Email */}
        <div className="bg-warmwhite rounded-2xl p-5 border border-forest/10 shadow-soft flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-forest/10 text-forest flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-forest/50 block">
              Correo
            </span>
            <span className="text-sm font-semibold text-forest truncate block max-w-[170px]">
              {siteConfig.contact.email}
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}
