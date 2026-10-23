import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { X, Sparkles } from 'lucide-react';

export default function DemoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-forest text-warmwhite text-xs sm:text-sm py-2 px-4 transition-all duration-300 relative z-50 border-b border-forest-light">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="inline-flex items-center justify-center p-1 bg-salvia/20 text-salvia-light rounded">
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          <p className="text-center sm:text-left font-medium text-warmwhite/90">
            {siteConfig.demo.bannerText}
          </p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-warmwhite/70 hover:text-warmwhite p-1 rounded transition-colors focus:outline-none focus:ring-1 focus:ring-salvia"
          aria-label="Cerrar aviso de demostración"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
