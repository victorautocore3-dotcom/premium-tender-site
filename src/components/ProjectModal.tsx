import React, { useState } from 'react';
import { X, Check, ArrowUpRight, Sparkles, Building, Mail, User, Globe } from 'lucide-react';
import { SERVICES_DATA } from '../data/agencyData';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  preselectedService
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(
    preselectedService ? [preselectedService] : ['Branding']
  );
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('Singapore');
  const [hasEDGInterest, setHasEDGInterest] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleService = (title: string) => {
    setSelectedServices((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      id="project-inquiry-modal"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#111114] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-3xl pointer-events-none" />

        {/* Modal Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Inquiry Dispatched to Senior Partners
            </h3>
            <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-medium">{contactName || 'Valued Partner'}</span>. Our Managing Director for {region} will review {companyName ? `for ${companyName}` : 'your strategic brief'} and contact you within 24 business hours.
            </p>
            {hasEDGInterest && (
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-200 max-w-sm mx-auto font-mono">
                ✦ Enterprise SG EDG Grant assessment dossier will be included.
              </div>
            )}
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Return to Studio
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-mono mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CONFIDENTIAL ENGAGEMENT BRIEF</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Start a Transformation Project
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-light">
                Consult with our senior strategy partners on brand positioning, business design, and regional expansion.
              </p>
            </div>

            {/* Service Selection Chips */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                Select Relevant Disciplines
              </label>
              <div className="flex flex-wrap gap-2">
                {SERVICES_DATA.map((srv) => {
                  const isSelected = selectedServices.includes(srv.title);
                  return (
                    <button
                      type="button"
                      key={srv.id}
                      onClick={() => toggleService(srv.title)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-white text-black border-white shadow-md font-semibold'
                          : 'bg-white/[0.04] text-neutral-300 hover:text-white border-white/10 hover:bg-white/[0.08]'
                      }`}
                    >
                      {srv.title}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-neutral-500" />
                  Company / Organization
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Holdings Pte Ltd"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-neutral-500" />
                  Your Name & Role
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Tan, CEO"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-neutral-500" />
                  Corporate Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-neutral-500" />
                  Primary Market Region
                </label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1a1a1f] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  <option value="Singapore">Singapore (Global HQ)</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Japan">Japan</option>
                  <option value="Other APAC / Global">Other APAC / Global</option>
                </select>
              </div>
            </div>

            {/* EDG Co-Funding Checkbox */}
            <label className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 cursor-pointer">
              <input
                type="checkbox"
                checked={hasEDGInterest}
                onChange={(e) => setHasEDGInterest(e.target.checked)}
                className="mt-1 accent-amber-400 rounded cursor-pointer"
              />
              <div className="text-xs text-neutral-200">
                <span className="font-semibold text-amber-300">Request Singapore EDG Grant Advisory:</span> Assess whether our enterprise qualifies for up to 50% Enterprise Singapore co-funding on this transformation project.
              </div>
            </label>

            {/* Submit CTA */}
            <div className="pt-2 flex items-center justify-between gap-4">
              <span className="text-[11px] font-mono text-neutral-500">
                NDA & Non-Disclosure Protected
              </span>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white text-black hover:bg-neutral-200 transition-all cursor-pointer shadow-xl"
              >
                <span>Submit Strategic Brief</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
