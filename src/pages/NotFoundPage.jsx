import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { buildWhatsAppLink } from '../config/site';
import { trackEvent } from '../utils/analytics';
import { Home, MessageCircle, HelpCircle } from 'lucide-react';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "Página no encontrada · Veterinaria Huella";
  }, []);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full bg-warmwhite rounded-3xl p-8 sm:p-10 border border-forest/10 shadow-soft text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-salvia/20 text-salvia-dark flex items-center justify-center mx-auto">
          <HelpCircle className="w-8 h-8" />
        </div>

        <div>
          <span className="font-serif text-5xl font-bold text-salvia-dark block mb-2">
            404
          </span>
          <h1 className="font-serif text-2xl font-semibold text-forest mb-2">
            No encontramos esa página
          </h1>
          <p className="text-forest/75 text-sm leading-relaxed">
            Parece que el enlace que buscabas cambió o no existe. Podés volver al inicio o escribirnos por WhatsApp si necesitás ayuda.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link
            to="/"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-forest hover:bg-forest-light text-warmwhite text-sm font-semibold transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Ir al inicio</span>
          </Link>

          <a
            href={buildWhatsAppLink("Hola, estaba navegando en su web y tenía una consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('click_whatsapp', { source: '404_page' })}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-salvia/20 hover:bg-salvia/30 text-forest text-sm font-semibold border border-salvia/40 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-salvia-dark" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
