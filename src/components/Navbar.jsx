import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { siteConfig, buildWhatsAppLink } from '../config/site';
import { getArgentinaStatus } from '../utils/hours';
import { trackEvent } from '../utils/analytics';
import { Menu, X, MessageCircle, Clock, Phone } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState(getArgentinaStatus());
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Update status periodically
  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getArgentinaStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleTurnoClick = () => {
    trackEvent('click_nav_turno', { from: location.pathname });
  };

  const navLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Servicios', path: '/servicios' },
    { label: 'Equipo', path: '/equipo' },
    { label: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className="sticky top-0 z-30 bg-crema/90 backdrop-blur-md border-b border-forest/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-baseline gap-1 group py-2" aria-label="Veterinaria Huella - Inicio">
            <span className="font-serif font-bold text-2xl sm:text-3xl tracking-tight text-forest group-hover:text-forest-light transition-colors">
              huella
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-terracota group-hover:scale-125 transition-transform duration-200"></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-forest font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-terracota'
                      : 'text-forest/75 hover:text-forest'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Live Status & Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Live Status indicator */}
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-warmwhite/80 border border-forest/10 shadow-xs"
              title={status.statusNote}
            >
              <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
              <span className="text-forest/80">
                {status.isOpen ? 'Abierto ahora' : 'Cerrado ahora'}
              </span>
            </div>

            {/* Quick Call */}
            <a
              href={siteConfig.contact.phoneHref}
              onClick={() => trackEvent('click_call', { source: 'header' })}
              className="text-xs font-semibold text-forest/80 hover:text-forest flex items-center gap-1.5 py-1.5 px-3 rounded-full hover:bg-forest/5 transition-colors"
              title="Llamar a Veterinaria Huella"
            >
              <Phone className="w-3.5 h-3.5 text-salvia-dark" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>

            {/* CTA Button */}
            <a
              href={buildWhatsAppLink(siteConfig.contact.defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleTurnoClick}
              className="inline-flex items-center gap-2 bg-salvia hover:bg-salvia-dark text-warmwhite px-4 py-2.5 rounded-full text-sm font-semibold shadow-soft hover:shadow-soft-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-warmwhite/20" />
              <span>Pedir turno</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href={buildWhatsAppLink(siteConfig.contact.defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleTurnoClick}
              className="inline-flex items-center gap-1.5 bg-salvia hover:bg-salvia-dark text-warmwhite px-3 py-2 rounded-full text-xs font-semibold shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Turnos</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-forest hover:bg-forest/5 focus:outline-none focus:ring-2 focus:ring-salvia"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-forest/10 bg-crema px-4 pt-4 pb-6 space-y-4 shadow-soft-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-salvia/20 text-forest font-semibold'
                      : 'text-forest/80 hover:bg-warmwhite hover:text-forest'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="pt-3 border-t border-forest/10 space-y-3">
            <div className="flex items-center gap-2 px-4 py-2 text-xs text-forest/70 bg-warmwhite rounded-xl">
              <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
              <span>{status.statusNote}</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={siteConfig.contact.phoneHref}
                onClick={() => trackEvent('click_call', { source: 'mobile_menu' })}
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-warmwhite text-forest text-sm font-semibold border border-forest/10"
              >
                <Phone className="w-4 h-4 text-salvia-dark" />
                <span>Llamar</span>
              </a>
              <a
                href={buildWhatsAppLink(siteConfig.contact.defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleTurnoClick}
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-salvia text-warmwhite text-sm font-semibold shadow-soft"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
