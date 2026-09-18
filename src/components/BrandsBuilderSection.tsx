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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-teal-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#0b1324] to-[#0a0a0c] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Top accent badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>PROPRIETARY BID INTELLIGENCE SUITE</span>
            </div>
            <span className="text-xs font-mono text-neutral-400">
              REAL-TIME COMPLIANCE & SCORING ENGINE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                BidBuilder.<span className="text-cyan-400">ai</span>
                <span className="block font-serif-luxury italic font-normal text-amber-200 text-2xl sm:text-4xl mt-1">
                  Automated RFP & Tender Intelligence at Scale
                </span>
              </h2>

              <p className="text-base text-neutral-300 font-light leading-relaxed">
                Accelerate bid qualification and outscore competitors with BidBuilder.ai.
                Our proprietary tender intelligence engine automatically deconstructs buyer specifications,
                extracts mandatory compliance criteria, and drafts high-scoring social value evidence aligned
                with the UK Procurement Act 2023.
              </p>

              {/* Feature pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                  <h4 className="text-sm font-semibold text-white">RFP Deconstruction</h4>
                  <p className="text-xs text-neutral-400">Instant extraction of pass/fail criteria & weighting.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                  <Activity className="w-5 h-5 text-cyan-400" />
                  <h4 className="text-sm font-semibold text-white">Win-Theme Radar</h4>
                  <p className="text-xs text-neutral-400">AI mapping to buyer priorities and APMP standards.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  <h4 className="text-sm font-semibold text-white">Social Value Matrix</h4>
                  <p className="text-xs text-neutral-400">Quantified PPN 06/20 Net Zero & local economic proofs.</p>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={onExplore}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold bg-cyan-400 text-neutral-950 hover:bg-cyan-300 transition-all cursor-pointer shadow-lg shadow-cyan-950/50"
                >
                  <span>Explore BidBuilder.ai Demo</span>
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
                    TENDER SCORING RADAR
                  </span>
                  <span>PROCUREMENT PORTAL</span>
                </div>

                {/* Simulated UI Cards */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-between">
                    <span className="text-neutral-300">Technical Quality Score</span>
                    <span className="text-emerald-400 font-bold">96.4 / 100 (High)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-between">
                    <span className="text-neutral-300">Compliance Verification</span>
                    <span className="text-cyan-400 font-bold">100% Zero Non-Conformance</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-between">
                    <span className="text-neutral-300">Social Value Weighting</span>
                    <span className="text-purple-300 font-bold">Max Points (PPN 06/20)</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-neutral-400 flex items-center justify-between border-t border-white/10 font-mono">
                  <span>£5.3M+ TENDERS SCORED</span>
                  <span className="text-cyan-400 font-semibold">APMP GOLD READY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
