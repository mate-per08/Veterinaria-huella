import React from 'react';
import { siteConfig } from '../config/site';
import { ExternalLink } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export default function PermawebBadge() {
  const handleClick = () => {
    trackEvent('click_creator_badge', { url: siteConfig.demo.creditUrl });
  };

  return (
    <div className="fixed bottom-4 left-4 z-40 hidden md:block">
      <a
        href={siteConfig.demo.creditUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-forest/85 hover:bg-forest text-warmwhite text-xs font-medium tracking-wide shadow-soft backdrop-blur-md transition-all duration-200 border border-warmwhite/10 hover:border-salvia/40 hover:scale-102"
        title="Estudio de diseño y desarrollo web"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-salvia"></span>
        <span>{siteConfig.demo.creditLabel}</span>
        <ExternalLink className="w-3 h-3 text-salvia-light opacity-80" />
      </a>
    </div>
  );
}
