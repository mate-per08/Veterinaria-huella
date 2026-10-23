import React from 'react';

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false,
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
            light
              ? 'bg-warmwhite/15 text-salvia-light border border-warmwhite/20'
              : 'bg-salvia/15 text-forest border border-salvia/30'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-terracota"></span>
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance leading-tight ${
          light ? 'text-warmwhite' : 'text-forest'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed text-balance ${
            light ? 'text-warmwhite/80' : 'text-forest/75'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
