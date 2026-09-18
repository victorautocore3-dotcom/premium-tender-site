import React from 'react';
import { X, MapPin, Award, BookOpen, RotateCcw, ArrowUpRight, Phone } from 'lucide-react';

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
    { city: 'London & South East (HQ)', address: '100 Bishopsgate, London EC2N 4AG', phone: '+44 20 7946 0912' },
    { city: 'Manchester & North West Desk', address: '1 St Peter\'s Square, Manchester M2 3AE', phone: '+44 161 496 0841' },
    { city: 'Birmingham & Midlands Bureau', address: 'The Colmore Building, 20 Colmore Circus, Birmingham B4 6AT', phone: '+44 121 496 0520' },
    { city: 'Scotland & Northern Frameworks', address: '10 St Andrew Square, Edinburgh EH2 2AF', phone: '+44 131 496 0773' }
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
              Tender Specialist • Desks & Insights
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

        {/* APMP & Procurement Standards Card */}
        <div className="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 space-y-3">
          <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm">
            <Award className="w-4 h-4" />
            <span>APMP-Certified Bid Strategy & UK Procurement Compliance</span>
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed font-light">
            We operate in full compliance with the UK Procurement Act 2023, Crown Commercial Service (CCS) standards,
            and NHS England procurement rules. Our certified tender writers ensure strict adherence to evaluation mark schemes,
            delivering comprehensive win-themes and compliant evidence matrices.
          </p>
          <button
            onClick={() => {
              onClose();
              onStartProject();
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-200 hover:text-cyan-100 hover:underline cursor-pointer"
          >
            Request Free Pre-Bid Evaluation ↗
          </button>
        </div>

        {/* UK Regional Desks */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              Regional Bid Desks & Advisory
            </span>
            <span className="text-[10px] font-mono text-neutral-400">UNITED KINGDOM</span>
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

        {/* Methodology Frameworks */}
        <div className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            Proprietary Bid Methodologies
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[10px] font-mono text-cyan-300">FRAMEWORK</span>
              <h5 className="text-xs font-bold text-white mt-1">Zero-Defect Bid Matrix</h5>
              <p className="text-[11px] text-neutral-400 mt-0.5">100% compliance audit eliminating disqualification risk.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[10px] font-mono text-cyan-300">PPN 06/20</span>
              <h5 className="text-xs font-bold text-white mt-1">Social Value Playbook</h5>
              <p className="text-[11px] text-neutral-400 mt-0.5">Maximizing the 10-20% social impact and Net Zero criteria.</p>
            </div>
          </div>
        </div>

        {/* Replay Preloader Trigger */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-white">Experience Particle Preloader</div>
            <div className="text-[11px] text-neutral-400 font-light">
              Replay the interactive canvas particle loading sequence
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
            <span>Submit Tender Brief For Review</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
