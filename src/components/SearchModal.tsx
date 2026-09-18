import React, { useState } from 'react';
import { Search, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { SERVICES_DATA, FEATURED_WORKS } from '../data/agencyData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceTitle: string) => void;
  onSelectProject: (projectId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
  onSelectProject
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredServices = SERVICES_DATA.filter(
    (s) =>
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.description.toLowerCase().includes(query.toLowerCase()) ||
      s.tagline.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = FEATURED_WORKS.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.client.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      id="site-search-modal"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-start justify-center pt-20 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#121215] border border-white/15 rounded-3xl p-6 shadow-2xl overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-white/10 pb-4">
          <Search className="w-5 h-5 text-neutral-400 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search solutions, works, disciplines, or EDG..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white text-lg placeholder-neutral-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded text-neutral-400 hover:text-white mr-2"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto mt-4 space-y-6 pr-2">
          {/* Services Section */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-400">
              Agency Disciplines ({filteredServices.length})
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {filteredServices.map((srv) => (
                <button
                  key={srv.id}
                  onClick={() => {
                    onClose();
                    onSelectService(srv.title);
                  }}
                  className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.08] border border-white/5 text-left flex items-center justify-between group transition-colors cursor-pointer"
                >
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-300">
                      {srv.title}
                    </div>
                    <div className="text-xs text-neutral-400 truncate max-w-[200px]">
                      {srv.tagline}
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>
          </div>

          {/* Featured Works Section */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-400">
              Selected Works ({filteredProjects.length})
            </span>
            <div className="space-y-2">
              {filteredProjects.map((proj) => (
                <button
                  key={proj.id}
                  onClick={() => {
                    onClose();
                    onSelectProject(proj.id);
                  }}
                  className="w-full p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.08] border border-white/5 text-left flex items-center justify-between group transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-cyan-300">
                        {proj.title}
                      </div>
                      <div className="text-xs text-neutral-400">
                        {proj.client} • {proj.category}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Shortcuts */}
          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-between text-xs text-cyan-200 font-mono">
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              BrandsBuilder.ai Predictive Engine
            </span>
            <span className="text-neutral-400">Instant Access</span>
          </div>
        </div>
      </div>
    </div>
  );
};
