import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/site';
import { getArgentinaStatus } from '../utils/hours';
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export default function HoursCard() {
  const [status, setStatus] = useState(getArgentinaStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getArgentinaStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-warmwhite rounded-3xl p-6 sm:p-7 border border-forest/10 shadow-soft h-full flex flex-col justify-between">
      <div>
        {/* Header with live badge */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2.5">
            <Clock className="w-5 h-5 text-forest" />
            <h3 className="font-serif text-xl font-semibold text-forest">
              Horarios de atención
            </h3>
          </div>
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
              status.isOpen
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                : 'bg-amber-50 text-amber-800 border border-amber-200'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
              }`}
            ></span>
            {status.isOpen ? 'Abierto ahora' : 'Cerrado ahora'}
          </span>
        </div>

        {/* Status note */}
        <p className="text-xs sm:text-sm text-forest/70 mb-6 bg-crema/60 p-3 rounded-2xl border border-forest/5">
          {status.statusNote}
        </p>

        {/* Schedule List */}
        <div className="space-y-3">
          {siteConfig.hours.map((item, idx) => {
            const isToday = item.activeDays.includes(status.dayOfWeek);

            return (
              <div
                key={idx}
                className={`p-3.5 rounded-2xl transition-colors flex items-center justify-between text-sm ${
                  isToday
                    ? 'bg-salvia/15 border border-salvia/40 font-semibold text-forest'
                    : 'bg-crema/30 border border-transparent text-forest/80'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span>{item.days}</span>
                    {isToday && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-salvia/30 text-forest-dark">
                        Hoy
                      </span>
                    )}
                  </div>
                  <span className="block text-xs font-normal text-forest/60 mt-0.5">
                    {item.note}
                  </span>
                </div>
                <span className="font-semibold text-forest text-right ml-4">
                  {item.time}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-forest/10 text-xs text-forest/60">
        <p>
          * Los turnos se coordinan previamente para evitar esperas y asegurar la atención con el tiempo adecuado.
        </p>
      </div>
    </div>
  );
}
