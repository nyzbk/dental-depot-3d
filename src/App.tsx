import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HorizontalWorks } from './components/HorizontalWorks';
import { InteractiveBento } from './components/InteractiveBento';
import { KineticMarquee } from './components/KineticMarquee';
import { SignatureWidget } from './components/SignatureWidget';
import { StationsNavigatorSection } from './components/StationsNavigatorSection';
import { MagneticCTA } from './components/MagneticCTA';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import type { ClinicStation } from './data/depotData';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [preselectedStation, setPreselectedStation] = useState<ClinicStation | null>(null);

  const handleOpenBooking = (station?: ClinicStation) => {
    setPreselectedStation(station || null);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0F241C] text-[#F4EEE5] flex flex-col font-['Work_Sans',sans-serif] selection:bg-[#C89D56] selection:text-[#0F241C] overflow-x-clip">
      <Navbar onOpenBooking={handleOpenBooking} />
      
      <main className="flex-grow">
        {/* Section 1: Jack Roberts SOTA 240-Frame Canvas Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />
        
        {/* Section 2: Meta AI Pinned Horizontal Scroll Gallery (300vh) */}
        <HorizontalWorks onOpenBooking={() => handleOpenBooking()} />

        {/* Section 3: Interactive Bento Grid with Live Telemetry */}
        <InteractiveBento onOpenBooking={() => handleOpenBooking()} />

        {/* Section 4: Kinetic Marquee Ribbon */}
        <KineticMarquee />

        {/* Bespoke 25-Station Route Dispatcher Widget & Station Navigator */}
        <SignatureWidget onOpenBooking={handleOpenBooking} />
        <StationsNavigatorSection onOpenBooking={handleOpenBooking} />

        {/* Section 5: Premium Magnetic CTA with Multi-Contact Intelligence */}
        <MagneticCTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      <Footer />

      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedStation={preselectedStation}
      />
    </div>
  );
}

export default App;
