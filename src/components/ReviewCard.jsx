import React from 'react';
import { Star } from 'lucide-react';

export default function ReviewCard({ review }) {
  const { author, pet, stars = 5, comment, date } = review;

  return (
    <div className="bg-warmwhite rounded-3xl p-6 sm:p-7 border border-forest/10 hover:border-salvia/40 shadow-soft transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        {/* Stars */}
        <div className="flex items-center gap-1 mb-4" aria-label={`Calificación: ${stars} estrellas`}>
          {[...Array(stars)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Comment */}
        <p className="text-forest/85 text-sm sm:text-base leading-relaxed mb-6 font-normal">
          "{comment}"
        </p>
      </div>

      {/* Author and pet details */}
      <div className="pt-4 border-t border-forest/10 flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-sm text-forest">
            {author}
          </h4>
          <p className="text-xs text-forest/60">
            {pet}
          </p>
        </div>
        {date && (
          <span className="text-[11px] text-forest/40">
            {date}
          </span>
        )}
      </div>
    </div>
  );
}
