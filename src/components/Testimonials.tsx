import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  Building2,
  CheckCircle2,
  Pause,
  Play
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/agencyData';

interface TestimonialsProps {
  onStartProject?: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onStartProject }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const total = TESTIMONIALS_DATA.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-play effect
  useEffect(() => {
    if (isPlaying && !isHovered) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying, isHovered, nextSlide]);

  const currentItem = TESTIMONIALS_DATA[currentIndex];

  return (
    <section
      id="testimonials-section"
      aria-label="Client Success Stories & Testimonials"
      className="relative z-10 w-full bg-[#0a0a0c] border-b border-white/10 py-16 sm:py-24 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>// VERIFIED BID OUTCOMES & TESTIMONIALS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Trusted by Managing Directors & Bid Leaders
            </h2>
            <p className="text-sm text-neutral-400 mt-2 max-w-xl font-light">
              Hear directly from SME directors, commercial leads, and framework contractors who turned complex public procurement into secured recurring revenue.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            {/* Play / Pause indicator */}
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause carousel auto-play' : 'Resume carousel auto-play'}
              className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              title={isPlaying ? 'Pause auto-play' : 'Resume auto-play'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            {/* Prev Button */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Showcase Card */}
        <div className="relative rounded-3xl bg-white/[0.02] border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-sm overflow-hidden">
          {/* Subtle Top Indicator / Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/[0.06]">
            <div
              key={currentIndex}
              className={`h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all ${
                isPlaying && !isHovered ? 'animate-progress' : 'w-full opacity-60'
              }`}
              style={{
                width: isPlaying && !isHovered ? undefined : `${((currentIndex + 1) / total) * 100}%`
              }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Quote Side (Left) */}
            <div className="lg:col-span-8 space-y-6">
              {/* Star Rating & Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(currentItem.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  {currentItem.metricBadge}
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {currentItem.sector}
                </span>
              </div>

              {/* Quote Body with prominent quotation symbol */}
              <div className="relative">
                <Quote className="absolute -top-3 -left-3 sm:-left-4 w-10 h-10 text-white/[0.07] -z-0 pointer-events-none" />
                <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-neutral-100 leading-relaxed tracking-tight relative z-10">
                  "{currentItem.quote}"
                </blockquote>
              </div>

              {/* Author & Client Metadata */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-base font-bold text-white">
                    {currentItem.author}
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-400">
                    {currentItem.role} • <span className="text-neutral-300 font-medium">{currentItem.company}</span>
                  </div>
                </div>

                <div className="sm:text-right">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                    Contract / Framework Won
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-cyan-300 font-mono mt-0.5">
                    {currentItem.contractWon}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats / Visual Badge (Right) */}
            <div className="lg:col-span-4 flex flex-col justify-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-400">Verified Client</div>
                  <div className="text-sm font-semibold text-white truncate max-w-[200px]">
                    {currentItem.company}
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/[0.06] text-xs">
                <div className="flex items-center justify-between text-neutral-400">
                  <span>Procurement Type:</span>
                  <span className="text-neutral-200 font-medium">{currentItem.sector}</span>
                </div>
                <div className="flex items-center justify-between text-neutral-400">
                  <span>Key Result:</span>
                  <span className="text-emerald-400 font-semibold">{currentItem.metricBadge}</span>
                </div>
                <div className="flex items-center justify-between text-neutral-400">
                  <span>Audit Verdict:</span>
                  <span className="text-cyan-300 font-medium">100% Compliant</span>
                </div>
              </div>

              {onStartProject && (
                <button
                  type="button"
                  onClick={onStartProject}
                  className="w-full mt-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-white text-black hover:bg-neutral-200 transition-colors cursor-pointer text-center"
                >
                  Win Similar Contracts
                </button>
              )}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1} from ${item.author}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-8 bg-cyan-400'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <div className="text-xs font-mono text-neutral-400">
              <span className="text-white font-semibold">0{currentIndex + 1}</span>
              <span className="text-neutral-600"> / </span>
              <span>0{total}</span>
            </div>
          </div>
        </div>

        {/* Mini Preview Strip of other clients below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-4">
          {TESTIMONIALS_DATA.map((item, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white/[0.06] border-cyan-500/40 shadow-lg'
                    : 'bg-white/[0.01] border-white/[0.05] hover:border-white/15 hover:bg-white/[0.03]'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                  <span className={isActive ? 'text-cyan-300 font-semibold' : 'text-neutral-400'}>
                    0{idx + 1}
                  </span>
                  <span className="text-neutral-400 truncate max-w-[100px]">{item.metricBadge}</span>
                </div>
                <div className="text-xs font-semibold text-neutral-200 truncate">
                  {item.company}
                </div>
                <div className="text-[11px] text-neutral-400 truncate">
                  {item.author}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
