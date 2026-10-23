import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const headerId = `faq-header-${index}`;

        return (
          <div
            key={index}
            className={`rounded-2xl transition-all duration-300 border ${
              isOpen
                ? 'bg-warmwhite border-salvia/60 shadow-soft'
                : 'bg-warmwhite/60 hover:bg-warmwhite border-forest/10'
            }`}
          >
            <h3>
              <button
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(index)}
                className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-salvia rounded-2xl"
              >
                <span className="font-serif text-lg sm:text-xl font-medium text-forest pr-2">
                  {item.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-salvia/20 text-forest' : 'bg-forest/5 text-forest/60'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!isOpen}
              className={`px-6 sm:px-7 pb-6 pt-1 text-forest/75 text-sm sm:text-base leading-relaxed transition-all duration-300 ${
                isOpen ? 'block' : 'hidden'
              }`}
            >
              <div className="border-t border-forest/10 pt-4">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
