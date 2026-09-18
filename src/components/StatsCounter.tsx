import React from 'react';
import { AGENCY_STATS } from '../data/agencyData';

export const StatsCounter: React.FC = () => {
  return (
    <section
      id="about-stats-section"
      aria-label="Agency Statistics & Accreditations"
      className="relative z-10 w-full bg-[#0d0d0f] border-y border-white/10 py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Lead */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-14 pb-6 border-b border-white/[0.08]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              // INSTITUTIONAL HERITAGE & PROVEN TRACK RECORD
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Decades of Leadership in Asian Brand Transformation
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-400 max-w-xs">
            Headquartered in Singapore with partner bureaus operating across ASEAN and East Asia.
          </div>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {AGENCY_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="relative group p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all duration-300 hover:bg-white/[0.04]"
            >
              {/* Corner accent */}
              <div className="absolute top-3 right-3 text-[10px] font-mono text-neutral-500">
                0{idx + 1}
              </div>

              {/* Large Counter Number */}
              <div
                id={`stat-number-${idx}`}
                className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white font-sans-modern group-hover:text-cyan-300 transition-colors"
              >
                {stat.value}
              </div>

              {/* Small Label as required */}
              <div className="mt-3 text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-300 font-mono">
                {stat.label}
              </div>

              {/* Informative Subtext */}
              <p className="mt-2 text-xs text-neutral-400 leading-relaxed font-light">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
