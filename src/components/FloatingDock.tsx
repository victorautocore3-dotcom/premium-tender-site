import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, MessageCircle, ChevronUp } from 'lucide-react';
import { ambientAudio } from '../utils/audioSynth';

interface FloatingDockProps {
  onToggleMore: () => void;
  onOpenWhatsApp: () => void;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({
  onToggleMore,
  onOpenWhatsApp
}) => {
  const [isAudioActive, setIsAudioActive] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAudioToggle = () => {
    const active = ambientAudio.toggle();
    setIsAudioActive(active);
  };

  return (
    <aside
      id="floating-bottom-dock"
      aria-label="Floating Navigation Dock"
      className="fixed bottom-6 inset-x-0 mx-auto w-fit z-40 max-w-[94vw] transition-all duration-300"
    >
      <div className="bg-black/60 backdrop-blur-xl border border-white/15 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-2xl flex items-center gap-2 sm:gap-4 ring-1 ring-white/5">
        {/* Services link */}
        <button
          id="dock-solutions"
          onClick={() => scrollToSection('solutions-section')}
          className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          Services
        </button>

        {/* Track Record link */}
        <button
          id="dock-about"
          onClick={() => scrollToSection('about-stats-section')}
          className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          Track Record
        </button>

        {/* BidBuilder.ai link */}
        <button
          id="dock-brandsbuilder"
          onClick={() => scrollToSection('brandsbuilder-section')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-cyan-300 hover:text-cyan-200 hover:bg-cyan-500/10 transition-colors cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="hidden sm:inline">BidBuilder.ai</span>
          <span className="sm:hidden">AI RFP</span>
        </button>

        {/* MORE drawer toggle */}
        <button
          id="dock-more-toggle"
          onClick={onToggleMore}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <span>MORE</span>
          <ChevronUp className="w-3.5 h-3.5 text-neutral-400" />
        </button>

        {/* Vertical divider */}
        <div className="h-5 w-[1px] bg-white/15" />

        {/* WhatsApp icon button with green accent */}
        <button
          id="dock-whatsapp-btn"
          onClick={onOpenWhatsApp}
          title="Connect via WhatsApp"
          aria-label="Connect via WhatsApp"
          className="group relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 flex items-center justify-center transition-all cursor-pointer shadow-lg shadow-emerald-950/40"
        >
          <MessageCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-emerald-400/20 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-black animate-pulse" />
        </button>

        {/* Audio / Sound toggle button */}
        <button
          id="dock-audio-toggle"
          onClick={handleAudioToggle}
          title={isAudioActive ? 'Mute ambient soundscape' : 'Play ambient soundscape'}
          aria-label={isAudioActive ? 'Mute ambient soundscape' : 'Play ambient soundscape'}
          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
            isAudioActive
              ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300 shadow-md shadow-cyan-900/40'
              : 'bg-white/5 border-white/15 text-neutral-400 hover:text-white hover:bg-white/10'
          }`}
        >
          {isAudioActive ? (
            <div className="flex items-center gap-0.5 h-3.5">
              <span className="w-0.5 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-0.5 h-4 bg-cyan-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-0.5 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          ) : (
            <VolumeX className="w-4 h-4" />
          )}
        </button>
      </div>
    </aside>
  );
};
