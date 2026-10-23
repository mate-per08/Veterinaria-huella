import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, buildWhatsAppLink } from '../config/site';
import { trackEvent } from '../utils/analytics';
import { Phone, MessageCircle, MapPin, Mail, Heart, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest text-warmwhite pt-16 pb-12 border-t border-forest-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Brand & Descriptor (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-baseline gap-1 group" aria-label="Veterinaria Huella">
              <span className="font-serif font-bold text-3xl tracking-tight text-warmwhite group-hover:text-salvia-light transition-colors">
                huella
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-terracota"></span>
            </Link>
            <p className="text-warmwhite/75 text-sm leading-relaxed max-w-sm">
              {siteConfig.brand.descriptor}
            </p>
            <p className="text-xs text-salvia-light font-medium flex items-center gap-1 pt-1">
              <Heart className="w-3.5 h-3.5 fill-current text-terracota" />
              <span>Cuidado responsable y trato humano en cada consulta.</span>
            </p>
          </div>

          {/* Quick Links (Cols 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base font-semibold text-warmwhite">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm text-warmwhite/70">
              <li>
                <Link to="/" className="hover:text-salvia-light transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-salvia-light transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/servicios/consultas" className="hover:text-salvia-light transition-colors">
                  Consultas clínicas
                </Link>
              </li>
              <li>
                <Link to="/servicios/vacunacion" className="hover:text-salvia-light transition-colors">
                  Vacunación
                </Link>
              </li>
              <li>
                <Link to="/equipo" className="hover:text-salvia-light transition-colors">
                  Nuestro equipo
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-salvia-light transition-colors">
                  Contacto y turnos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact (Cols 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-semibold text-warmwhite">
              Contacto directo
            </h4>
            <ul className="space-y-3 text-sm text-warmwhite/80">
              <li>
                <a
                  href={buildWhatsAppLink("Hola, quisiera hacer una consulta.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('click_whatsapp', { source: 'footer' })}
                  className="inline-flex items-center gap-2 hover:text-salvia-light transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp: {siteConfig.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.phoneHref}
                  onClick={() => trackEvent('click_call', { source: 'footer' })}
                  className="inline-flex items-center gap-2 hover:text-salvia-light transition-colors"
                >
                  <Phone className="w-4 h-4 text-salvia-light" />
                  <span>Tel: {siteConfig.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('click_directions', { source: 'footer' })}
                  className="inline-flex items-start gap-2 hover:text-salvia-light transition-colors"
                >
                  <MapPin className="w-4 h-4 text-terracota shrink-0 mt-0.5" />
                  <span>{siteConfig.contact.addressShort}</span>
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-warmwhite/60">
                  <Mail className="w-4 h-4" />
                  <span>{siteConfig.contact.email}</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Horarios (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-semibold text-warmwhite">
              Horarios
            </h4>
            <div className="space-y-2 text-xs text-warmwhite/75 bg-forest-deep/60 p-4 rounded-2xl border border-warmwhite/5">
              <div className="flex justify-between">
                <span>Lunes a Viernes:</span>
                <span className="font-semibold text-warmwhite">09:00 - 19:30 hs</span>
              </div>
              <div className="flex justify-between">
                <span>Sábados:</span>
                <span className="font-semibold text-warmwhite">09:00 - 13:30 hs</span>
              </div>
              <div className="flex justify-between text-warmwhite/50 pt-1 border-t border-warmwhite/10">
                <span>Domingos:</span>
                <span>Cerrado</span>
              </div>
            </div>
          </div>

        </div>

        {/* Demo Disclaimer & Credit */}
        <div className="pt-8 border-t border-warmwhite/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-warmwhite/60">
          <p className="max-w-2xl text-center md:text-left leading-relaxed">
            {siteConfig.demo.footerDisclaimer}
          </p>

          <div className="flex items-center gap-2 text-warmwhite/80">
            <span>Demo creada por</span>
            <a
              href={siteConfig.demo.creditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-salvia-light font-medium underline underline-offset-4 hover:text-warmwhite inline-flex items-center gap-1 transition-colors"
            >
              <span>Permaweb Studio</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
