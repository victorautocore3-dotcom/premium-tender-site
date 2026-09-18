import React from 'react';
import { X, ArrowUpRight, CheckCircle2, Calendar, User, Tag } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (title: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onInquire
}) => {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#101013] border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-auto text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101013] via-[#101013]/40 to-transparent" />

          {/* Floating Pill on top of Image */}
          <div className="absolute bottom-6 left-6 sm:left-8 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-white backdrop-blur-md border border-white/20">
                {project.category}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
                {project.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 md:p-10 space-y-8">
          {/* Metadata bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs font-mono">
            <div>
              <span className="text-neutral-500 block">CLIENT</span>
              <span className="text-white font-medium">{project.client}</span>
            </div>
            <div>
              <span className="text-neutral-500 block">YEAR</span>
              <span className="text-white font-medium">{project.year}</span>
            </div>
            <div>
              <span className="text-neutral-500 block">DISCIPLINE</span>
              <span className="text-cyan-300 font-medium">{project.category}</span>
            </div>
            <div>
              <span className="text-neutral-500 block">LOCATION</span>
              <span className="text-white font-medium">Pan-Asian</span>
            </div>
          </div>

          {/* Narrative */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white tracking-tight">
              Strategic Transformation Narrative
            </h4>
            <p className="text-base text-neutral-300 leading-relaxed font-light">
              {project.description}
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              Consulus engaged multi-disciplinary stakeholders across executive leadership,
              customer touchpoints, and regional operational teams to re-engineer core brand architecture,
              unlocking scalable commercial value while honoring institutional heritage.
            </p>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              TAGS & CAPABILITIES
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono text-neutral-400">
              CASE STUDY DOSSIER AVAILABLE UPON REQUEST
            </span>
            <button
              onClick={() => {
                onClose();
                onInquire(project.category);
              }}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white text-black hover:bg-neutral-200 transition-all cursor-pointer shadow-lg"
            >
              <span>Inquire for Similar Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
