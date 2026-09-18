import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface TopTickerProps {
  onEDGClick?: () => void;
}

export const TopTicker: React.FC<TopTickerProps> = ({ onEDGClick }) => {
  const tickerText =
    'Brand Transformation for Businesses Growing Across Asia — Up to 50% EDG Support for Eligible Projects. Limited Time Only';

  return (
    <aside
      id="top-marquee-ticker"
      aria-label="Announcement"
      className="relative z-30 w-full overflow-hidden bg-neutral-950 border-b border-white/10 text-xs py-2 text-neutral-300 select-none"
    >
      <div className="flex w-max items-center animate-marquee cursor-pointer" onClick={onEDGClick}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-6 px-6 font-medium whitespace-nowrap">
            <span className="flex items-center gap-2 text-neutral-200">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>{tickerText}</span>
            </span>
            <span className="inline-flex items-center text-[10px] uppercase tracking-wider text-amber-300/90 font-semibold bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
              Singapore EDG Grant
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
            <span className="text-neutral-700">✦</span>
          </div>
        ))}
      </div>
    </aside>
  );
};
