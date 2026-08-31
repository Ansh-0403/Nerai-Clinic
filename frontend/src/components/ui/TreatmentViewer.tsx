import React, { useEffect } from 'react';
import { X, ArrowRight, Check, Calendar } from 'lucide-react';
import type { Treatment } from '../../data/treatments';

interface TreatmentViewerProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBook: (treatmentTitle: string) => void;
}

export const TreatmentViewer: React.FC<TreatmentViewerProps> = ({ treatment, onClose, onBook }) => {
  useEffect(() => {
    if (treatment) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [treatment]);

  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-end bg-inverse-surface/40 backdrop-blur-sm p-0 md:p-4" data-lenis-prevent>
      {/* Backdrop click closer */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Drawer Container */}
      <div className="relative w-full max-w-[850px] h-full md:h-[95vh] bg-surface border-l border-outline-variant/60 shadow-2xl flex flex-col md:flex-row overflow-hidden z-10 animate-slide-in" data-lenis-prevent>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 bg-surface/90 border border-outline-variant/60 p-2 text-on-surface hover:text-primary transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Left Side: Editorial Image & Quick Tag (visible on desktop) */}
        <div className="relative w-full md:w-[380px] h-[280px] md:h-full bg-surface-container-highest flex-shrink-0 overflow-hidden border-r border-outline-variant/60">
          <img
            src={treatment.imageUrl}
            alt={treatment.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 pointer-events-none">
            <h3 className="font-serif text-2xl md:text-3xl text-surface-container-lowest leading-tight">
              {treatment.title}
            </h3>
          </div>
        </div>

        {/* Right Side: Clinical Details (Scrollable) */}
        <div className="flex-grow overflow-y-auto p-6 md:p-10 flex flex-col justify-between" data-lenis-prevent>
          <div className="space-y-8">
            {/* Description / What It Is */}
            <div>
              <span className="font-sans text-[10px] font-bold text-primary tracking-widest uppercase block mb-2">
                What It Is
              </span>
              <p className="font-sans text-sm md:text-base text-on-surface-variant font-light leading-relaxed">
                {treatment.whatItIs}
              </p>
            </div>

            {/* Clinical Benefits */}
            <div>
              <span className="font-sans text-[10px] font-bold text-primary tracking-widest uppercase block mb-3">
                Clinical Benefits
              </span>
              <ul className="space-y-3">
                {treatment.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full border border-primary/40 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                      <Check size={10} />
                    </div>
                    <span className="font-sans text-xs md:text-sm text-on-surface-variant font-light">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinical Procedure Block */}
            <div>
              <span className="font-sans text-[10px] font-bold text-primary tracking-widest uppercase block mb-4">
                Clinical Procedure
              </span>
              <div className="space-y-4 border-l border-outline-variant/60 pl-4 py-1">
                {treatment.procedure.map((step, idx) => {
                  const [title, desc] = step.split(':');
                  return (
                    <div key={idx} className="space-y-1 relative">
                      <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 bg-primary border border-surface" />
                      <h4 className="font-sans text-xs font-bold text-on-surface uppercase tracking-wider">
                        {title}
                      </h4>
                      {desc && (
                        <p className="font-sans text-xs text-on-surface-variant/90 font-light leading-relaxed">
                          {desc.trim()}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recovery Notes */}
            <div className="bg-surface-container-low border border-outline-variant/40 p-5">
              <span className="font-sans text-[10px] font-bold text-primary tracking-widest uppercase block mb-1">
                Recovery & Care Notes
              </span>
              <p className="font-sans text-xs text-on-surface-variant font-light leading-relaxed">
                {treatment.recovery}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-2 gap-4 border-t border-outline-variant/40 pt-8 mt-10">
            <button
              onClick={() => onBook(treatment.title)}
              className="w-full bg-tertiary text-on-tertiary border border-tertiary hover:bg-tertiary/90 py-3.5 font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar size={14} />
              Book Treatment
            </button>
            <a
              href={`https://wa.me/918200527699?text=Hello%20NERAI%20Studio%2C%20I%20would%20like%20to%20book%20an%20appointment%20for%20${encodeURIComponent(treatment.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border border-primary text-primary hover:bg-primary hover:text-on-primary py-3.5 font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 text-center flex items-center justify-center gap-1.5"
            >
              Direct WhatsApp
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
