import React, { useState } from 'react';
import { ShieldCheck, Activity, Train, Sparkles, Clock, CheckCircle2, Ticket } from 'lucide-react';

interface InteractiveBentoProps {
  onOpenBooking: () => void;
}

export const InteractiveBento: React.FC<InteractiveBentoProps> = ({ onOpenBooking }) => {
  const [service, setService] = useState<'clean' | 'pediatric' | 'ortho' | 'implant'>('clean');
  const [comfort, setComfort] = useState<'standard' | 'warming' | 'nitrous'>('warming');
  const [sound, setSound] = useState<'train' | 'jazz' | 'silence'>('train');

  return (
    <section id="bento-capabilities" className="relative py-28 md:py-36 bg-[#0F241C] text-[#F4EEE5] overflow-hidden border-t border-[#C89D56]/15">
      {/* Ambient Radial Glow (Meta AI Standard) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#C89D56]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#162E25]/60 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-[11px] font-mono tracking-[0.25em] text-[#C89D56] uppercase mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C89D56]" />
              CENTRAL OPERATIONS / 03
            </div>
            <h2 className="font-['Playfair_Display_SC',serif] text-[40px] md:text-[56px] leading-[0.95] text-[#F4EEE5]">
              Comprehensive Family Dental Care.
            </h2>
          </div>
          <p className="text-[14px] md:text-[15px] text-[#9EABA2] max-w-md font-['Work_Sans',sans-serif] leading-relaxed">
            Engineered with strict surgical protocols, real-time computerized dispatch, and patient-first comfort simulations.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Live Interactive Boarding & Comfort Simulator (Col Span 2) */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl bg-[#132B22]/80 border border-[#C89D56]/30 p-8 flex flex-col justify-between backdrop-blur-md relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-[#C89D56]/20 pb-4 mb-6">
                <span className="text-[11px] font-mono text-[#C89D56] tracking-widest uppercase flex items-center gap-2">
                  <Ticket className="w-4 h-4 text-[#C89D56]" />
                  FAMILY DENTAL RESERVATION
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#E67E22]/20 text-[#E67E22] text-[10px] font-mono font-bold animate-pulse">
                  READY FOR DISPATCH
                </span>
              </div>

              <h3 className="font-['Playfair_Display_SC',serif] text-[24px] md:text-[28px] text-[#F4EEE5] mb-2">
                Simulate your depot experience.
              </h3>
              <p className="text-[13px] text-[#9EABA2] mb-6">
                Customize your treatment bay comfort parameters in real-time before arrival.
              </p>

              {/* Service Selection */}
              <div className="mb-4">
                <span className="text-[11px] font-mono text-[#9EABA2] block mb-2 uppercase">1. Selected Track / Care:</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['clean', 'pediatric', 'ortho', 'implant'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => setService(s)}
                      className={`px-3 py-2 rounded-lg text-[11px] font-mono uppercase transition-all ${
                        service === s
                          ? 'bg-[#C89D56] text-[#0F241C] font-bold shadow-md shadow-[#C89D56]/20'
                          : 'bg-[#0F241C]/80 text-[#F4EEE5] border border-[#C89D56]/20 hover:border-[#C89D56]/50'
                      }`}
                    >
                      {s === 'clean' ? 'Wellness' : s === 'pediatric' ? 'Pediatric' : s === 'ortho' ? 'Aligners' : 'Implants'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Comfort Selection */}
              <div className="mb-4">
                <span className="text-[11px] font-mono text-[#9EABA2] block mb-2 uppercase">2. Sensory Comfort Tier:</span>
                <div className="grid grid-cols-3 gap-2">
                  {(['standard', 'warming', 'nitrous'] as const).map((c) => (
                    <button
                      key={c}
                      onClick={() => setComfort(c)}
                      className={`px-3 py-2 rounded-lg text-[11px] font-mono uppercase transition-all ${
                        comfort === c
                          ? 'bg-[#C89D56] text-[#0F241C] font-bold shadow-md shadow-[#C89D56]/20'
                          : 'bg-[#0F241C]/80 text-[#F4EEE5] border border-[#C89D56]/20 hover:border-[#C89D56]/50'
                      }`}
                    >
                      {c === 'standard' ? 'Standard Velvet' : c === 'warming' ? 'Warming Blanket' : 'Gentle Nitrous'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Audio Selection */}
              <div>
                <span className="text-[11px] font-mono text-[#9EABA2] block mb-2 uppercase">3. Audio Soundtrack:</span>
                <div className="grid grid-cols-3 gap-2">
                  {(['train', 'jazz', 'silence'] as const).map((snd) => (
                    <button
                      key={snd}
                      onClick={() => setSound(snd)}
                      className={`px-3 py-2 rounded-lg text-[11px] font-mono uppercase transition-all ${
                        sound === snd
                          ? 'bg-[#C89D56] text-[#0F241C] font-bold shadow-md shadow-[#C89D56]/20'
                          : 'bg-[#0F241C]/80 text-[#F4EEE5] border border-[#C89D56]/20 hover:border-[#C89D56]/50'
                      }`}
                    >
                      {snd === 'train' ? 'Train Ambience' : snd === 'jazz' ? 'Acoustic Jazz' : 'Pure Silence'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-[#C89D56]/20 flex items-center justify-between">
              <div className="text-[11px] font-mono text-[#C89D56]">
                ESTIMATED CHECK-IN DURATION: 3.5 MINUTES
              </div>
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 rounded-lg bg-[#C89D56] text-[#0F241C] font-mono text-[11px] font-bold uppercase hover:bg-[#d8ae68] transition-colors"
              >
                Issue Boarding Pass
              </button>
            </div>
          </div>

          {/* Card 2: 99.8% On-Time Metric */}
          <div className="rounded-2xl bg-[#132B22]/80 border border-[#C89D56]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#C89D56] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Clock className="w-4 h-4 text-[#C89D56]" />
                SCHEDULE RELIABILITY
              </div>
              <div className="font-['Playfair_Display_SC',serif] text-[54px] font-bold text-[#F4EEE5] leading-none mb-2">
                99.8%
              </div>
              <div className="text-[13px] text-[#C89D56] font-medium mb-3">
                On-Time Appointment Departures
              </div>
              <p className="text-[13px] text-[#9EABA2] font-['Work_Sans',sans-serif] leading-relaxed">
                We respect your busy calendar. Our synchronized 32-operatory dispatch ensures you are seated on time, every single visit.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#C89D56]/15 flex items-center gap-2 text-[11px] font-mono text-[#9EABA2]">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Board-certified clinical care
            </div>
          </div>

          {/* Card 3: 100% Autoclave Class B Sterilization */}
          <div className="rounded-2xl bg-[#132B22]/80 border border-[#C89D56]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#C89D56] text-[11px] font-mono tracking-widest uppercase mb-4">
                <ShieldCheck className="w-4 h-4 text-[#C89D56]" />
                SURGICAL BIO-SAFETY
              </div>
              <div className="font-['Playfair_Display_SC',serif] text-[54px] font-bold text-[#F4EEE5] leading-none mb-2">
                100%
              </div>
              <div className="text-[13px] text-[#C89D56] font-medium mb-3">
                Hospital-Grade Autoclave Sterilization
              </div>
              <p className="text-[13px] text-[#9EABA2] font-['Work_Sans',sans-serif] leading-relaxed">
                Every single instrument is sealed, steam-sterilized at 273°F under vacuum pressure, and barcoded for traceability.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#C89D56]/15 flex items-center gap-2 text-[11px] font-mono text-[#9EABA2]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              OSHA & CDC Gold Certified
            </div>
          </div>

          {/* Card 4: 25+ Regional Stations Across 5 States */}
          <div className="md:col-span-2 rounded-2xl bg-[#132B22]/80 border border-[#C89D56]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#C89D56] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Train className="w-4 h-4 text-[#C89D56]" />
                EXPANDING RAILWAY NETWORK
              </div>
              <div className="font-['Playfair_Display_SC',serif] text-[36px] md:text-[44px] text-[#F4EEE5] leading-tight mb-2">
                25+ Stations. 5 States. One Standard.
              </div>
              <p className="text-[14px] text-[#9EABA2] font-['Work_Sans',sans-serif] leading-relaxed mb-6">
                From Oklahoma City, Tulsa, and Lawton to Dallas-Fort Worth, Phoenix, and Kansas City. One unified digital patient chart travels seamlessly across every station.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#C89D56]/15">
              <div>
                <div className="text-[20px] font-mono font-bold text-[#F4EEE5]">45,000+</div>
                <div className="text-[11px] font-mono text-[#9EABA2]">Happy Patients</div>
              </div>
              <div>
                <div className="text-[20px] font-mono font-bold text-[#F4EEE5]">70+</div>
                <div className="text-[11px] font-mono text-[#9EABA2]">Doctors & Specialists</div>
              </div>
              <div>
                <div className="text-[20px] font-mono font-bold text-[#F4EEE5]">Saturdays</div>
                <div className="text-[11px] font-mono text-[#9EABA2]">Open Every Weekend</div>
              </div>
              <div>
                <div className="text-[20px] font-mono font-bold text-[#F4EEE5]">Emergency</div>
                <div className="text-[11px] font-mono text-[#9EABA2]">Same-Day Relief</div>
              </div>
            </div>
          </div>

          {/* Card 5: In-House Dental Depot Academy */}
          <div className="md:col-span-2 rounded-2xl bg-[#132B22]/80 border border-[#C89D56]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#C89D56] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Activity className="w-4 h-4 text-[#C89D56]" />
                CONTINUOUS EDUCATION & ACADEMY
              </div>
              <div className="font-['Playfair_Display_SC',serif] text-[36px] md:text-[44px] text-[#F4EEE5] leading-tight mb-2">
                The Dental Depot Academy.
              </div>
              <p className="text-[14px] text-[#9EABA2] font-['Work_Sans',sans-serif] leading-relaxed mb-4">
                Our doctors and assistants train year-round in our accredited simulation labs on advanced clinical dentistry, CPR, sedation, and empathetic pediatric communication.
              </p>
            </div>
            <div className="pt-4 border-t border-[#C89D56]/15 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#C89D56]">academy@dentaldepotacademy.com</span>
              <span className="text-[11px] font-mono text-[#9EABA2]">Accredited Continuing Ed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
