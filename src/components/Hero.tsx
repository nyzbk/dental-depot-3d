import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, MapPin, ChevronDown, Heart, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  totalFrames?: number;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, totalFrames = 60 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(1);

  const [, setCurrentFrame] = useState<number>(1);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeChapter, setActiveChapter] = useState<string>('Victorian Train Depot Welcome & Anxiety-Free Environment');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const total = totalFrames;
    const imgs: HTMLImageElement[] = new Array(total);

    // 1. Immediately fetch Frame 1 (<100ms first paint)
    const firstImg = new Image();
    firstImg.src = `/frames/frame_0001.webp?v=fast-v2`;
    firstImg.onload = () => {
      imgs[0] = firstImg;
      setIsLoaded(true);
      renderFrame(1);

      // 2. Progressive non-blocking preload for frames 2..total in small smooth batches
      let nextIdx = 2;
      const loadNextBatch = () => {
        const batchSize = 6;
        for (let b = 0; b < batchSize && nextIdx <= total; b++, nextIdx++) {
          const idx = nextIdx;
          const img = new Image();
          const frameStr = String(idx).padStart(4, '0');
          img.src = `/frames/frame_${frameStr}.webp?v=fast-v2`;
          img.onload = () => {
            if (currentFrameRef.current === idx) {
              renderFrame(idx);
            }
          };
          imgs[idx - 1] = img;
        }
        if (nextIdx <= total) {
          setTimeout(loadNextBatch, 15);
        }
      };
      loadNextBatch();
    };
    firstImg.onerror = () => {
      setIsLoaded(true);
    };
    imgs[0] = firstImg;
    imagesRef.current = imgs;}, [totalFrames]);

  const renderFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let img = imagesRef.current[frameIndex - 1];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < totalFrames; offset++) {
        const prev = imagesRef.current[frameIndex - 1 - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          img = prev;
          break;
        }
        const next = imagesRef.current[frameIndex - 1 + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          img = next;
          break;
        }
      }
    }
    if (!img || !img.complete) return;

    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }

    const imgRatio = 1920 / 1080;
    const canvasRatio = width / height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawHeight = height;
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

    // Warm depot navy vignette
    const gradient = ctx.createRadialGradient(
      width / 2, height / 2, width * 0.25,
      width / 2, height / 2, Math.max(width, height) * 0.75
    );
    gradient.addColorStop(0, 'rgba(6, 19, 38, 0.15)');
    gradient.addColorStop(0.7, 'rgba(6, 19, 38, 0.45)');
    gradient.addColorStop(1, 'rgba(6, 19, 38, 0.88)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  };

  useEffect(() => {
    const handleResize = () => {
      renderFrame(currentFrameRef.current);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      const currentScroll = -rect.top;

      let progress = currentScroll / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);

      const frameNumber = Math.max(1, Math.min(totalFrames, Math.floor(progress * (totalFrames - 1)) + 1));
      currentFrameRef.current = frameNumber;
      setCurrentFrame(frameNumber);
      renderFrame(frameNumber);

      if (progress < 0.25) {
        setActiveChapter('Victorian Train Depot Welcome & Anxiety-Free Environment');
      } else if (progress < 0.50) {
        setActiveChapter('Gentle Compassionate Care for Children & Parents');
      } else if (progress < 0.75) {
        setActiveChapter('3D Digital Intraoral Scanning & Same-Day Restorations');
      } else {
        setActiveChapter('Radiant Confident Smiles Across 25+ Stations');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalFrames]);

  const patientSatisfaction = Math.round(97 + scrollProgress * 2.9);

  return (
    <section id="depot-tour" ref={containerRef} className="relative h-[450vh] bg-depot-950">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between p-4 sm:p-8 md:p-12">
        {/* Spatial Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Top Header Telemetry */}
        <div className="relative z-10 w-full flex items-center justify-between pt-16 sm:pt-20 text-[11px] font-mono tracking-widest text-slate-300">
          <div className="flex items-center gap-2 bg-depot-950/85 border border-brass-mid/30 px-3.5 py-1.5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-mint-400 animate-pulse" />
            <span className="text-white font-semibold uppercase">
              DENTAL DEPOT // OKLAHOMA CLINICAL NETWORK
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 bg-depot-950/85 border border-brass-mid/30 px-4 py-1.5 backdrop-blur-md">
            <span>NETWORK: <strong className="text-brass-light">25+ STATIONS</strong></span>
            <span>SATISFACTION: <strong className="text-white">{patientSatisfaction}% PATIENT TRUST</strong></span>
            <span>SAME-DAY RELIEF: {isLoaded ? <strong className="text-mint-400">WALK-INS WELCOME</strong> : <strong className="text-amber-400">CONNECTING STATIONS...</strong>}</span>
          </div>
        </div>

        {/* Center Spatial Narrative */}
        <div className="relative z-10 my-auto max-w-4xl space-y-6 pointer-events-none">
          <div className="space-y-4 pointer-events-auto">
            <div className="inline-flex items-center gap-2 bg-depot-900/80 border border-mint-500/50 px-3.5 py-1 text-mint-400 font-sans text-xs tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Great Smiles at Great Prices Since 1978</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] drop-shadow-2xl">
              Dentistry That Feels <br />
              <span className="italic font-normal bg-gradient-to-r from-mint-100 via-mint-400 to-brass-light bg-clip-text text-transparent">
                Like Arriving Home.
              </span>
            </h1>

            <p className="max-w-2xl text-sm sm:text-base text-slate-200 font-sans leading-relaxed drop-shadow">
              Step into Oklahoma’s beloved dental experience. Authentic Victorian train depot architecture, overhead model railways, gentle family dentistry, and cutting-edge 3D orthodontics across 25+ convenient stations.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2 pointer-events-auto">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 bg-gradient-to-r from-mint-500 to-mint-600 hover:from-mint-400 hover:to-mint-500 text-depot-950 font-sans text-xs uppercase tracking-widest font-bold border border-mint-400 transition-all duration-300 shadow-xl hover:shadow-depot-glow flex items-center gap-3"
            >
              <Heart className="w-4 h-4 text-depot-950" />
              <span>Book Appointment At Your Station</span>
            </button>

            <a
              href="#stations"
              className="px-6 py-4 bg-depot-950/80 hover:bg-depot-900 text-slate-200 hover:text-white font-sans text-xs uppercase tracking-widest font-medium border border-brass-mid/30 hover:border-brass-mid/60 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
            >
              <MapPin className="w-4 h-4 text-brass-light" />
              <span>Explore 25+ Stations</span>
            </a>
          </div>
        </div>

        {/* Bottom Scroll Chapter Progression & Specifications */}
        <div className="relative z-10 w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pb-4">
          {/* Active Spatial Chapter */}
          <div className="bg-depot-950/90 border border-brass-mid/25 p-4 max-w-md backdrop-blur-md space-y-1">
            <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-slate-400">
              <span>Depot Journey Phase</span>
              <span className="text-mint-400">{Math.round(scrollProgress * 100)}%</span>
            </div>
            <div className="text-xs sm:text-sm font-serif font-semibold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-mint-400 shrink-0" />
              <span>{activeChapter}</span>
            </div>
            <div className="w-full bg-depot-900 h-1 mt-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-mint-400 via-mint-500 to-brass-light h-full transition-all duration-200"
                style={{ width: `${Math.max(5, scrollProgress * 100)}%` }}
              />
            </div>
          </div>

          {/* Scroll Prompt */}
          <div className="hidden lg:flex items-center gap-3 text-[11px] font-mono tracking-widest uppercase text-slate-400 bg-depot-950/80 border border-brass-mid/20 px-4 py-2 backdrop-blur-sm">
            <span>Scroll To Explore Modern Operatory & Care</span>
            <ChevronDown className="w-4 h-4 text-mint-400 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
