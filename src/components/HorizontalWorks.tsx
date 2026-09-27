import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface CardItem {
  id: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  stats: string;
  features: string[];
  gradient: string;
}

const CARDS: CardItem[] = [
  {
    id: 'clocktower',
    category: 'FLAGSHIP ARCHITECTURE',
    title: 'The Victorian Clocktower Operatory',
    tagline: 'Where 19th-century craft meets surgical sub-millimeter precision.',
    description: 'Under timber trussed cathedral ceilings and towering clockwork bells, our master operatories pair warm mahogany ergonomics with silent German electric handpieces and digital intraoral cameras.',
    stats: '0.01mm Precision',
    features: ['Cathedral Acoustic Damping', 'Digital Intraoral Scanners', 'Overhead Streaming Screens'],
    gradient: 'from-[#1C1514] via-[#2A1E1A] to-[#0F241C]',
  },
  {
    id: 'pediatric-express',
    category: 'PEDIATRIC WONDER',
    title: 'The Pediatric Express Railway Car',
    tagline: 'Turning childhood dental fears into joyful train adventures.',
    description: 'Full-scale authentic Pullman-style railroad carriages retrofitted into whisper-quiet pediatric treatment rooms. Children earn conductor badges, pick prizes from the baggage depot, and love visiting.',
    stats: '100% Fear-Free',
    features: ['Conductor Badge Ceremonies', 'Noise-Canceling Train Audio', 'Gentle Fluoride Treatments'],
    gradient: 'from-[#2A1E1A] via-[#1A2621] to-[#0F241C]',
  },
  {
    id: 'orthodontic-concourse',
    category: 'SMILE RE-ALIGNMENT',
    title: 'The Orthodontic High-Speed Concourse',
    tagline: 'Clear aligners and modern mechanics delivered without wait times.',
    description: 'Dedicated orthodontic treatment bays powered by 3D optical impressions. Digital simulations reveal your exact post-treatment smile before the first aligner tray is ever thermoformed.',
    stats: '3D Realtime Scan',
    features: ['Invisalign® Preferred Providers', 'Digital Smile Previews', 'Same-Day Aligner Fitting'],
    gradient: 'from-[#1A2621] via-[#261613] to-[#0F241C]',
  },
  {
    id: 'surgical-suite',
    category: 'ADVANCED IMPLANTOLOGY',
    title: 'The Central Surgical Concourse',
    tagline: 'Computer-guided permanent implants and intravenous twilight sedation.',
    description: 'Equipped with medical-grade hospital sterilization protocols, 3D CBCT bone scanners, and board-certified sedation specialists for painless single-day extractions and dental implant bridges.',
    stats: '99.4% Success Rate',
    features: ['Full-Arch All-on-4 Solutions', 'Twilight Sedation Monitoring', 'Platelet-Rich Fibrin (PRF) Healing'],
    gradient: 'from-[#261613] via-[#1C1514] to-[#0F241C]',
  },
  {
    id: 'station-lounge',
    category: 'GUEST COMFORT',
    title: 'The Grand Central Waiting Lounge',
    tagline: 'The antidote to sterile fluorescent waiting rooms.',
    description: 'Complimentary barista espresso bars, polished brass luggage racks, antique telegraph props, and high-speed Wi-Fi. Every family member relaxes in plush leather Chesterfield seating.',
    stats: '< 4 Min Avg Wait',
    features: ['Barista Coffee Station', 'Chesterfield Leather Lounges', 'Private Family Enclaves'],
    gradient: 'from-[#1C1514] via-[#2A1E1A] to-[#0F241C]',
  },
];

interface HorizontalWorksProps {
  onOpenBooking: () => void;
}

export const HorizontalWorks: React.FC<HorizontalWorksProps> = ({ onOpenBooking }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Translate cards horizontally: 0% -> -80%
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-78%']);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#0A1813] text-[#F4EEE5]">
      {/* Sticky Window */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-[1600px] mx-auto w-full mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-mono tracking-[0.25em] text-[#C89D56] uppercase mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C89D56]" />
              THE DEPOT NETWORK / 02
            </div>
            <h2 className="font-['Playfair_Display_SC',serif] text-[36px] md:text-[56px] leading-[0.95] text-[#F4EEE5]">
              Architectural Operatories & Suites.
            </h2>
          </div>
          <p className="text-[14px] md:text-[15px] text-[#9EABA2] max-w-md font-['Work_Sans',sans-serif] leading-relaxed">
            Drag or scroll horizontally across our dedicated clinical bays, each custom designed around passenger comfort, gentle care, and precision medicine.
          </p>
        </div>

        {/* Horizontal Sliding Track */}
        <div className="relative w-full overflow-visible">
          <motion.div style={{ x }} className="flex gap-8 items-stretch will-change-transform">
            {CARDS.map((card, index) => (
              <div
                key={card.id}
                className="group relative w-[85vw] sm:w-[540px] md:w-[620px] flex-shrink-0 rounded-2xl bg-gradient-to-br from-[#132B22] to-[#0D1F18] border border-[#C89D56]/25 p-8 md:p-10 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-[#C89D56]/60 hover:shadow-[#C89D56]/10"
              >
                {/* Top Badge */}
                <div>
                  <div className="flex items-center justify-between border-b border-[#C89D56]/15 pb-4 mb-6">
                    <span className="text-[11px] font-mono tracking-widest text-[#C89D56] uppercase">
                      [{String(index + 1).padStart(2, '0')}] // {card.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#C89D56]/15 text-[#C89D56] text-[11px] font-mono font-medium">
                      {card.stats}
                    </span>
                  </div>

                  <h3 className="font-['Playfair_Display_SC',serif] text-[28px] md:text-[34px] leading-tight text-[#F4EEE5] mb-3">
                    {card.title}
                  </h3>

                  <p className="text-[15px] text-[#C89D56] font-medium mb-4 italic">
                    "{card.tagline}"
                  </p>

                  <p className="text-[14px] md:text-[15px] text-[#9EABA2] leading-relaxed mb-6 font-['Work_Sans',sans-serif]">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Feature Tags & Action */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {card.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-2.5 py-1 rounded-md bg-[#0F241C] border border-[#C89D56]/20 text-[11px] font-mono text-[#F4EEE5]/80"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3.5 rounded-xl bg-[#C89D56]/15 border border-[#C89D56]/40 text-[#C89D56] hover:bg-[#C89D56] hover:text-[#0F241C] text-[13px] font-medium uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-hover:border-[#C89D56]"
                  >
                    <span>Reserve Station Seat</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Progress Bar at Bottom of Sticky Frame */}
        <div className="max-w-[1600px] mx-auto w-full mt-8">
          <div className="w-full h-1 bg-[#132B22] rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
              className="h-full bg-[#C89D56]"
            />
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-[#9EABA2] mt-2">
            <span>TRAIN 01: CLOCKTOWER</span>
            <span>TRAIN 05: CENTRAL LOUNGE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
