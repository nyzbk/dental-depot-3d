import React from 'react';
import { Train, Sparkles, ShieldCheck, Heart, Award } from 'lucide-react';

export const KineticMarquee: React.FC = () => {
  const items = [
    { text: 'ESTABLISHED 1986', icon: Award },
    { text: '25+ REGIONAL STATIONS', icon: Train },
    { text: 'SATURDAY CLINICS OPEN', icon: Sparkles },
    { text: '100% STEAM STERILIZED', icon: ShieldCheck },
    { text: 'FEAR-FREE PEDIATRIC EXPRESS', icon: Heart },
    { text: 'ZERO-ANXIETY CONCOURSE', icon: Sparkles },
    { text: 'OKLAHOMA • TEXAS • ARIZONA • KANSAS • MISSOURI', icon: Train },
  ];

  return (
    <div className="relative py-8 bg-[#0D1F18] border-y border-[#C89D56]/25 overflow-hidden">
      {/* Subtle edge blur */}
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#0D1F18] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#0D1F18] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {Array.from({ length: 4 }).map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center gap-12 pr-12">
            {items.map((item, itemIdx) => {
              const Icon = item.icon;
              return (
                <div key={itemIdx} className="flex items-center gap-4 text-nowrap">
                  <Icon className="w-4 h-4 text-[#C89D56]" />
                  <span className="font-['Playfair_Display_SC',serif] text-[18px] md:text-[22px] tracking-wider text-[#F4EEE5]">
                    {item.text}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C89D56]/50 mx-2" />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
