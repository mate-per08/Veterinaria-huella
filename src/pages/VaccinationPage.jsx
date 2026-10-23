import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, buildWhatsAppLink } from '../config/site';
import { trackEvent } from '../utils/analytics';
import AppointmentForm from '../components/AppointmentForm';
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  Calendar,
  Sparkles,
  MessageCircle,
  HelpCircle,
} from 'lucide-react';

export default function VaccinationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Vacunación y Prevención · Veterinaria Huella Mar del Plata";
  }, []);

  const whatsappMessage = "Hola, quisiera consultar por el esquema de vacunación y prevención de mi mascota.";

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Breadcrumb */}
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
            <ShieldCheck className="w-3.5 h-3.5 text-salvia-dark" />
            <span>MEDICINA PREVENTIVA RESPONSABLE</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-forest tracking-tight leading-tight">
            Vacunación adaptada a la vida real de tu mascota.
          </h1>

          <p className="text-base sm:text-lg text-forest/75 leading-relaxed">
            La prevención no consiste en aplicar vacunas mecánicamente. En Veterinaria Huella evaluamos su estilo de vida, salidas, contacto con otros animales y su estado inmunológico para diseñar un esquema de protección seguro y personalizado.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href={buildWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('click_whatsapp', { source: 'vacunacion_detail_header' })}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm shadow-soft transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Consultar por WhatsApp ↗</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl overflow-hidden shadow-soft-xl border-4 border-warmwhite aspect-[4/3] bg-forest/5">
            <img
              src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1000&q=80"
              alt="Cachorro recibiendo atención cariñosa y tranquila en consultorio"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Esquemas Explicados sin tecnicismos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Esquema Canino */}
        <div className="bg-warmwhite rounded-3xl p-7 sm:p-9 border border-forest/10 shadow-soft space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🐶</span>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-forest">
                Prevención en perros
              </h2>
              <p className="text-xs text-forest/60">Cachorros, adultos y adultos mayores</p>
            </div>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-forest/80">
            <div className="p-4 bg-crema/40 rounded-2xl border border-forest/5">
              <h3 className="font-semibold text-forest mb-1">
                Etapa Cachorro (Primeras semanas)
              </h3>
              <p className="text-xs sm:text-sm text-forest/75 leading-relaxed">
                Protección progresiva contra parvovirus, moquillo y adenovirus. Se inicia una vez que los anticuerpos maternos descienden y se completa antes de salir a la vereda o parques públicos.
              </p>
            </div>

            <div className="p-4 bg-crema/40 rounded-2xl border border-forest/5">
              <h3 className="font-semibold text-forest mb-1">
                Refuerzos Anuales
              </h3>
              <p className="text-xs sm:text-sm text-forest/75 leading-relaxed">
                Mantienen las defensas activas frente a enfermedades infecciosas complejas y la vacuna antirrábica (obligatoria por ley nacional para proteger la salud de toda la comunidad).
              </p>
            </div>

            <div className="p-4 bg-crema/40 rounded-2xl border border-forest/5">
              <h3 className="font-semibold text-forest mb-1">
                Control de Parásitos en Mar del Plata
              </h3>
              <p className="text-xs sm:text-sm text-forest/75 leading-relaxed">
                El clima costero y los paseos por plazas requieren prevención constante contra pulgas, garrapatas y parásitos internos que pueden afectar tanto a ellos como a tu familia.
              </p>
            </div>
          </div>
        </div>

        {/* Esquema Felino */}
        <div className="bg-warmwhite rounded-3xl p-7 sm:p-9 border border-forest/10 shadow-soft space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🐱</span>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-forest">
                Prevención en gatos
              </h2>
              <p className="text-xs text-forest/60">Gatitos, gatos de interior y con acceso exterior</p>
            </div>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-forest/80">
            <div className="p-4 bg-crema/40 rounded-2xl border border-forest/5">
              <h3 className="font-semibold text-forest mb-1">
                Vacuna Triple Felina
              </h3>
              <p className="text-xs sm:text-sm text-forest/75 leading-relaxed">
                Protege contra panleucopenia, calicivirus y rinotraqueítis viral (causantes de cuadros respiratorios y digestivos serios). Fundamental incluso en gatos que viven 100% dentro de casa.
              </p>
            </div>

            <div className="p-4 bg-crema/40 rounded-2xl border border-forest/5">
              <h3 className="font-semibold text-forest mb-1">
                Leucemia Felina (según riesgo)
              </h3>
              <p className="text-xs sm:text-sm text-forest/75 leading-relaxed">
                Recomendada para aquellos gatos que tienen contacto con otros felinos o acceso al exterior, previa evaluación clínica del profesional.
              </p>
            </div>

            <div className="p-4 bg-crema/40 rounded-2xl border border-forest/5">
              <h3 className="font-semibold text-forest mb-1">
                Antirrábica y Desparasitación
              </h3>
              <p className="text-xs sm:text-sm text-forest/75 leading-relaxed">
                Refuerzo anual y desparasitaciones periódicas respetando el peso y la sensibilidad gástrica de la especie.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Criterio Profesional Ético */}
      <div className="bg-salvia/15 border border-salvia/35 rounded-3xl p-7 sm:p-9 flex items-start gap-4">
        <div className="w-10 h-10 rounded-2xl bg-salvia/30 text-forest flex items-center justify-center shrink-0 mt-0.5">
          <HelpCircle className="w-5 h-5 text-forest" />
        </div>
        <div className="space-y-2">
          <h3 className="font-serif text-xl font-semibold text-forest">
            Aclaración médica responsable
          </h3>
          <p className="text-sm sm:text-base text-forest/80 leading-relaxed">
            Cada animal es un paciente único. Nunca aplicamos vacunas a un animal que presente fiebre, decaimiento o parásitos activos sin antes estabilizar su salud. En la consulta te indicamos el calendario exacto según su peso, edad e historia clínica.
          </p>
        </div>
      </div>

      {/* Appointment Form */}
      <div className="pt-4">
        <AppointmentForm defaultService="Vacunación y desparasitación" />
      </div>

    </div>
  );
}
