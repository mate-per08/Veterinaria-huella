import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, buildWhatsAppLink } from '../config/site';
import { trackEvent } from '../utils/analytics';
import AppointmentForm from '../components/AppointmentForm';
import {
  Stethoscope,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  Clock,
  Heart,
  FileText,
  MessageCircle,
} from 'lucide-react';

export default function ConsultationsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Consultas Clínicas · Veterinaria Huella Mar del Plata";
  }, []);

  const whatsappMessage = "Hola, quisiera pedir un turno para una consulta clínica en Veterinaria Huella.";

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Breadcrumb & Navigation */}
      <div>
        <Link
          to="/servicios"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-forest/70 hover:text-forest transition-colors py-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a todos los servicios</span>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-salvia/20 text-forest border border-salvia/30">
            <Stethoscope className="w-3.5 h-3.5 text-salvia-dark" />
            <span>MEDICINA GENERAL Y DIAGNÓSTICO</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-forest tracking-tight leading-tight">
            Consultas clínicas con tiempo, calma y rigor profesional.
          </h1>

          <p className="text-base sm:text-lg text-forest/75 leading-relaxed">
            Una consulta veterinaria de calidad no es una revisión rápida de 5 minutos. Evaluamos a tu mascota de forma integral, escuchamos atentamente lo que observás en casa y definimos juntos el mejor plan para su salud.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href={buildWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('click_whatsapp', { source: 'consultas_detail_header' })}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm shadow-soft transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Pedir turno para consulta ↗</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl overflow-hidden shadow-soft-xl border-4 border-warmwhite aspect-[4/3] bg-forest/5">
            <img
              src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1000&q=80"
              alt="Veterinaria examinando con paciencia a un perro"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Content Blocks: Qué incluye & Señales de alerta */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Qué incluye */}
        <div className="bg-warmwhite rounded-3xl p-7 sm:p-9 border border-forest/10 shadow-soft space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-salvia/20 text-forest flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-salvia-dark" />
            </div>
            <h2 className="font-serif text-2xl font-semibold text-forest">
              ¿Qué incluye la consulta?
            </h2>
          </div>

          <ul className="space-y-4 text-sm sm:text-base text-forest/80">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-terracota mt-2 shrink-0"></span>
              <span><strong>Examen físico completo de cabeza a cola:</strong> revisión de ojos, oídos, cavidad oral, ganglios, piel, pelaje y palpación abdominal.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-terracota mt-2 shrink-0"></span>
              <span><strong>Auscultación cardíaca y pulmonar:</strong> control de frecuencia y ritmo cardiopulmonar.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-terracota mt-2 shrink-0"></span>
              <span><strong>Evaluación de peso y condición corporal:</strong> asesoramiento de masa muscular y nutrición orientada a su edad.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-terracota mt-2 shrink-0"></span>
              <span><strong>Espacio de diálogo abierto:</strong> resolvemos todas tus preguntas sobre comportamiento, paseos y rutinas diarias.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-terracota mt-2 shrink-0"></span>
              <span><strong>Indicaciones claras por escrito:</strong> nada de recetas indescifrables. Te vas sabiendo exactamente qué hacer.</span>
            </li>
          </ul>
        </div>

        {/* Cuándo conviene pedir una consulta */}
        <div className="bg-warmwhite rounded-3xl p-7 sm:p-9 border border-forest/10 shadow-soft space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-terracota/15 text-terracota flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5 text-terracota" />
            </div>
            <h2 className="font-serif text-2xl font-semibold text-forest">
              Señales a las que prestar atención
            </h2>
          </div>

          <p className="text-sm text-forest/75">
            Los animales suelen ocultar el malestar. Te sugerimos coordinar una consulta si observás:
          </p>

          <ul className="space-y-3.5 text-sm sm:text-base text-forest/80">
            <li className="p-3 bg-crema/50 rounded-2xl border border-forest/5 flex items-center gap-3">
              <span className="text-terracota font-bold text-xs">01</span>
              <span>Pérdida de apetito o rechazo del alimento habitual por más de 24 horas.</span>
            </li>
            <li className="p-3 bg-crema/50 rounded-2xl border border-forest/5 flex items-center gap-3">
              <span className="text-terracota font-bold text-xs">02</span>
              <span>Decaimiento marcado, letargo o desinterés en jugar o salir a pasear.</span>
            </li>
            <li className="p-3 bg-crema/50 rounded-2xl border border-forest/5 flex items-center gap-3">
              <span className="text-terracota font-bold text-xs">03</span>
              <span>Rascado insistente, sacudidas de cabeza o zonas enrojecidas en la piel.</span>
            </li>
            <li className="p-3 bg-crema/50 rounded-2xl border border-forest/5 flex items-center gap-3">
              <span className="text-terracota font-bold text-xs">04</span>
              <span>Vómitos, cambios en las heces o dificultad al orinar/defecar.</span>
            </li>
            <li className="p-3 bg-crema/50 rounded-2xl border border-forest/5 flex items-center gap-3">
              <span className="text-terracota font-bold text-xs">05</span>
              <span>Dificultad o rigidez al levantarse tras el descanso (especialmente en perros adultos).</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Cómo es el paso a paso & Qué traer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Paso a paso */}
        <div className="bg-salvia/10 rounded-3xl p-7 border border-salvia/25 space-y-4">
          <h3 className="font-serif text-xl font-semibold text-forest">
            El paso a paso en el consultorio
          </h3>
          <div className="space-y-3 text-sm text-forest/80">
            <div className="flex gap-3">
              <span className="font-semibold text-salvia-dark">Paso 1:</span>
              <span>Llegada tranquila. Permitimos que olfatee la sala unos minutos para disipar la tensión.</span>
            </div>
            <div className="flex gap-3">
              <span className="font-semibold text-salvia-dark">Paso 2:</span>
              <span>Conversamos con vos sobre los motivos de la consulta y sus hábitos en casa.</span>
            </div>
            <div className="flex gap-3">
              <span className="font-semibold text-salvia-dark">Paso 3:</span>
              <span>Examen físico sin movimientos bruscos, con caricias y refuerzo positivo.</span>
            </div>
            <div className="flex gap-3">
              <span className="font-semibold text-salvia-dark">Paso 4:</span>
              <span>Explicación detallada de hallazgos y entrega del plan de tratamiento.</span>
            </div>
          </div>
        </div>

        {/* Qué traer */}
        <div className="bg-warmwhite rounded-3xl p-7 border border-forest/10 shadow-soft space-y-4">
          <h3 className="font-serif text-xl font-semibold text-forest">
            ¿Qué te recomendamos traer?
          </h3>
          <ul className="space-y-2.5 text-sm text-forest/80">
            <li className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-salvia-dark" />
              <span>Libreta sanitaria o carnet de vacunas previo (si lo tenés).</span>
            </li>
            <li className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-salvia-dark" />
              <span>Para perros: collar y correa segura.</span>
            </li>
            <li className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-salvia-dark" />
              <span>Para gatos: transportadora con una manta con olor de casa.</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-salvia-dark" />
              <span>Estudios médicos previos si ya se realizaron en otro lugar.</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Formulario integrado de turno */}
      <div className="pt-6">
        <AppointmentForm defaultService="Consulta clínica general" />
      </div>

    </div>
  );
}
