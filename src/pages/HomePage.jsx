import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, buildWhatsAppLink } from '../config/site';
import { trackEvent } from '../utils/analytics';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import TeamCard from '../components/TeamCard';
import ReviewCard from '../components/ReviewCard';
import FAQAccordion from '../components/FAQAccordion';
import HoursCard from '../components/HoursCard';
import LocationMap from '../components/LocationMap';
import AppointmentForm from '../components/AppointmentForm';
import {
  MessageCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Heart,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Smile,
  ExternalLink,
} from 'lucide-react';

export default function HomePage() {
  const handleHeroWhatsApp = () => {
    trackEvent('click_whatsapp', {
      source: 'hero_primary_cta',
      message: siteConfig.contact.defaultWhatsappMessage,
    });
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      
      {/* ========================================================
          SECCIÓN 1 · HERO
         ======================================================== */}
      <section className="relative pt-6 sm:pt-12 lg:pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content (Cols 1-7) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-salvia/20 text-forest border border-salvia/30 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-terracota animate-pulse"></span>
                <span>{siteConfig.brand.heroBadge}</span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-semibold text-forest tracking-tight text-balance leading-[1.12]">
                {siteConfig.brand.tagline}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-xl text-forest/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-balance">
                {siteConfig.brand.subtitle}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={buildWhatsAppLink(siteConfig.contact.defaultWhatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleHeroWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-base shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Pedir un turno por WhatsApp ↗</span>
                </a>

                <Link
                  to="/servicios"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-warmwhite hover:bg-crema/60 text-forest font-semibold text-base border border-forest/15 transition-all duration-200"
                >
                  <span>Ver servicios</span>
                  <ArrowRight className="w-4 h-4 text-forest/70" />
                </Link>
              </div>

              {/* Supporting quote */}
              <p className="text-xs sm:text-sm text-forest/65 italic pt-1">
                "{siteConfig.brand.heroSupporting}"
              </p>
            </div>

            {/* Right Editorial Image (Cols 8-12) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Background decorative shape */}
                <div className="absolute -top-6 -right-6 w-full h-full bg-salvia/30 rounded-4xl -z-10 transform rotate-2"></div>
                
                {/* Main Hero Photo */}
                <div className="aspect-[4/5] sm:aspect-[3/4] rounded-4xl overflow-hidden shadow-soft-xl border-4 border-warmwhite bg-forest/5">
                  <img
                    src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80"
                    alt="Veterinaria interactuando con un perro en un chequeo cálido"
                    loading="eager"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-warmwhite/95 backdrop-blur-md p-4 sm:p-5 rounded-3xl border border-forest/10 shadow-soft-lg flex items-center gap-3.5 max-w-xs">
                  <div className="w-10 h-10 rounded-2xl bg-salvia/20 text-salvia-dark flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs text-forest">
                      Atención lunes a sábado
                    </h4>
                    <p className="text-[11px] text-forest/70">
                      Coordinación ágil por WhatsApp
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Trust Strip */}
          <div className="mt-16 pt-8 border-t border-forest/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {siteConfig.heroTrustItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-warmwhite/70 rounded-2xl p-5 border border-forest/5 flex items-start gap-3.5"
                >
                  <div className="w-8 h-8 rounded-xl bg-salvia/15 text-forest flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-salvia-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-forest">
                      {item.label}
                    </h4>
                    <p className="text-xs text-forest/70 mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECCIÓN 2 · SERVICIOS
         ======================================================== */}
      <section id="servicios" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Cuidado Integral"
          title="Todo lo que necesita para estar bien."
          subtitle="Desde su primera vacuna hasta los cuidados de la edad adulta: atención orientada al bienestar y explicaciones sin tecnicismos."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((svc) => (
            <ServiceCard key={svc.id} service={svc} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-terracota transition-colors underline underline-offset-8"
          >
            <span>Ver el catálogo detallado de servicios y prestaciones</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ========================================================
          SECCIÓN 3 · DIFERENCIAL
         ======================================================== */}
      <section className="bg-salvia-50/60 py-16 sm:py-20 rounded-4xl border border-salvia/30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text & 3 Pillars (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-salvia/20 text-forest border border-salvia/30">
              <Heart className="w-3.5 h-3.5 text-terracota fill-terracota" />
              <span>NUESTRA FORMA DE TRABAJAR</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest tracking-tight leading-tight">
              {siteConfig.differentials.title}
            </h2>

            <p className="text-base sm:text-lg text-forest/80 leading-relaxed">
              {siteConfig.differentials.subtitle}
            </p>

            <div className="space-y-5 pt-4">
              {siteConfig.differentials.points.map((pt, idx) => (
                <div
                  key={idx}
                  className="bg-warmwhite rounded-2xl p-5 border border-forest/10 flex items-start gap-4 shadow-xs"
                >
                  <div className="w-7 h-7 rounded-full bg-salvia/20 text-forest flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-serif font-bold text-xs">{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-forest">
                      {pt.title}
                    </h3>
                    <p className="text-sm text-forest/75 mt-1 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side Editorial Photo (Cols 8-12) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-soft-xl border-4 border-warmwhite aspect-[4/5] bg-forest/5">
              <img
                src={siteConfig.differentials.image}
                alt="Atención veterinaria dedicada y tranquila con un gato"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent flex items-end p-6">
                <p className="text-warmwhite text-xs sm:text-sm font-medium leading-relaxed">
                  "Menos apuro, más escucha. Porque cada síntoma cuenta una historia."
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECCIÓN 4 · ASÍ ES TU PRIMERA VISITA
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Paso a paso"
          title="Así es tu primera visita en Huella."
          subtitle="Queremos que tanto vos como tu compañero sepan qué esperar. Sin incertidumbre, con tranquilidad de principio a fin."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.firstVisitSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-warmwhite rounded-3xl p-6 sm:p-7 border border-forest/10 shadow-soft relative group hover:border-salvia/60 transition-all duration-300"
            >
              <span className="font-serif text-3xl sm:text-4xl font-bold text-salvia-light group-hover:text-salvia transition-colors block mb-4">
                {step.step}
              </span>
              <h3 className="font-serif text-xl font-semibold text-forest mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-forest/75 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          SECCIÓN 5 · EQUIPO
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Profesionales comprometidos"
          title="Detrás de cada consulta, hay personas que se preocupan."
          subtitle="Nos mueve la vocación por la salud de los animales y el respeto por las familias que los cuidan."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.team.map((member, idx) => (
            <TeamCard key={idx} member={member} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/equipo"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-terracota transition-colors underline underline-offset-8"
          >
            <span>Conocer más sobre nuestro equipo y filosofía de trabajo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ========================================================
          SECCIÓN 6 · PRUEBA SOCIAL
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-salvia/20 text-forest border border-salvia/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-salvia-dark" />
            <span>EXPERIENCIAS REALES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest tracking-tight">
            La confianza también se construye con experiencias reales.
          </h2>
          <div className="mt-3 inline-block bg-forest/5 text-forest/70 text-xs px-3 py-1 rounded-full font-medium">
            Reseñas de ejemplo con fines ilustrativos
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {siteConfig.reviews.map((rev, idx) => (
            <ReviewCard key={idx} review={rev} />
          ))}
        </div>

        {/* 2 Mini-blocks as requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <div className="bg-warmwhite rounded-2xl p-5 border border-forest/10 flex items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold text-sm text-forest">
                Reseñas reales
              </h4>
              <p className="text-xs text-forest/70 mt-0.5">
                Experiencias que ayudan a decidir a otras familias del barrio.
              </p>
            </div>
            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(siteConfig.brand.name + ' ' + siteConfig.brand.city)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('click_google_profile')}
              className="shrink-0 text-xs font-semibold text-forest hover:text-terracota inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-crema/60 border border-forest/10"
            >
              <span>Ver perfil en Google</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="bg-warmwhite rounded-2xl p-5 border border-forest/10 flex items-center gap-3">
            <MapPin className="w-5 h-5 text-terracota shrink-0" />
            <div>
              <h4 className="font-semibold text-sm text-forest">
                Presencia local en Mar del Plata
              </h4>
              <p className="text-xs text-forest/70 mt-0.5">
                Ubicación accesible en 9 de Julio 9187 con fácil estacionamiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECCIÓN 7 · PREGUNTAS FRECUENTES
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Dudas habituales"
          title="Antes de venir, resolvé tus dudas."
          subtitle="Respondemos con transparencia las inquietudes más comunes sobre turnos, primeras visitas y medios de pago."
        />

        <FAQAccordion items={siteConfig.faqs} />
      </section>

      {/* ========================================================
          SECCIÓN 8 · SOLICITUD DE TURNO + CONTACTO
         ======================================================== */}
      <section id="turno" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="TURNOS Y ATENCIÓN"
          title="Estamos para ayudarte a cuidar de quien te acompaña."
          subtitle="Coordiná tu visita de forma rápida o acercate a nuestro consultorio en Mar del Plata."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form (Cols 1-7) */}
          <div className="lg:col-span-7">
            <AppointmentForm />
          </div>

          {/* Contact and Info Cards (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-6">
            <HoursCard />
            <LocationMap />
          </div>

        </div>

        {/* Warm Closing Banner */}
        <div className="mt-16 bg-forest text-warmwhite rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold">
              ¿Tenés alguna consulta puntual sobre la salud de tu compañero?
            </h3>
            <p className="text-warmwhite/80 text-sm sm:text-base leading-relaxed">
              Escribinos con total confianza. Te respondemos a la brevedad y te orientamos sobre el mejor momento para una consulta.
            </p>
            <div className="pt-2">
              <a
                href={buildWhatsAppLink("Hola! Quisiera hacerles una consulta sobre mi mascota.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_whatsapp', { source: 'bottom_closing_banner' })}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm shadow-soft transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Escribinos por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}
