import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, CheckCircle2, ChevronDown, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/agencyData';
import { ServiceItem } from '../types';

interface ServiceAccordionProps {
  onSelectService?: (service: ServiceItem) => void;
  onStartProjectForService?: (serviceTitle: string) => void;
}

export const ServiceAccordion: React.FC<ServiceAccordionProps> = ({
  onSelectService,
  onStartProjectForService
}) => {
  // Only one item open at a time; start with 'tender-writing' open as default highlight
  const [openServiceId, setOpenServiceId] = useState<string | null>('tender-writing');

  const toggleService = (id: string) => {
    setOpenServiceId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="solutions-section"
      className="relative z-10 py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              // SPECIALIST BID DISCIPLINES
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our <span className="font-serif-luxury italic font-normal text-amber-200">Services</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl font-light">
            Four dedicated tender writing and bid management services designed to help SMEs qualify,
            craft, present, and win high-margin public and private sector contracts.
          </p>
        </div>

        <div className="text-right hidden sm:block">
          <span className="text-xs font-mono text-neutral-400">
            CLICK ROW TO EXPAND SCOPE MATRIX
          </span>
        </div>
      </div>

      {/* Full-width Stacked Vertical Accordion */}
      <div className="space-y-3">
        {SERVICES_DATA.map((service) => {
          const isOpen = openServiceId === service.id;

          return (
            <div
              key={service.id}
              className="rounded-2xl overflow-hidden border transition-all duration-300 shadow-lg"
              style={{
                borderColor: isOpen ? `${service.colorHex}99` : 'rgba(255, 255, 255, 0.08)',
                backgroundColor: '#0c0c0e'
              }}
            >
              {/* Accordion Row Header */}
              <button
                id={`accordion-header-${service.id}`}
                onClick={() => toggleService(service.id)}
                className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: isOpen ? `${service.colorHex}25` : 'rgba(255, 255, 255, 0.02)'
                }}
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-4 sm:gap-8 min-w-0">
                  {/* Category Number */}
                  <span
                    className="font-mono text-xs sm:text-sm font-semibold tracking-wider shrink-0 transition-colors"
                    style={{ color: isOpen ? '#ffffff' : '#71717a' }}
                  >
                    {service.categoryNumber}
                  </span>

                  {/* Title & Distinct Color Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 truncate">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                      {service.title}
                    </h3>
                    <span
                      className="inline-block w-fit text-[11px] font-mono px-2.5 py-0.5 rounded-full border text-white/90"
                      style={{
                        backgroundColor: `${service.colorHex}45`,
                        borderColor: `${service.colorHex}80`
                      }}
                    >
                      {service.accentText}
                    </span>
                  </div>
                </div>

                {/* Right side: Tagline (desktop) & Arrow indicator */}
                <div className="flex items-center gap-4 shrink-0">
                  <span className="hidden md:inline-block text-xs font-mono text-neutral-400 tracking-wide max-w-[280px] text-right truncate">
                    {service.tagline}
                  </span>

                  {/* Icon indicator */}
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300"
                    style={{
                      backgroundColor: isOpen ? service.colorHex : 'rgba(255, 255, 255, 0.05)',
                      borderColor: isOpen ? service.colorHex : 'rgba(255, 255, 255, 0.15)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  >
                    <ChevronDown className="w-4 h-4 text-white" />
                  </div>
                </div>
              </button>

              {/* Accordion Row Expanded Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`accordion-content-${service.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    {/* Inner 2-column layout as requested */}
                    <div
                      className="p-6 sm:p-8 md:p-10 border-t grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                      style={{
                        borderColor: `${service.colorHex}40`,
                        background: `linear-gradient(180deg, ${service.colorHex}15 0%, rgba(10, 10, 10, 0.95) 100%)`
                      }}
                    >
                      {/* Left Column: Description, deliverables & "Learn More ↗" button */}
                      <div className="lg:col-span-6 space-y-6">
                        <div className="space-y-3">
                          <span className="text-xs font-mono tracking-wider uppercase text-neutral-400">
                            PRACTICE OVERVIEW
                          </span>
                          <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-light">
                            {service.description}
                          </p>
                        </div>

                        {/* Deliverables / Key Highlights */}
                        <div className="space-y-2.5 pt-2">
                          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-medium">
                            CORE DELIVERABLES & ARTIFACTS
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {service.deliverables.map((item, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 text-xs text-neutral-300"
                              >
                                <CheckCircle2
                                  className="w-3.5 h-3.5 mt-0.5 shrink-0"
                                  style={{ color: service.colorHex }}
                                />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* "Learn More ↗" Button */}
                        <div className="pt-4 flex flex-wrap items-center gap-3">
                          <button
                            id={`learn-more-${service.id}`}
                            onClick={() => {
                              if (onStartProjectForService) {
                                onStartProjectForService(service.title);
                              } else if (onSelectService) {
                                onSelectService(service);
                              }
                            }}
                            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all shadow-md cursor-pointer hover:brightness-110"
                            style={{
                              backgroundColor: service.colorHex
                            }}
                          >
                            <span>Learn More</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </button>

                          <button
                            onClick={() => {
                              if (onStartProjectForService) {
                                onStartProjectForService(service.title);
                              }
                            }}
                            className="px-4 py-3 rounded-full text-xs font-mono text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
                          >
                            Inquire for {service.title}
                          </button>
                        </div>
                      </div>

                      {/* Right Column: Relevant Image / Mockup */}
                      <div className="lg:col-span-6">
                        <div className="relative rounded-2xl overflow-hidden border border-white/15 aspect-[16/10] shadow-2xl group">
                          <img
                            src={service.image}
                            alt={`${service.title} mockup & case preview`}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover object-top filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                          {/* Image Caption overlay */}
                          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                            <span className="font-mono bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                              {service.title} Laboratory
                            </span>
                            <span className="text-[11px] font-mono text-neutral-300">
                              Tender Specialist Procurement Suite
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
