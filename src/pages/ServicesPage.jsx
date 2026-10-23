import React, { useEffect } from 'react';
import { siteConfig, buildWhatsAppLink } from '../config/site';
import { trackEvent } from '../utils/analytics';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { Shield, Sparkles, MessageCircle, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Servicios Veterinarios · Veterinaria Huella Mar del Plata";
  }, []);

  return (
    <div className="py-12 sm:py-16 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-salvia/20 text-forest border border-salvia/30">
          <Sparkles className="w-3.5 h-3.5 text-terracota" />
          <span>ATENCIÓN INTEGRAL PARA PERROS Y GATOS</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-forest tracking-tight">
          Cuidado clínico pensado para cada etapa de su vida.
        </h1>
        <p className="text-base sm:text-lg text-forest/75 leading-relaxed text-balance">
          Combinamos medicina preventiva, diagnóstico riguroso y un trato afectuoso para que cada visita sea una experiencia segura y sin estrés.
        </p>
      </div>

      {/* Services Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((svc) => (
            <ServiceCard key={svc.id} service={svc} />
          ))}
        </div>
      </section>

      {/* Featured Service Spotlight: Consultas & Vacunación */}
      <section className="bg-warmwhite rounded-4xl p-8 sm:p-12 border border-forest/10 shadow-soft">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-salvia-dark">
              Atención destacada
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-forest mt-1 mb-4">
              ¿Buscás información en profundidad?
            </h2>
            <p className="text-forest/75 text-sm sm:text-base leading-relaxed mb-6">
              Desarrollamos guías específicas para nuestras dos áreas más consultadas: conocé en detalle qué incluye una consulta general y cómo cuidarlo con un plan de vacunación adecuado.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/servicios/consultas"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-forest hover:bg-forest-light text-warmwhite text-sm font-semibold transition-colors"
              >
                <span>Detalle de Consultas Clínicas</span>
                <ArrowRight className="w-4 h-4 text-salvia-light" />
              </Link>
              <Link
                to="/servicios/vacunacion"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-salvia/20 hover:bg-salvia/30 text-forest text-sm font-semibold border border-salvia/40 transition-colors"
              >
                <span>Guía de Vacunación</span>
                <ArrowRight className="w-4 h-4 text-salvia-dark" />
              </Link>
            </div>
          </div>

          <div className="bg-crema/60 rounded-3xl p-6 border border-forest/5 space-y-4">
            <h3 className="font-serif text-lg font-semibold text-forest">
              Nuestro compromiso clínico
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-forest/80">
              <li className="flex items-start gap-2">
                <Heart className="w-4 h-4 text-terracota shrink-0 mt-0.5" />
                <span>Tiempo dedicado: no apuramos las consultas ni atendemos en serie.</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-salvia-dark shrink-0 mt-0.5" />
                <span>Explicaciones abiertas: comprendés el diagnóstico antes de tomar decisiones.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-salvia-dark shrink-0 mt-0.5" />
                <span>Manejo de bajo estrés: cuidamos los estímulos sonoros y visuales en sala.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quick WhatsApp Banner */}
      <div className="bg-salvia/15 border border-salvia/40 rounded-3xl p-8 sm:p-10 text-center space-y-4">
        <h3 className="font-serif text-2xl font-semibold text-forest">
          ¿No encontrás lo que necesitás o tenés una duda puntual?
        </h3>
        <p className="text-forest/75 text-sm sm:text-base max-w-xl mx-auto">
          Escribinos por WhatsApp y te orientamos sobre la mejor atención para tu compañero.
        </p>
        <a
          href={buildWhatsAppLink("Hola, tengo una consulta sobre sus servicios veterinarios.")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('click_whatsapp', { source: 'services_page_banner' })}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm shadow-soft transition-all duration-200"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Consultar por WhatsApp ↗</span>
        </a>
      </div>

    </div>
  );
}
