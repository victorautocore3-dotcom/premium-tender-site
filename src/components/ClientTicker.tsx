import React from 'react';
import { FEATURED_MEDIA } from '../data/agencyData';

export const ClientTicker: React.FC = () => {
  return (
    <section
      id="client-media-ticker"
      aria-label="Media Appearances"
      className="relative z-10 w-full border-y border-white/[0.08] bg-black/40 backdrop-blur-md py-5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 font-semibold">
            AS FEATURED IN
          </span>
          <div className="h-px w-12 bg-white/15" />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 hidden sm:inline">
          Leading Regional Press & Publications
        </span>
      </div>

      {/* Auto-scrolling Marquee */}
      <div className="relative w-full overflow-hidden flex select-none">
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 whitespace-nowrap">
          {[...FEATURED_MEDIA, ...FEATURED_MEDIA, ...FEATURED_MEDIA].map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="flex items-center gap-4 group cursor-default"
            >
              <span className="text-lg sm:text-xl font-bold tracking-tight text-neutral-400 group-hover:text-white transition-colors duration-200 font-serif-luxury">
                {item.name}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/5">
                {item.tag}
              </span>
              <span className="text-neutral-800 text-xs ml-4">/</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
