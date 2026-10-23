import React, { useState } from 'react';
import { siteConfig, buildWhatsAppLink } from '../config/site';
import { trackEvent } from '../utils/analytics';
import { MessageCircle, CheckCircle2, AlertCircle, Calendar, Sparkles } from 'lucide-react';

export default function AppointmentForm({ defaultService = '' }) {
  const [formData, setFormData] = useState({
    tipoConsulta: defaultService || 'Consulta clínica general',
    especie: 'Perro',
    nombreMascota: '',
    nombreTutor: '',
    franjaHoraria: 'Tarde (14:00 a 19:30)',
    comentario: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    'Consulta clínica general',
    'Vacunación y desparasitación',
    'Control periódico de salud',
    'Atención felina',
    'Cirugía o castración programada',
    'Cuidado en etapa senior',
    'Otro motivo de consulta',
  ];

  const timeOptions = [
    'Mañana (09:00 a 13:00)',
    'Tarde (14:00 a 19:30)',
    'Lo antes posible / Primer turno disponible',
    'Sábado por la mañana',
  ];

  const validate = () => {
    const errs = {};
    if (!formData.nombreMascota.trim()) {
      errs.nombreMascota = 'Por favor ingresá el nombre de tu mascota.';
    }
    if (!formData.nombreTutor.trim()) {
      errs.nombreTutor = 'Por favor decinos tu nombre para dirigirnos a vos.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    // Construct polite, formatted rioplatense WhatsApp message
    const formattedMessage = `Hola Veterinaria Huella! 👋 Quisiera solicitar un turno:
🐾 Mascota: ${formData.nombreMascota.trim()} (${formData.especie})
👤 Tutor/a: ${formData.nombreTutor.trim()}
🩺 Motivo: ${formData.tipoConsulta}
⏰ Horario preferido: ${formData.franjaHoraria}${
      formData.comentario.trim() ? `\n📝 Comentario: ${formData.comentario.trim()}` : ''
    }`;

    // Track analytics event
    trackEvent('submit_appointment_form', {
      tipoConsulta: formData.tipoConsulta,
      especie: formData.especie,
      horarioPreferido: formData.franjaHoraria,
      hasComment: Boolean(formData.comentario.trim()),
    });

    // Open WhatsApp
    const whatsappUrl = buildWhatsAppLink(formattedMessage);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
  };

  return (
    <div className="bg-warmwhite rounded-3xl p-6 sm:p-9 border border-forest/10 shadow-soft-lg">
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-salvia/20 text-forest mb-2">
          <Calendar className="w-3.5 h-3.5 text-salvia-dark" />
          <span>Coordinación ágil</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-forest">
          Pedí tu turno para tu compañero
        </h3>
        <p className="text-forest/75 text-sm sm:text-base mt-2">
          Completá estos breves datos y coordinamos el horario por WhatsApp para evitarte demoras.
        </p>
      </div>

      {submitted ? (
        <div className="bg-salvia/15 border border-salvia/40 rounded-2xl p-6 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-12 h-12 bg-salvia text-warmwhite rounded-full flex items-center justify-center mx-auto shadow-soft">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-serif text-xl font-semibold text-forest mb-1">
              ¡Mensaje preparado con éxito!
            </h4>
            <p className="text-forest/80 text-sm max-w-md mx-auto leading-relaxed">
              Se abrió WhatsApp para que nos envíes tu solicitud. El equipo de Veterinaria Huella te va a responder a la brevedad para confirmarte el horario exacto.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs font-semibold text-forest underline hover:text-terracota transition-colors"
          >
            ¿Querés enviar otra solicitud o corregir algún dato?
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Especie Selector (Pills) */}
          <div>
            <label className="block text-xs font-semibold tracking-wider text-forest/70 uppercase mb-2">
              Especie de tu mascota *
            </label>
            <div className="grid grid-cols-2 gap-3">
              {['Perro', 'Gato'].map((esp) => (
                <button
                  key={esp}
                  type="button"
                  onClick={() => setFormData({ ...formData, especie: esp })}
                  className={`py-3 px-4 rounded-2xl text-sm font-semibold transition-all duration-200 border flex items-center justify-center gap-2 ${
                    formData.especie === esp
                      ? 'bg-forest text-warmwhite border-forest shadow-soft'
                      : 'bg-crema/40 text-forest/80 border-forest/10 hover:bg-crema'
                  }`}
                >
                  <span>{esp === 'Perro' ? '🐶' : '🐱'}</span>
                  <span>{esp}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Nombre Mascota y Nombre Tutor */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nombreMascota" className="block text-xs font-semibold text-forest/80 mb-1.5">
                Nombre de la mascota *
              </label>
              <input
                id="nombreMascota"
                type="text"
                placeholder="Ej: Milo, Luna, Simón..."
                value={formData.nombreMascota}
                onChange={(e) => {
                  setFormData({ ...formData, nombreMascota: e.target.value });
                  if (errors.nombreMascota) setErrors({ ...errors, nombreMascota: null });
                }}
                className={`w-full px-4 py-3 rounded-2xl bg-crema/30 border text-forest text-sm placeholder:text-forest/40 focus:outline-none focus:ring-2 focus:ring-salvia transition-colors ${
                  errors.nombreMascota ? 'border-red-400 bg-red-50/20' : 'border-forest/10 hover:border-forest/20'
                }`}
              />
              {errors.nombreMascota && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.nombreMascota}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="nombreTutor" className="block text-xs font-semibold text-forest/80 mb-1.5">
                Tu nombre (tutor/a) *
              </label>
              <input
                id="nombreTutor"
                type="text"
                placeholder="Ej: Sofía, Carlos..."
                value={formData.nombreTutor}
                onChange={(e) => {
                  setFormData({ ...formData, nombreTutor: e.target.value });
                  if (errors.nombreTutor) setErrors({ ...errors, nombreTutor: null });
                }}
                className={`w-full px-4 py-3 rounded-2xl bg-crema/30 border text-forest text-sm placeholder:text-forest/40 focus:outline-none focus:ring-2 focus:ring-salvia transition-colors ${
                  errors.nombreTutor ? 'border-red-400 bg-red-50/20' : 'border-forest/10 hover:border-forest/20'
                }`}
              />
              {errors.nombreTutor && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.nombreTutor}</span>
                </p>
              )}
            </div>
          </div>

          {/* Tipo de consulta */}
          <div>
            <label htmlFor="tipoConsulta" className="block text-xs font-semibold text-forest/80 mb-1.5">
              Tipo de consulta o servicio *
            </label>
            <select
              id="tipoConsulta"
              value={formData.tipoConsulta}
              onChange={(e) => setFormData({ ...formData, tipoConsulta: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl bg-crema/30 border border-forest/10 hover:border-forest/20 text-forest text-sm focus:outline-none focus:ring-2 focus:ring-salvia transition-colors"
            >
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Horario preferido */}
          <div>
            <label htmlFor="franjaHoraria" className="block text-xs font-semibold text-forest/80 mb-1.5">
              Día o franja horaria preferida
            </label>
            <select
              id="franjaHoraria"
              value={formData.franjaHoraria}
              onChange={(e) => setFormData({ ...formData, franjaHoraria: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl bg-crema/30 border border-forest/10 hover:border-forest/20 text-forest text-sm focus:outline-none focus:ring-2 focus:ring-salvia transition-colors"
            >
              {timeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Comentario opcional */}
          <div>
            <label htmlFor="comentario" className="block text-xs font-semibold text-forest/80 mb-1.5">
              Comentarios o síntomas que hayas notado (opcional)
            </label>
            <textarea
              id="comentario"
              rows={3}
              placeholder="Contanos brevemente qué notaste o si tu mascota tiene alguna particularidad..."
              value={formData.comentario}
              onChange={(e) => setFormData({ ...formData, comentario: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl bg-crema/30 border border-forest/10 hover:border-forest/20 text-forest text-sm placeholder:text-forest/40 focus:outline-none focus:ring-2 focus:ring-salvia transition-colors resize-none"
            ></textarea>
          </div>

          {/* Clarity Disclaimer Required */}
          <div className="bg-salvia/10 p-3.5 rounded-2xl border border-salvia/25 flex items-start gap-2.5 text-xs text-forest/80 leading-relaxed">
            <Sparkles className="w-4 h-4 text-salvia-dark shrink-0 mt-0.5" />
            <p>
              <strong className="text-forest font-semibold">¿Cómo funciona?</strong> Al hacer clic, se abre WhatsApp con estos datos organizados. Nuestro equipo te confirma el turno exacto para que no esperes.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-base shadow-soft hover:shadow-soft-lg transition-all duration-300 flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Enviar solicitud por WhatsApp ↗</span>
          </button>
        </form>
      )}
    </div>
  );
}
