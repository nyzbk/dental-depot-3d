import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, Clock, Train, CheckCircle2 } from 'lucide-react';

interface MagneticCTAProps {
  onOpenBooking: () => void;
}

export const MagneticCTA: React.FC<MagneticCTAProps> = ({ onOpenBooking }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonInnerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const btn = buttonRef.current;
    const inner = buttonInnerRef.current;
    if (!btn || !inner) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      btn.style.transform = `translate3d(${dx * 0.32}px, ${dy * 0.45}px, 0)`;
      inner.style.transform = `translate3d(${dx * 0.15}px, ${dy * 0.20}px, 0)`;
    };

    const onMouseLeave = () => {
      btn.style.transform = 'translate3d(0px, 0px, 0px)';
      inner.style.transform = 'translate3d(0px, 0px, 0px)';
    };

    btn.addEventListener('mousemove', onMouseMove);
    btn.addEventListener('mouseleave', onMouseLeave);
    return () => {
      btn.removeEventListener('mousemove', onMouseMove);
      btn.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <section id="contact-reserve" className="relative py-28 md:py-40 bg-[#0A1813] text-[#F4EEE5] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C89D56]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Massive Fluid Headline (Meta AI Standard) */}
        <div className="text-center mb-16">
          <div className="text-[12px] font-mono tracking-[0.3em] uppercase text-[#C89D56] font-semibold mb-4">
            CONFIRM YOUR TICKET / 05
          </div>
          <h2 className="font-['Playfair_Display_SC',serif] text-[13vw] md:text-[8.5vw] leading-[0.88] tracking-tight text-[#F4EEE5]">
            ALL ABOARD.
          </h2>
          <p className="mt-6 text-[16px] md:text-[20px] text-[#9EABA2] max-w-2xl mx-auto font-light leading-relaxed font-['Work_Sans',sans-serif]">
            Join over 45,000 Oklahoma and regional families who have turned dental visits into a first-class tradition.
          </p>

          {/* Dual-Layer Magnetic Button */}
          <div className="mt-12 flex justify-center">
            <button
              ref={buttonRef}
              onClick={onOpenBooking}
              className="relative inline-flex items-center justify-center px-12 py-6 rounded-2xl bg-[#C89D56] text-[#0F241C] text-[16px] md:text-[18px] font-bold tracking-wider uppercase shadow-2xl shadow-[#C89D56]/25 transition-transform duration-100 ease-out cursor-pointer hover:bg-[#d8ae68]"
            >
              <span ref={buttonInnerRef} className="flex items-center gap-3 transition-transform duration-100 ease-out">
                <span>Book Station Visit</span>
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>

        {/* Deep Contact Intelligence Grid */}
        <div className="mt-20 pt-12 border-t border-[#C89D56]/20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Executive & Leadership */}
          <div className="p-6 rounded-xl bg-[#0F241C] border border-[#C89D56]/20">
            <div className="flex items-center gap-2 text-[#C89D56] text-[11px] font-mono tracking-widest uppercase mb-3">
              <Train className="w-4 h-4 text-[#C89D56]" />
              EXECUTIVE LEADERSHIP
            </div>
            <div className="text-[16px] font-semibold text-[#F4EEE5]">Dr. Glenn Ashmore, DDS</div>
            <div className="text-[12px] text-[#9EABA2] mb-3">Founder & Chief Executive Officer</div>
            <div className="text-[11px] font-mono text-[#C89D56]">Oklahoma City Corporate Depot</div>
          </div>

          {/* Phone Hotlines */}
          <div className="p-6 rounded-xl bg-[#0F241C] border border-[#C89D56]/20">
            <div className="flex items-center gap-2 text-[#C89D56] text-[11px] font-mono tracking-widest uppercase mb-3">
              <Phone className="w-4 h-4 text-[#C89D56]" />
              CENTRAL DISPATCH
            </div>
            <a href="tel:18009978457" className="block text-[16px] font-semibold text-[#F4EEE5] hover:text-[#C89D56] transition-colors">
              1-800-997-8457
            </a>
            <div className="text-[12px] text-[#9EABA2] mt-1">Toll-Free Regional Line</div>
            <a href="tel:4055255555" className="block text-[13px] font-mono text-[#C89D56] mt-2">
              OKC Direct: (405) 525-5555
            </a>
          </div>

          {/* Electronic Mail & Academy */}
          <div className="p-6 rounded-xl bg-[#0F241C] border border-[#C89D56]/20">
            <div className="flex items-center gap-2 text-[#C89D56] text-[11px] font-mono tracking-widest uppercase mb-3">
              <Mail className="w-4 h-4 text-[#C89D56]" />
              DIRECT CHANNELS
            </div>
            <a href="mailto:recruitment@dentaldepot.net" className="block text-[13px] font-mono text-[#F4EEE5] hover:text-[#C89D56] transition-colors">
              recruitment@dentaldepot.net
            </a>
            <a href="mailto:academy@dentaldepotacademy.com" className="block text-[13px] font-mono text-[#C89D56] mt-1 hover:underline">
              academy@dentaldepotacademy.com
            </a>
            <div className="text-[11px] text-[#9EABA2] mt-2">Direct doctor & residency inquiries</div>
          </div>

          {/* Historic Flagship Depot */}
          <div className="p-6 rounded-xl bg-[#0F241C] border border-[#C89D56]/20">
            <div className="flex items-center gap-2 text-[#C89D56] text-[11px] font-mono tracking-widest uppercase mb-3">
              <MapPin className="w-4 h-4 text-[#C89D56]" />
              FLAGSHIP DEPOT
            </div>
            <div className="text-[14px] text-[#F4EEE5]">3004 NW 23rd Street</div>
            <div className="text-[13px] text-[#9EABA2]">Oklahoma City, OK 73107</div>
            <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-[#C89D56]">
              <Clock className="w-3.5 h-3.5" />
              <span>Mon-Fri 7am-6pm • Sat 8am-2pm</span>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 text-[12px] font-mono text-[#9EABA2] border-t border-[#C89D56]/10 pt-8">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              All Major Insurances Accepted
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              SoonerCare / Medicaid Welcome
            </span>
          </div>
          <div>© {new Date().getFullYear()} Dental Depot®. All Rights Reserved.</div>
        </div>
      </div>
    </section>
  );
};
