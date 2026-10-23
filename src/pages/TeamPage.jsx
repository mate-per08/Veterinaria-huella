import React, { useEffect } from 'react';
import { siteConfig, buildWhatsAppLink } from '../config/site';
import { trackEvent } from '../utils/analytics';
import SectionTitle from '../components/SectionTitle';
import TeamCard from '../components/TeamCard';
import { Heart, Sparkles, Shield, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Nuestro Equipo y Filosofía · Veterinaria Huella Mar del Plata";
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Trato digno y bajo estrés",
      desc: "Sabemos que la visita al veterinario puede generar ansiedad. Trabajamos con paciencia, sin apuros ni sujeciones forzadas, respetando el lenguaje corporal de cada animal.",
    },
    {
      icon: Shield,
      title: "Claridad y decisiones compartidas",
      desc: "Explicamos el porqué de cada estudio y tratamiento en lenguaje cotidiano. No imponemos procedimientos: te acompañamos a decidir lo mejor para tu realidad y la de tu mascota.",
    },
    {
      icon: Sparkles,
      title: "Acompañamiento honesto",
      desc: "Nos preocupamos por el seguimiento después de la consulta. Una llamada o un mensaje para saber cómo evolucionó forma parte de nuestra manera natural de trabajar.",
    },
  ];

  return (
    <div className="py-12 sm:py-16 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Intro Header */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-salvia/20 text-forest border border-salvia/30">
          <Heart className="w-3.5 h-3.5 text-terracota fill-terracota" />
          <span>QUIÉNES SOMOS</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-forest tracking-tight">
          Cuidamos de ellos con la misma dedicación que vos.
        </h1>
        <p className="text-base sm:text-lg text-forest/75 leading-relaxed text-balance">
          Somos un equipo de profesionales comprometidos con una veterinaria moderna, cercana y transparente en la ciudad de Mar del Plata.
        </p>
      </div>

      {/* Team Cards Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.team.map((member, idx) => (
            <TeamCard key={idx} member={member} />
          ))}
        </div>
      </section>

      {/* Philosophy & 3 Pillars */}
      <section className="bg-salvia-50/70 rounded-4xl p-8 sm:p-14 border border-salvia/30">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-salvia-dark">
            Nuestros Valores
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-forest mt-1">
            Los tres pilares de nuestro consultorio
          </h2>
          <p className="text-forest/75 text-sm sm:text-base mt-2">
            Principios que guían cada decisión médica y humana en Veterinaria Huella.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-warmwhite rounded-3xl p-6 sm:p-7 border border-forest/10 shadow-soft space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-salvia/20 text-forest flex items-center justify-center">
                  <Icon className="w-6 h-6 text-salvia-dark" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-forest">
                  {val.title}
                </h3>
                <p className="text-sm text-forest/75 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Space & Environment reassurance */}
      <section className="bg-warmwhite rounded-3xl p-8 sm:p-12 border border-forest/10 shadow-soft">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-salvia-dark">
              El espacio
            </span>
            <h2 className="font-serif text-3xl font-semibold text-forest">
              Un ambiente pensado para estar en calma
            </h2>
            <p className="text-forest/75 text-sm sm:text-base leading-relaxed">
              Diseñamos nuestras instalaciones en 9 de Julio 9187 buscando una atmósfera hogareña, sin olores penetrantes ni ruidos que alteren a los animales.
            </p>
            <p className="text-forest/75 text-sm sm:text-base leading-relaxed">
              Queremos que cruzar la puerta no signifique un momento de miedo, sino un encuentro positivo donde reciban cariño y respeto.
            </p>
            <div className="pt-2">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-terracota transition-colors"
              >
                <span>Ver ubicación, mapa y horarios</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-forest/5 shadow-inner">
            <img
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1000&q=80"
              alt="Ambiente cálido y tranquilo de atención veterinaria"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <div className="text-center bg-forest text-warmwhite rounded-3xl p-8 sm:p-12 space-y-4">
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold">
          Nos encantaría conocer a tu compañero.
        </h3>
        <p className="text-warmwhite/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Escribinos para coordinar una primera consulta y armar su libreta de cuidado preventivo.
        </p>
        <div className="pt-2">
          <a
            href={buildWhatsAppLink("Hola! Quisiera coordinar una consulta con el equipo de Veterinaria Huella.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('click_whatsapp', { source: 'team_page_cta' })}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm shadow-soft transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Pedir turno por WhatsApp ↗</span>
          </a>
        </div>
      </div>

    </div>
  );
}
