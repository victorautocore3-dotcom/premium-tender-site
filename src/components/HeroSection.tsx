import React from 'react';
import { ArrowUpRight, Sparkles, Award } from 'lucide-react';

interface HeroSectionProps {
  onLearnHow: () => void;
  onStartProject: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onLearnHow,
  onStartProject
}) => {
  return (
    <section
      id="hero-agency-section"
      className="relative z-10 pt-12 sm:pt-20 pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Top pill badge */}
      <div className="flex items-center gap-2 mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-neutral-300 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="tracking-wider uppercase">Global Brand & Business Transformation</span>
          <span className="text-neutral-500">•</span>
          <span className="text-cyan-400">Enterprise SG Certified</span>
        </div>
      </div>

      {/* Main Hero Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
        {/* Left Side: Massive display typography */}
        <div className="lg:col-span-7 space-y-4">
          <h1
            id="hero-headline"
            className="text-5xl sm:text-7xl xl:text-8xl font-extrabold tracking-tight text-white leading-[1.04]"
          >
            <span className="block font-sans-modern tracking-tighter">
              Build A Brand
            </span>
            <span className="block font-serif-luxury font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-200 to-cyan-200 tracking-normal py-1">
              That Matters
            </span>
          </h1>

          {/* Subtext highlight */}
          <div className="pt-2 flex items-center gap-4 text-xs font-mono text-neutral-400">
            <span>[ SINGAPORE ]</span>
            <span>[ JAKARTA ]</span>
            <span>[ MANILA ]</span>
            <span>[ BANGKOK ]</span>
            <span>[ TOKYO ]</span>
          </div>
        </div>

        {/* Right Side: Clean explanatory paragraph & pill button */}
        <div className="lg:col-span-5 space-y-6 pb-2">
          <p
            id="hero-description"
            className="text-base sm:text-lg text-neutral-300 leading-relaxed font-light"
          >
            Consulus empowers high-growth Asian enterprises, generational family businesses,
            and institutional innovators to redefine their market space through strategic business
            design, purpose-led brand identity, and resilient organizational cultures.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Pill button: "How We Build Brands ↗" */}
            <button
              id="hero-how-we-build-btn"
              onClick={onLearnHow}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-neutral-950 hover:bg-neutral-200 transition-all duration-200 shadow-xl shadow-white/5 cursor-pointer"
            >
              <span>How We Build Brands</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Secondary Project button */}
            <button
              id="hero-start-project-btn"
              onClick={onStartProject}
              className="group inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium text-neutral-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Explore Engagement</span>
            </button>
          </div>

          {/* Quick Credibility line */}
          <div className="flex items-center gap-3 pt-2 text-xs text-neutral-400 border-t border-white/10">
            <Award className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Eligible Singapore enterprises qualify for up to 50% Enterprise Development Grant (EDG) co-funding.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
