import React from 'react';
import { X, MapPin, Award, Sparkles, BookOpen, RotateCcw, ArrowUpRight, Phone, Mail } from 'lucide-react';

interface MoreDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onReplayPreloader: () => void;
  onStartProject: () => void;
}

export const MoreDrawer: React.FC<MoreDrawerProps> = ({
  isOpen,
  onClose,
  onReplayPreloader,
  onStartProject
}) => {
  if (!isOpen) return null;

  const bureaus = [
    { city: 'Singapore (Global HQ)', address: '100 Tras Street, 100 AM, Singapore 079027', phone: '+65 6223 8816' },
    { city: 'Jakarta Bureau', address: 'Menara BCA 50th Fl, Grand Indonesia, Jakarta 10310', phone: '+62 21 2358 4400' },
    { city: 'Manila Bureau', address: 'High Street South Corporate Plaza, BGC, Taguig 1634', phone: '+63 2 8876 1000' },
    { city: 'Bangkok Bureau', address: 'Sathorn Square Tower, North Sathorn, Bangkok 10500', phone: '+66 2 105 4000' },
    { city: 'Tokyo Bureau', address: 'Marunouchi Park Building, Chiyoda-ku, Tokyo 100-6908', phone: '+81 3 5220 1000' }
  ];

  return (
    <div
      id="more-drawer-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="more-drawer-panel"
        className="relative w-full max-w-xl h-full bg-[#0e0e11] border-l border-white/15 p-6 sm:p-8 overflow-y-auto space-y-8 text-neutral-200 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <h3 className="text-xl font-bold text-white tracking-tight">
              Agency Directory & Insights
            </h3>
          </div>
          <button
            id="close-more-drawer-btn"
            onClick={onClose}
            aria-label="Close drawer"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Singapore EDG Grant Accreditation */}
        <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/25 space-y-3">
          <div className="flex items-center gap-2 text-amber-300 font-semibold text-sm">
            <Award className="w-4 h-4" />
            <span>Enterprise Singapore EDG Co-Funding</span>
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed font-light">
            Singapore-registered businesses may receive up to 50% co-funding support for qualifying
            Core Capabilities (Strategic Brand Transformation, Organizational Redesign, and Innovation).
            Consulus consultants are certified by Enterprise Singapore-recognized bodies.
          </p>
          <button
            onClick={() => {
              onClose();
              onStartProject();
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-200 hover:text-amber-100 hover:underline cursor-pointer"
          >
            Check Your EDG Eligibility ↗
          </button>
        </div>

        {/* Global Bureaus */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              Regional Bureaus & Laboratories
            </span>
            <span className="text-[10px] font-mono text-neutral-400">ASIA-PACIFIC</span>
          </div>

          <div className="space-y-2.5">
            {bureaus.map((b, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors"
              >
                <div className="font-semibold text-sm text-white">{b.city}</div>
                <div className="text-xs text-neutral-400 mt-0.5">{b.address}</div>
                <div className="text-[11px] font-mono text-cyan-300/80 mt-1 flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  {b.phone}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications & Thought Leadership */}
        <div className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-purple-400" />
            Thought Leadership & Frameworks
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[10px] font-mono text-rose-300">BOOK</span>
              <h5 className="text-xs font-bold text-white mt-1">Shape the World</h5>
              <p className="text-[11px] text-neutral-400 mt-0.5">Brand Transformation Framework for Purposeful Enterprise.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[10px] font-mono text-cyan-300">ANNUAL FORUM</span>
              <h5 className="text-xs font-bold text-white mt-1">Shape the World Summit</h5>
              <p className="text-[11px] text-neutral-400 mt-0.5">Gathering 300+ CEOs, Ministers & Regional Innovators.</p>
            </div>
          </div>
        </div>

        {/* Replay Preloader Trigger */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-white">Experience Particle Preloader</div>
            <div className="text-[11px] text-neutral-400 font-light">
              Replay the 1,000-particle canvas "C" letter animation
            </div>
          </div>
          <button
            onClick={() => {
              onClose();
              onReplayPreloader();
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
            <span>Replay Intro</span>
          </button>
        </div>

        {/* Direct Contact Button */}
        <div className="pt-2">
          <button
            onClick={() => {
              onClose();
              onStartProject();
            }}
            className="w-full py-3.5 rounded-full text-sm font-semibold bg-white text-black hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl"
          >
            <span>Initiate Direct Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
