import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Calendar, Menu, X, Train, Heart } from 'lucide-react';
import { STATIONS_DATA, type ClinicStation } from '../data/depotData';

interface NavbarProps {
  onOpenBooking: (station?: ClinicStation) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stationsDropdown, setStationsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-depot-950/95 backdrop-blur-md border-b border-brass-mid/20 shadow-2xl py-3.5'
            : 'bg-gradient-to-b from-depot-950/90 via-depot-950/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Depot Train Crest */}
            <a href="#" className="flex items-center gap-3 group text-left">
              <div className="w-10 h-10 rounded-full border border-brass-mid/50 bg-depot-900 flex items-center justify-center group-hover:border-mint-400 transition-colors duration-300 shadow-md">
                <Train className="w-5 h-5 text-brass-light" />
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-mint-400 transition-colors">
                  DENTAL DEPOT
                </span>
                <span className="block text-[9px] tracking-widest text-brass-light font-sans uppercase">
                  Family Dentistry & Orthodontics • Est. 1978
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-slate-200">
              {/* Stations Hover Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setStationsDropdown(true)}
                onMouseLeave={() => setStationsDropdown(false)}
              >
                <a
                  href="#stations"
                  className="flex items-center gap-1.5 hover:text-mint-400 transition-colors py-2"
                >
                  <MapPin className="w-3.5 h-3.5 text-mint-400" />
                  <span>25+ Station Clinics</span>
                </a>

                {/* Dropdown Menu */}
                {stationsDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-88 bg-depot-950/98 backdrop-blur-xl border border-brass-mid/30 shadow-2xl p-3 space-y-2 mt-1">
                    <p className="text-[10px] tracking-widest text-brass-light font-semibold px-2 py-1 uppercase border-b border-brass-mid/15">
                      Select Your Local Dental Station
                    </p>
                    <div className="max-h-64 overflow-y-auto space-y-1 pr-1">
                      {STATIONS_DATA.map((station) => (
                        <button
                          key={station.id}
                          onClick={() => {
                            setStationsDropdown(false);
                            onOpenBooking(station);
                          }}
                          className="w-full text-left px-3 py-2 hover:bg-depot-900 rounded transition-colors group flex items-start justify-between"
                        >
                          <div>
                            <div className="text-[11px] font-semibold text-white group-hover:text-mint-400 transition-colors">
                              {station.name}
                            </div>
                            <div className="text-[9px] text-slate-400 truncate max-w-[190px]">
                              {station.address}
                            </div>
                          </div>
                          <span className="text-[9px] text-brass-light font-mono">Book</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a href="#services" className="hover:text-mint-400 transition-colors">
                Gentle Services
              </a>
              <a href="#depot-kids" className="hover:text-mint-400 transition-colors flex items-center gap-1">
                <Heart className="w-3 h-3 text-rose-400" />
                <span>The Kids Express</span>
              </a>
              <a href="#emergency-care" className="hover:text-mint-400 transition-colors">
                Same-Day Pain Relief
              </a>
            </nav>

            {/* Direct Phone & Book Appointment CTA */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="tel:9189486965"
                className="flex items-center gap-2 text-xs font-mono text-slate-200 hover:text-mint-400 transition-colors"
                title="Call Tulsa Sheridan Station"
              >
                <Phone className="w-3.5 h-3.5 text-brass-light" />
                <span>(918) 948-6965</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="px-5 py-2.5 bg-gradient-to-r from-mint-600 to-mint-500 hover:from-mint-500 hover:to-mint-400 text-depot-950 font-bold border border-mint-400 text-[11px] uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-depot-glow flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5 text-depot-950" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-3 py-1.5 bg-mint-500 text-depot-950 font-bold text-[10px] uppercase tracking-wider"
              >
                Book Visit
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-depot-950/98 border-b border-brass-mid/20 px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-3 text-xs uppercase tracking-widest">
              <a
                href="#stations"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-mint-400 py-2 border-b border-brass-mid/10"
              >
                25+ Station Locations (OKC & Tulsa)
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-mint-400 py-2 border-b border-brass-mid/10"
              >
                Gentle Dental & Orthodontic Services
              </a>
              <a
                href="#depot-kids"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-mint-400 py-2 border-b border-brass-mid/10"
              >
                The Depot Kids Express (Model Trains)
              </a>
              <a
                href="#emergency-care"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-mint-400 py-2 border-b border-brass-mid/10"
              >
                Same-Day Emergency Relief
              </a>
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href="tel:9189486965"
                className="flex items-center justify-center gap-2 py-3 bg-depot-900 border border-brass-mid/20 text-xs font-mono text-slate-200"
              >
                <Phone className="w-4 h-4 text-brass-light" />
                <span>Call Tulsa Sheridan: (918) 948-6965</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-mint-500 text-depot-950 font-bold text-xs uppercase tracking-widest text-center shadow-lg"
              >
                Book Dental Appointment
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
