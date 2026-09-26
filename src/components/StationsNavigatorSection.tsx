import React, { useState } from 'react';
import { STATIONS_DATA, type ClinicStation } from '../data/depotData';
import { MapPin, Phone, Clock, Train, Calendar } from 'lucide-react';

interface StationsProps {
  onOpenBooking: (station: ClinicStation) => void;
}

export const StationsNavigatorSection: React.FC<StationsProps> = ({ onOpenBooking }) => {
  const [selectedMetro, setSelectedMetro] = useState<string>('All');
  const [activeStation, setActiveStation] = useState<ClinicStation>(STATIONS_DATA[0]);

  const metros = ['All', 'Tulsa Metro', 'Oklahoma City Metro'];

  const filteredStations = selectedMetro === 'All'
    ? STATIONS_DATA
    : STATIONS_DATA.filter(s => s.metro === selectedMetro);

  return (
    <section id="stations" className="relative py-24 bg-depot-900 border-t border-b border-brass-mid/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-depot-950 border border-brass-mid/30 text-brass-light font-sans text-xs tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5 text-mint-400" />
            <span>25+ Stations Across Oklahoma & Southwest</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Find Your Local Dental Depot Station.
          </h2>
          <p className="text-sm sm:text-base text-slate-200 font-sans leading-relaxed">
            Convenient neighborhood locations throughout the Tulsa and Oklahoma City metropolitan areas. Walk in for same-day pain relief or schedule a gentle family cleaning in 60 seconds.
          </p>
        </div>

        {/* Metro Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-depot-950 p-1.5 border border-brass-mid/25 inline-flex rounded-sm">
            {metros.map((m) => (
              <button
                key={m}
                onClick={() => setSelectedMetro(m)}
                className={`px-5 py-2 text-xs font-sans uppercase tracking-widest transition-all ${
                  selectedMetro === m
                    ? 'bg-depot-850 text-mint-400 font-bold border border-mint-500/50 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {m === 'All' ? 'All Stations (25+)' : m}
              </button>
            ))}
          </div>
        </div>

        {/* Stations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStations.map((station) => (
            <div
              key={station.id}
              className={`p-6 border transition-all duration-300 flex flex-col justify-between group ${
                activeStation.id === station.id
                  ? 'bg-depot-950 border-mint-500 shadow-xl shadow-depot-glow'
                  : 'bg-depot-950/70 border-brass-mid/15 hover:border-brass-mid/40'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-brass-mid/10 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brass-light bg-depot-900 px-2 py-0.5 border border-brass-mid/20">
                    {station.metro}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-mint-400 font-mono">
                    <Train className="w-3 h-3" />
                    <span>Train Depot</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-mint-400 transition-colors">
                    {station.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-mint-400 shrink-0 mt-0.5" />
                    <span>{station.address}</span>
                  </p>
                </div>

                <div className="space-y-1 text-[11px] font-sans text-slate-300">
                  <p className="font-medium text-white flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-brass-light shrink-0" />
                    <span>{station.hours}</span>
                  </p>
                  <p className="text-slate-400 pl-4">{station.doctorLead}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {station.services.slice(0, 3).map((s, i) => (
                    <span key={i} className="text-[9px] bg-depot-900 border border-slate-700/50 text-slate-300 px-2 py-0.5">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 space-y-2">
                <button
                  onClick={() => {
                    setActiveStation(station);
                    onOpenBooking(station);
                  }}
                  className="w-full py-2.5 bg-mint-500 hover:bg-mint-400 text-depot-950 font-sans text-xs uppercase tracking-widest font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book at This Station</span>
                </button>

                <a
                  href={`tel:${station.phone.replace(/[^0-9]/g, '')}`}
                  className="w-full py-2 bg-depot-900 hover:bg-depot-850 text-slate-300 hover:text-white font-mono text-[11px] border border-brass-mid/20 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3 h-3 text-brass-light" />
                  <span>{station.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
