import React from 'react';
import { SERVICES_DATA } from '../data/depotData';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  return (
    <section id="services" className="relative py-24 bg-depot-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-depot-900 border border-mint-500/30 text-mint-400 font-sans text-xs tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Clinical Care Under One Roof</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Gentle Family Care & Modern Orthodontics.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            From your toddler's first tooth checkup under the model train to full clear aligner smile makeovers and same-day dental crowns.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-depot-900/60 border border-brass-mid/20 hover:border-mint-400/60 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-brass-mid/10 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brass-light bg-depot-950 px-2.5 py-1 border border-brass-mid/20">
                    {service.category}
                  </span>
                  <span className="text-xs text-mint-400 font-semibold font-mono">
                    Oklahoma Standard
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-mint-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs font-serif italic text-brass-light">
                  "{service.tagline}"
                </p>

                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-2 pt-3 border-t border-brass-mid/10">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-mint-400 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 bg-depot-850 hover:bg-mint-500 hover:text-depot-950 text-white font-sans text-xs uppercase tracking-widest font-bold border border-brass-mid/30 hover:border-mint-400 transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Book Consultation for This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
