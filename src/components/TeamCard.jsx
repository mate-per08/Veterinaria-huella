import React from 'react';
import { Quote } from 'lucide-react';

export default function TeamCard({ member }) {
  const { name, role, bio, approach, image, badge } = member;

  return (
    <div className="bg-warmwhite rounded-3xl p-6 sm:p-7 border border-forest/10 hover:border-salvia/50 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between h-full group">
      <div>
        {/* Profile Image & Badge */}
        <div className="relative mb-6">
          <div className="aspect-square w-full rounded-2xl overflow-hidden bg-forest/5">
            <img
              src={image}
              alt={`${name} - ${role} en Veterinaria Huella`}
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
            />
          </div>
          {badge && (
            <span className="absolute bottom-3 left-3 bg-forest/80 backdrop-blur-md text-warmwhite text-xs font-semibold px-3 py-1 rounded-full border border-warmwhite/20">
              {badge}
            </span>
          )}
        </div>

        {/* Identity & Bio */}
        <h3 className="font-serif text-2xl font-semibold text-forest mb-1">
          {name}
        </h3>
        <p className="text-sm font-medium text-terracota mb-4">
          {role}
        </p>
        <p className="text-forest/75 text-sm sm:text-base leading-relaxed mb-6">
          {bio}
        </p>
      </div>

      {/* Philosophy / Way of care */}
      {approach && (
        <div className="bg-salvia/10 rounded-2xl p-4 border border-salvia/20 relative">
          <Quote className="w-5 h-5 text-salvia-dark/40 absolute top-3 right-3" />
          <span className="block text-[11px] font-semibold uppercase tracking-wider text-salvia-dark mb-1">
            Forma de atención
          </span>
          <p className="text-xs sm:text-sm text-forest italic leading-relaxed">
            "{approach}"
          </p>
        </div>
      )}
    </div>
  );
}
