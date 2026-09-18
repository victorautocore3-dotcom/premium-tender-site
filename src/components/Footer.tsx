import React from 'react';
import { ArrowUpRight, Award, Globe, Mail, MessageCircle, ShieldCheck } from 'lucide-react';

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
        <div className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-r from-neutral-900 via-neutral-900 to-[#12141a] border border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              READY TO SHAPE THE WORLD?
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Let's engineer a brand that leads the next generation.
            </h3>
            <p className="text-sm text-neutral-400 font-light">
              Eligible Singapore enterprises qualify for up to 50% Enterprise Development Grant (EDG) co-funding.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onStartProject}
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold bg-white text-black hover:bg-neutral-200 transition-all cursor-pointer shadow-xl"
            >
              <span>Initiate Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={onOpenWhatsApp}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/25 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>

        {/* Bureau Locations & Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-6 border-t border-white/10">
          {/* Col 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center font-serif-luxury font-bold text-white text-lg">
                C
              </div>
              <span className="font-bold text-lg tracking-wider text-white">CONSULUS</span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm font-light">
              Consulus is a global brand and business transformation firm established in Singapore.
              We help leaders reshape organizational purpose, business models, and customer experiences.
            </p>
            <div className="flex items-center gap-3 text-xs text-neutral-300 font-mono">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Enterprise SG Certified Consultants</span>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              Disciplines
            </h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#solutions-section" className="hover:text-white transition-colors">Branding Strategy</a></li>
              <li><a href="#solutions-section" className="hover:text-white transition-colors">Business Design</a></li>
              <li><a href="#solutions-section" className="hover:text-white transition-colors">Experience Design</a></li>
              <li><a href="#solutions-section" className="hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#solutions-section" className="hover:text-white transition-colors">Packaging Design</a></li>
              <li><a href="#solutions-section" className="hover:text-white transition-colors">Sustainable Design</a></li>
              <li><a href="#solutions-section" className="hover:text-white transition-colors">Fractional CBO</a></li>
              <li><a href="#brandsbuilder-section" className="text-cyan-400 hover:text-cyan-300 transition-colors">BrandsBuilder.ai</a></li>
            </ul>
          </div>

          {/* Col 3: Regional Hubs */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              APAC Hubs
            </h5>
            <ul className="space-y-2 text-xs font-mono">
              <li className="text-neutral-300">Singapore (Global HQ)</li>
              <li>Jakarta, Indonesia</li>
              <li>Manila, Philippines</li>
              <li>Bangkok, Thailand</li>
              <li>Tokyo, Japan</li>
              <li>Zurich, Switzerland</li>
            </ul>
          </div>

          {/* Col 4: Platform */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              Interactive
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
                <a href="#top-marquee-ticker" className="hover:text-white transition-colors">
                  EDG Co-Funding Support
                </a>
              </li>
              <li>
                <a href="#client-media-ticker" className="hover:text-white transition-colors">
                  Media & Press
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            © {new Date().getFullYear()} Consulus Global Pte Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-neutral-400">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Advisory</span>
            <span>•</span>
            <span>SG Reg: 200405102W</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
