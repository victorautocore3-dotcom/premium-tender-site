import React, { useState } from 'react';
import { Search, Globe, ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  onStartProject: () => void;
  onOpenSearch: () => void;
  onToggleMore: () => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onStartProject,
  onOpenSearch,
  onToggleMore,
}) => {
  const [currentLang, setCurrentLang] = useState<'EN' | 'ID' | '繁體' | 'JP'>('EN');
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages: Array<'EN' | 'ID' | '繁體' | 'JP'> = ['EN', 'ID', '繁體', 'JP'];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-agency-header"
      className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0a0a0a]/80 border-b border-white/[0.08] transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Left: Brand Identity */}
        <a
          href="#"
          id="brand-logo-link"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-950 border border-white/15 flex items-center justify-center shadow-lg group-hover:border-cyan-400/40 transition-colors">
            {/* Minimalist modern C monogram with chromatic dot */}
            <span className="font-serif-luxury font-bold text-2xl text-white tracking-tight leading-none">
              C
            </span>
            <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-cyan-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-widest uppercase text-white leading-none">
              Consulus
            </span>
            <span className="text-[10px] tracking-wider uppercase text-neutral-400 font-mono mt-1">
              Global Brand & Business
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Pill */}
        <nav
          id="center-nav-pill"
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/[0.12] rounded-full p-1.5 shadow-inner backdrop-blur-md"
        >
          <button
            id="nav-works"
            onClick={() => scrollToSection('works-section')}
            className="px-4 py-1.5 rounded-full text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
          >
            Works
          </button>
          <button
            id="nav-solutions"
            onClick={() => scrollToSection('solutions-section')}
            className="px-4 py-1.5 rounded-full text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
          >
            Solutions
          </button>
          <button
            id="nav-about"
            onClick={() => scrollToSection('about-stats-section')}
            className="px-4 py-1.5 rounded-full text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
          >
            About
          </button>
          <button
            id="nav-brandsbuilder"
            onClick={() => scrollToSection('brandsbuilder-section')}
            className="group flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium text-neutral-200 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span>BrandsBuilder.ai</span>
            <span className="text-[9px] px-1.5 py-0.2 bg-cyan-400/20 text-cyan-300 rounded-full font-mono border border-cyan-400/30">
              NEW
            </span>
          </button>
          <button
            id="nav-more"
            onClick={onToggleMore}
            className="px-4 py-1.5 rounded-full text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
          >
            MORE
          </button>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Search Icon */}
          <button
            id="header-search-btn"
            onClick={onOpenSearch}
            aria-label="Search site"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-neutral-300 hover:text-white transition-all cursor-pointer"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Language Switcher */}
          <div className="relative">
            <button
              id="header-lang-switcher"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-neutral-300 hover:text-white transition-all cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-neutral-400" />
              <span>{currentLang}</span>
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-28 bg-[#141416] border border-white/15 rounded-2xl p-1.5 shadow-2xl backdrop-blur-xl z-50">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setCurrentLang(lang);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs rounded-xl transition-colors cursor-pointer ${
                      currentLang === lang
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                        : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {lang === 'EN' && 'English'}
                    {lang === 'ID' && 'Indonesia'}
                    {lang === '繁體' && '繁體中文'}
                    {lang === 'JP' && '日本語'}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA Pill Button */}
          <button
            id="header-start-project-cta"
            onClick={onStartProject}
            className="group hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-gradient-to-r from-neutral-100 to-neutral-200 text-neutral-950 hover:from-white hover:to-neutral-100 transition-all duration-200 shadow-md hover:shadow-cyan-500/10 cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="header-mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center bg-white/[0.04] border border-white/10 text-neutral-300 hover:text-white"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0c0c0e]/95 backdrop-blur-2xl px-6 py-6 space-y-4">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => scrollToSection('works-section')}
              className="text-left px-4 py-3 rounded-xl text-base font-medium text-neutral-200 hover:bg-white/5"
            >
              Works
            </button>
            <button
              onClick={() => scrollToSection('solutions-section')}
              className="text-left px-4 py-3 rounded-xl text-base font-medium text-neutral-200 hover:bg-white/5"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('about-stats-section')}
              className="text-left px-4 py-3 rounded-xl text-base font-medium text-neutral-200 hover:bg-white/5"
            >
              About Agency
            </button>
            <button
              onClick={() => scrollToSection('brandsbuilder-section')}
              className="text-left px-4 py-3 rounded-xl text-base font-medium text-cyan-300 hover:bg-cyan-500/10 flex items-center justify-between"
            >
              <span>BrandsBuilder.ai</span>
              <span className="text-xs bg-cyan-400/20 px-2 py-0.5 rounded-full font-mono">NEW</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onToggleMore();
              }}
              className="text-left px-4 py-3 rounded-xl text-base font-medium text-neutral-300 hover:bg-white/5"
            >
              MORE Insights & Locations
            </button>
          </div>

          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full py-3 rounded-full text-sm font-semibold bg-white text-black flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
