import React from 'react';
import { Sparkles, Shield, Cpu, Activity, ArrowUpRight } from 'lucide-react';

interface BrandsBuilderSectionProps {
  onExplore: () => void;
}

export const BrandsBuilderSection: React.FC<BrandsBuilderSectionProps> = ({ onExplore }) => {
  return (
    <section
      id="brandsbuilder-section"
      className="relative z-10 py-20 sm:py-28 border-t border-white/10 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#0e1626] to-[#0a0a0c] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Top accent badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>PROPRAIETARY ENTERPRISE AI SUITE</span>
            </div>
            <span className="text-xs font-mono text-neutral-400">
              REAL-TIME BRAND HEALTH INTELLIGENCE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                BrandsBuilder.<span className="text-cyan-400">ai</span>
                <span className="block font-serif-luxury italic font-normal text-amber-200 text-2xl sm:text-4xl mt-1">
                  Predictive Brand Governance at Scale
                </span>
              </h2>

              <p className="text-base text-neutral-300 font-light leading-relaxed">
                Maintain continuous brand equity across dozens of Asian markets. BrandsBuilder.ai
                is our autonomous brand management engine combining LLM cultural semiotics,
                asset compliance verification, and regional stakeholder sentiment monitoring.
              </p>

              {/* Feature pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                  <h4 className="text-sm font-semibold text-white">Semantic Audits</h4>
                  <p className="text-xs text-neutral-400">Automated consistency scoring across 14 languages.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                  <Activity className="w-5 h-5 text-purple-400" />
                  <h4 className="text-sm font-semibold text-white">Sentiment Radar</h4>
                  <p className="text-xs text-neutral-400">Early detection of regional reputational drifts.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  <h4 className="text-sm font-semibold text-white">Visual Governance</h4>
                  <p className="text-xs text-neutral-400">Automated guideline verification for all marketing assets.</p>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={onExplore}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold bg-cyan-400 text-neutral-950 hover:bg-cyan-300 transition-all cursor-pointer shadow-lg shadow-cyan-950/50"
                >
                  <span>Request Enterprise AI Demo</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>

            {/* Visual preview */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-cyan-500/20 bg-black/60 p-6 backdrop-blur-xl shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    LIVE TELEMETRY
                  </span>
                  <span>APAC CLUSTER 04</span>
                </div>

                {/* Simulated UI Cards */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-between">
                    <span className="text-neutral-300">Brand Equity Index</span>
                    <span className="text-emerald-400 font-bold">94.8 / 100 (+3.2%)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-between">
                    <span className="text-neutral-300">Multi-Channel Consistency</span>
                    <span className="text-cyan-400 font-bold">98.2% Optimal</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-between">
                    <span className="text-neutral-300">Tone & Voice Alignment</span>
                    <span className="text-purple-400 font-bold">Synchronized</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-neutral-400 flex items-center justify-between border-t border-white/10 font-mono">
                  <span>DEPLOYED IN 40+ CITIES</span>
                  <span className="text-cyan-400 font-semibold">EDG FUNDABLE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
