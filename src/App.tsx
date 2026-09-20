import React, { useState, useEffect } from 'react';
import { ParticlePreloader } from './components/ParticlePreloader';
import { AmbientBackground } from './components/AmbientBackground';
import { TopTicker } from './components/TopTicker';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ClientTicker } from './components/ClientTicker';
import { WorksGrid } from './components/WorksGrid';
import { StatsCounter } from './components/StatsCounter';
import { Testimonials } from './components/Testimonials';
import { ServiceAccordion } from './components/ServiceAccordion';
import { BrandsBuilderSection } from './components/BrandsBuilderSection';
import { FloatingDock } from './components/FloatingDock';
import { MoreDrawer } from './components/MoreDrawer';
import { ProjectModal } from './components/ProjectModal';
import { SearchModal } from './components/SearchModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Footer } from './components/Footer';
import { ProjectItem } from './types';
import { SERVICES_DATA, FEATURED_WORKS } from './data/agencyData';

export default function App() {
  const [isPreloaderLoaded, setIsPreloaderLoaded] = useState(false);
  const [replayPreloaderKey, setReplayPreloaderKey] = useState(0);
  const [showPreloader, setShowPreloader] = useState(true);

  // Modal states
  const [isMoreDrawerOpen, setIsMoreDrawerOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedServiceForProject, setSelectedServiceForProject] = useState<string | undefined>(undefined);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [selectedProjectForDetail, setSelectedProjectForDetail] = useState<ProjectItem | null>(null);

  // Lock body scroll while preloader is active
  useEffect(() => {
    if (!isPreloaderLoaded && showPreloader) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPreloaderLoaded, showPreloader]);

  const handlePreloaderComplete = () => {
    setIsPreloaderLoaded(true);
  };

  const handleReplayPreloader = () => {
    setIsPreloaderLoaded(false);
    setShowPreloader(true);
    setReplayPreloaderKey((prev) => prev + 1);
  };

  const handleOpenStartProject = (serviceTitle?: string) => {
    setSelectedServiceForProject(serviceTitle);
    setIsProjectModalOpen(true);
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello Tender Specialist Team, I would like to discuss tender writing and bid management for an upcoming contract.'
    );
    window.open(`https://wa.me/442079460912?text=${text}`, '_blank');
  };

  const handleScrollToSolutions = () => {
    const el = document.getElementById('solutions-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 2. Canvas Particle Preloader Overlay */}
      {showPreloader && (
        <ParticlePreloader
          key={replayPreloaderKey}
          onLoaded={handlePreloaderComplete}
          onClose={() => {
            setIsPreloaderLoaded(true);
            setShowPreloader(false);
          }}
        />
      )}

      {/* 1. Ambient Background: chromatic ring/halo with blur-3xl and rotating gradient */}
      <AmbientBackground />

      {/* 3. Top Infinite Marquee Ticker */}
      <TopTicker onEDGClick={() => handleOpenStartProject('Tender Writing')} />

      {/* 3. Main Header */}
      <Header
        onStartProject={() => handleOpenStartProject()}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onToggleMore={() => setIsMoreDrawerOpen(true)}
      />

      <main>
        {/* 4. Hero Section: "Build A Bid That Wins." */}
        <HeroSection
          onLearnHow={handleScrollToSolutions}
          onStartProject={() => handleOpenStartProject()}
        />

        {/* 4. Client Ticker: Procurement Portals & Frameworks */}
        <ClientTicker />

        {/* 5. Interactive Case Studies Grid */}
        <WorksGrid
          onSelectProject={(project) => setSelectedProjectForDetail(project)}
        />

        {/* 5. Stats Counter: £5.3M+ Procured Tender Value, etc. */}
        <StatsCounter />

        {/* Client Testimonials & Success Quotes Horizontal Carousel */}
        <Testimonials
          onStartProject={() => handleOpenStartProject()}
        />

        {/* 6. Multi-Colored Service Accordion: Tender Writing, Bid Management, Pitch Deck Design, Procurement Strategy */}
        <ServiceAccordion
          onStartProjectForService={(title) => handleOpenStartProject(title)}
        />

        {/* Dedicated BidBuilder.ai Section */}
        <BrandsBuilderSection
          onExplore={() => handleOpenStartProject('Bid Management')}
        />
      </main>

      {/* Agency Footer */}
      <Footer
        onStartProject={() => handleOpenStartProject()}
        onOpenWhatsApp={handleOpenWhatsApp}
        onReplayPreloader={handleReplayPreloader}
      />

      {/* 3. Bottom Floating Dock: Ultra-glossy glassmorphic navigation pill */}
      <FloatingDock
        onToggleMore={() => setIsMoreDrawerOpen(true)}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* Modals and Drawers */}
      <MoreDrawer
        isOpen={isMoreDrawerOpen}
        onClose={() => setIsMoreDrawerOpen(false)}
        onReplayPreloader={handleReplayPreloader}
        onStartProject={() => handleOpenStartProject()}
      />

      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        preselectedService={selectedServiceForProject}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectService={(srvTitle) => {
          handleScrollToSolutions();
        }}
        onSelectProject={(projId) => {
          const found = FEATURED_WORKS.find((p) => p.id === projId);
          if (found) setSelectedProjectForDetail(found);
        }}
      />

      <ProjectDetailModal
        project={selectedProjectForDetail}
        onClose={() => setSelectedProjectForDetail(null)}
        onInquire={(category) => handleOpenStartProject(category)}
      />
    </div>
  );
}
