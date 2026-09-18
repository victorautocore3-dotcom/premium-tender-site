import React from 'react';
import { ArrowUpRight, MessageCircle, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onStartProject: () => void;
  onOpenWhatsApp: () => void;
  onReplayPreloader: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onStartProject,
  onOpenWhatsApp,
  onReplayPreloader
}) => {
  return (
    <footer
      id="agency-footer"
      className="relative z-10 bg-black border-t border-white/10 pt-20 pb-28 text-neutral-400"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Call to Action Banner */}
        <div className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-r from-neutral-900 via-neutral-900 to-[#101827] border border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              READY TO WIN YOUR NEXT CONTRACT?
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Let's engineer a compliant, high-scoring bid that wins.
            </h3>
            <p className="text-sm text-neutral-400 font-light">
              Helping ambitious SMEs win high-value government frameworks, NHS supply chain awards, and competitive private contracts.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onStartProject}
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold bg-white text-black hover:bg-neutral-200 transition-all cursor-pointer shadow-xl"
            >
              <span>Submit Tender Brief</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={onOpenWhatsApp}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/25 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Bid Desk</span>
            </button>
          </div>
        </div>

        {/* Bureau Locations & Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-6 border-t border-white/10">
          {/* Col 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center font-serif-luxury font-bold text-white text-lg">
                T
              </div>
              <span className="font-bold text-lg tracking-wider text-white">TENDER SPECIALIST</span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm font-light">
              Tender Specialist is a premier tender writing and bid management consultancy.
              We deconstruct buyer criteria, craft compliant, top-scoring technical responses, and help SMEs win lucrative contracts.
            </p>
            <div className="flex items-center gap-3 text-xs text-neutral-300 font-mono">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>APMP Certified • £5.3M+ Procured Tender Value</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              Services
            </h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#solutions-section" className="hover:text-white transition-colors">Tender Writing</a></li>
              <li><a href="#solutions-section" className="hover:text-white transition-colors">Bid Management</a></li>
              <li><a href="#solutions-section" className="hover:text-white transition-colors">Pitch Deck Design</a></li>
              <li><a href="#solutions-section" className="hover:text-white transition-colors">Procurement Strategy</a></li>
              <li><a href="#brandsbuilder-section" className="text-cyan-400 hover:text-cyan-300 transition-colors">BidBuilder.ai Engine</a></li>
            </ul>
          </div>

          {/* Col 3: Sectors & Frameworks */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              Sectors & Portals
            </h5>
            <ul className="space-y-2 text-xs font-mono">
              <li className="text-neutral-300">Crown Commercial Service</li>
              <li>NHS Trusts & Healthcare</li>
              <li>Local Councils & Housing</li>
              <li>Commercial Construction</li>
              <li>Defence & Security</li>
              <li>Private Sector Tenders</li>
            </ul>
          </div>

          {/* Col 4: Interactive */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              Resources
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onReplayPreloader}
                  className="text-left text-neutral-300 hover:text-white transition-colors cursor-pointer"
                >
                  Replay Particle Preloader
                </button>
              </li>
              <li>
                <a href="#works-section" className="hover:text-white transition-colors">
                  Case Studies Archive
                </a>
              </li>
              <li>
                <a href="#about-stats-section" className="hover:text-white transition-colors">
                  Win Rate & Track Record
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            © {new Date().getFullYear()} Tender Specialist Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-neutral-400">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Engagement</span>
            <span>•</span>
            <span>UK Reg: 12894102</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
