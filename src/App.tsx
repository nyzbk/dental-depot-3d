import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureWidget } from './components/SignatureWidget';
import { StationsNavigatorSection } from './components/StationsNavigatorSection';
import { ServicesSection } from './components/ServicesSection';
import { TrainDepotExperienceSection } from './components/TrainDepotExperienceSection';
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
    <div className="min-h-screen bg-[#0F241C] text-[#F4EEE5] flex flex-col font-['Work_Sans'] selection:bg-[#C89D56] selection:text-[#0F241C]">
      <Navbar onOpenBooking={handleOpenBooking} />
      
      <main className="flex-grow">
        <Hero onOpenBooking={() => handleOpenBooking()} totalFrames={60} />
        
        {/* Bespoke 25-Station Route Dispatcher Widget */}
        <SignatureWidget onOpenBooking={handleOpenBooking} />

        <StationsNavigatorSection onOpenBooking={handleOpenBooking} />
        <ServicesSection onOpenBooking={() => handleOpenBooking()} />
        <TrainDepotExperienceSection onOpenBooking={() => handleOpenBooking()} />
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
