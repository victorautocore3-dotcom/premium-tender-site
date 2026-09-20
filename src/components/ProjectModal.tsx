import React, { useState } from 'react';
import { X, Check, ArrowUpRight, Sparkles, Building, Mail, User, Globe, Clock, FileText, Loader2 } from 'lucide-react';
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
    preselectedService ? [preselectedService] : ['Tender Writing']
  );
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [sector, setSector] = useState('UK Central Government & CCS');
  const [message, setMessage] = useState('');
  const [isUrgentDeadline, setIsUrgentDeadline] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const toggleService = (title: string) => {
    setSelectedServices((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('https://formspree.io/f/moevjenr', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setErrorMessage(data?.errors?.[0]?.message || 'Submission failed. Please try again.');
      }
    } catch {
      setErrorMessage('A network error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
              Tender Brief Received by Senior Bid Desk
            </h3>
            <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-medium">{contactName || 'Client Partner'}</span>. Our Principal Bid Writer will review your tender requirements {companyName ? `for ${companyName}` : ''} across <span className="text-cyan-300">{sector}</span> and respond within 24 hours with an initial compliance evaluation.
            </p>
            {isUrgentDeadline && (
              <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-xs text-rose-200 max-w-sm mx-auto font-mono flex items-center gap-2 justify-center">
                <Clock className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Urgent 14-day turnaround escalation triggered.</span>
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
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          <form
            action="https://formspree.io/f/moevjenr"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Hidden field capturing selected services */}
            <input type="hidden" name="services" value={selectedServices.join(', ')} />

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-mono mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CONFIDENTIAL TENDER BRIEF</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Submit A Tender Brief
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-light">
                Consult with our APMP-certified bid managers on upcoming public RFPs, government frameworks, or private contracts.
              </p>
            </div>

            {/* Service Selection Chips */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                Required Services
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
                  name="company"
                  required
                  placeholder="e.g. Apex Engineering Ltd"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-neutral-500" />
                  Your Name & Title
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Rachel Adams, Commercial Director"
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
                  name="email"
                  required
                  placeholder="r.adams@apexengineering.co.uk"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-neutral-500" />
                  Procurement Sector / Framework
                </label>
                <select
                  name="sector"
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1a1a1f] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  <option value="UK Central Government & CCS">Crown Commercial Service (CCS)</option>
                  <option value="NHS Trusts & Healthcare">NHS Trusts & Healthcare</option>
                  <option value="Local Authorities & Councils">Local Councils & Housing</option>
                  <option value="Commercial Construction & Infrastructure">Construction & Infrastructure</option>
                  <option value="Defence, Security & Blue Light">Defence & Security</option>
                  <option value="Private Commercial RFP">Private Sector Commercial RFP</option>
                </select>
              </div>
            </div>

            {/* Tender Scope / Message Textarea */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-neutral-500" />
                Tender Overview / Key Requirements
              </label>
              <textarea
                name="message"
                rows={3}
                placeholder="Briefly outline contract scope, estimated value, or submission deadline..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none placeholder-neutral-500"
              />
            </div>

            {/* Fast Turnaround Notice */}
            <label className="flex items-start gap-3 p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 cursor-pointer">
              <input
                type="checkbox"
                name="urgent_deadline"
                value="Yes - Urgent (<14 Days)"
                checked={isUrgentDeadline}
                onChange={(e) => setIsUrgentDeadline(e.target.checked)}
                className="mt-1 accent-cyan-400 rounded cursor-pointer"
              />
              <div className="text-xs text-neutral-200">
                <span className="font-semibold text-cyan-300">Urgent Tender Deadline (&lt;14 Days):</span> Flag this proposal for rapid response bid writer allocation and priority compliance matrix review.
              </div>
            </label>

            {/* Error banner if submission fails */}
            {errorMessage && (
              <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-xs text-rose-200 font-mono">
                {errorMessage}
              </div>
            )}

            {/* Submit CTA */}
            <div className="pt-2 flex items-center justify-between gap-4">
              <span className="text-[11px] font-mono text-neutral-500">
                Confidentiality & Non-Disclosure Protected
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white text-black hover:bg-neutral-200 transition-all cursor-pointer shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Tender Brief</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
