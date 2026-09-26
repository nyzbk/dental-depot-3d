import React from 'react';
import { Train, Heart, Shield, Clock, ArrowRight, Award } from 'lucide-react';

interface ExperienceProps {
  onOpenBooking: () => void;
}

export const TrainDepotExperienceSection: React.FC<ExperienceProps> = ({ onOpenBooking }) => {
  return (
    <section id="depot-kids" className="relative py-24 bg-depot-900 border-t border-brass-mid/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-depot-950 border border-brass-mid/30 text-brass-light font-sans text-xs tracking-widest uppercase">
              <Train className="w-3.5 h-3.5 text-mint-400" />
              <span>The Historic Victorian Atmosphere</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Why Kids & Families Truly Love Coming Here.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              When founder Dr. Glenn Ashmore built the first Dental Depot, he believed healthcare should be comforting and joyful. He incorporated his lifelong passion for vintage model railroading into the architecture. Today, every single one of our 25+ clinics features an authentic G-scale model train that circles overhead through the operatory rooms.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-depot-950/80 border border-brass-mid/20 space-y-1.5">
                <Heart className="w-5 h-5 text-rose-400" />
                <h4 className="font-serif font-bold text-white text-sm">Zero Dental Anxiety</h4>
                <p className="text-xs text-slate-400">Children watch the trains chugging past overhead instead of focusing on instruments.</p>
              </div>

              <div className="p-4 bg-depot-950/80 border border-brass-mid/20 space-y-1.5">
                <Award className="w-5 h-5 text-brass-light" />
                <h4 className="font-serif font-bold text-white text-sm">Official Conductor Badges</h4>
                <p className="text-xs text-slate-400">Every young patient receives an authentic conductor badge and prizes after every checkup.</p>
              </div>

              <div className="p-4 bg-depot-950/80 border border-brass-mid/20 space-y-1.5">
                <Clock className="w-5 h-5 text-mint-400" />
                <h4 className="font-serif font-bold text-white text-sm">Parent Relaxation Lounges</h4>
                <p className="text-xs text-slate-400">Complimentary artisan coffee, quiet WiFi lounges, and warm Victorian depot decor.</p>
              </div>

              <div className="p-4 bg-depot-950/80 border border-brass-mid/20 space-y-1.5">
                <Shield className="w-5 h-5 text-emerald-400" />
                <h4 className="font-serif font-bold text-white text-sm">Same-Day Walk-In Relief</h4>
                <p className="text-xs text-slate-400">Tooth pain won’t wait. We accept emergency dental walk-ins at all 25+ stations.</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 bg-gradient-to-r from-mint-500 to-mint-600 hover:from-mint-400 hover:to-mint-500 text-depot-950 font-sans text-xs uppercase tracking-widest font-bold border border-mint-400 transition-all shadow-xl hover:shadow-depot-glow flex items-center gap-2"
              >
                <span>Book Your Family Visit Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image Feature (5 cols) */}
          <div className="lg:col-span-5 relative aspect-[4/5] overflow-hidden border border-brass-mid/30 shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
              alt="Happy child with gentle dentist at Dental Depot"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-depot-950 via-transparent to-black/20" />
            
            <div className="absolute bottom-6 left-6 right-6 bg-depot-950/95 border border-brass-mid/30 p-4">
              <span className="text-[10px] font-mono tracking-widest text-brass-light uppercase block">
                The Patient Promise
              </span>
              <p className="text-xs font-serif font-bold text-white mt-1">
                "We treat every family with the warmth, dignity, and gentle kindness we would want for our own children."
              </p>
              <span className="text-[10px] text-mint-400 block pt-1 font-mono">
                — Dr. Glenn Ashmore, Founder
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
