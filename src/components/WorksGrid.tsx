import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { FEATURED_WORKS } from '../data/agencyData';
import { ProjectItem } from '../types';

interface WorksGridProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const WorksGrid: React.FC<WorksGridProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Tender Writing',
    'Bid Management',
    'Pitch Deck Design',
    'Procurement Strategy'
  ];

  const filteredWorks =
    activeCategory === 'All'
      ? FEATURED_WORKS
      : FEATURED_WORKS.filter((w) => w.category === activeCategory);

  return (
    <section
      id="works-section"
      className="relative z-10 py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              // PROVEN TRACK RECORD
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Case <span className="font-serif-luxury italic font-normal text-rose-200">Studies</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl font-light">
            Demonstrated success securing competitive awards, high-value public procurement frameworks,
            and private commercial contracts for growing small & medium enterprises.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-neutral-400 mr-2 font-mono">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-white text-black shadow-md shadow-white/10 font-semibold'
                  : 'bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-12 gap-6">
        {filteredWorks.map((work) => (
          <article
            key={work.id}
            onClick={() => onSelectProject(work)}
            className={`${work.span} group relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-neutral-900 transition-all duration-500 hover:border-white/30 hover:shadow-2xl hover:shadow-cyan-500/5`}
          >
            {/* Background Image with Zoom & Dark Gradient */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={work.image}
                alt={work.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-85 contrast-105"
              />
              {/* Luxury dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20" />
            </div>

            {/* Top Bar inside Card: Category Pill & Client Year */}
            <div className="relative z-10 p-6 sm:p-8 flex items-start justify-between">
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-black/60 text-white backdrop-blur-md border border-white/20 shadow-lg">
                {work.category}
              </span>

              {/* Diagonal Arrow Zoom Button */}
              <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110 shadow-xl">
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            {/* Bottom Content inside Card */}
            <div className="absolute bottom-0 inset-x-0 z-10 p-6 sm:p-8 flex flex-col justify-end">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                  <span>{work.client}</span>
                  <span>•</span>
                  <span>{work.year}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                  {work.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 line-clamp-2 font-light max-w-xl opacity-90 group-hover:opacity-100 transition-opacity">
                  {work.description}
                </p>

                {/* Tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Exploration Note */}
      <div className="mt-12 text-center">
        <p className="text-xs text-neutral-400 font-mono tracking-wider">
          SHOWCASING HIGHLIGHTS FROM £5.3M+ IN PROCURED CONTRACT VALUE • 100% COMPLIANT SUBMISSIONS
        </p>
      </div>
    </section>
  );
};
