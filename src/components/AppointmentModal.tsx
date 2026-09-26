import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2, Train } from 'lucide-react';
import { STATIONS_DATA, type ClinicStation } from '../data/depotData';
import confetti from 'canvas-confetti';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedStation?: ClinicStation | null;
}

export const AppointmentModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  preselectedStation
}) => {
  const [selectedStationId, setSelectedStationId] = useState<string>(
    preselectedStation ? preselectedStation.id : STATIONS_DATA[0].id
  );
  const [visitReason, setVisitReason] = useState<string>('New Patient Routine Exam & Cleaning');
  const [patientName, setPatientName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('Morning (8:00 AM – 11:30 AM)');
  const [isEmergency, setIsEmergency] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (preselectedStation) {
      setSelectedStationId(preselectedStation.id);
    }
  }, [preselectedStation]);

  if (!isOpen) return null;

  const currentStation = STATIONS_DATA.find(s => s.id === selectedStationId) || STATIONS_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#14b8a6', '#d99b26', '#f8fafc', '#061326']
      });
    } catch {
      // Ignore if confetti fails
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-depot-950 border border-brass-mid/40 shadow-2xl p-6 sm:p-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation Success State */
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-full bg-depot-900 border border-mint-500 flex items-center justify-center mx-auto shadow-lg shadow-depot-glow">
              <CheckCircle2 className="w-8 h-8 text-mint-400" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-brass-light uppercase">
                Boarding Pass Confirmed // Station Reserved
              </span>
              <h3 className="font-serif text-3xl font-bold text-white">
                All Aboard, {patientName || 'Valued Patient'}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-sans max-w-lg mx-auto leading-relaxed">
                Your appointment request for our <strong className="text-white">{currentStation.name}</strong> has been received. Our clinical scheduling team will call you within 15 minutes to finalize your time.
              </p>
            </div>

            <div className="bg-depot-900/60 border border-brass-mid/20 p-4 max-w-md mx-auto text-left text-xs font-mono space-y-2">
              <div className="flex justify-between border-b border-brass-mid/10 pb-1.5">
                <span className="text-slate-400">Boarding Pass ID:</span>
                <span className="text-mint-400 font-bold">#DEPOT-PASS-7729</span>
              </div>
              <div className="flex justify-between border-b border-brass-mid/10 pb-1.5">
                <span className="text-slate-400">Station:</span>
                <span className="text-white">{currentStation.name}</span>
              </div>
              <div className="flex justify-between border-b border-brass-mid/10 pb-1.5">
                <span className="text-slate-400">Address:</span>
                <span className="text-white">{currentStation.address}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Clinic Direct Phone:</span>
                <span className="text-brass-light font-bold">{currentStation.phone}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 bg-mint-500 hover:bg-mint-400 text-depot-950 font-bold text-xs uppercase tracking-widest transition-colors shadow-lg"
            >
              Return to Website
            </button>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-mint-400">
                <Train className="w-3.5 h-3.5" />
                <span>Station Dental Reservation</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Schedule Your Dental Depot Visit.
              </h3>
              <p className="text-xs text-slate-300 font-sans">
                Gentle, friendly care for adults and children across 25+ Oklahoma locations.
              </p>
            </div>

            {/* Select Station Location */}
            <div className="space-y-1.5 text-left">
              <label className="block text-xs font-mono tracking-widest uppercase text-slate-400">
                1. Select Station Location
              </label>
              <select
                value={selectedStationId}
                onChange={(e) => setSelectedStationId(e.target.value)}
                className="w-full bg-depot-900 border border-brass-mid/20 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-mint-400"
                required
              >
                {STATIONS_DATA.map((station) => (
                  <option key={station.id} value={station.id} className="bg-depot-950 text-white">
                    [{station.metro}] {station.name} — {station.address}
                  </option>
                ))}
              </select>
            </div>

            {/* Reason for Visit */}
            <div className="space-y-1.5 text-left">
              <label className="block text-xs font-mono tracking-widest uppercase text-slate-400">
                2. Reason for Visit
              </label>
              <select
                value={visitReason}
                onChange={(e) => setVisitReason(e.target.value)}
                className="w-full bg-depot-900 border border-brass-mid/20 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-mint-400"
              >
                <option value="New Patient Routine Exam & Cleaning">New Patient Routine Exam & Cleaning</option>
                <option value="Kids Pediatric Exam & Train Tour">Kids Pediatric Exam & Train Tour</option>
                <option value="Emergency Toothache / Pain Relief Today">Emergency Toothache / Pain Relief Today (Priority)</option>
                <option value="Invisalign & Clear Braces Free Scan">Invisalign & Clear Braces Free 3D Scan</option>
                <option value="Same-Day Ceramic Crown or Fillings">Same-Day Ceramic Crown or Fillings</option>
                <option value="Dentures, Implants or Surgery">Dentures, Implants or Oral Surgery</option>
              </select>
            </div>

            {/* Emergency Checkbox */}
            <div className="flex items-center gap-2 bg-depot-900/60 p-3 border border-brass-mid/20">
              <input
                type="checkbox"
                id="emergency"
                checked={isEmergency}
                onChange={(e) => setIsEmergency(e.target.checked)}
                className="rounded border-slate-700 text-mint-500 focus:ring-mint-400"
              />
              <label htmlFor="emergency" className="text-xs text-slate-200 cursor-pointer">
                <strong className="text-rose-400">Immediate Pain / Emergency:</strong> I need to be seen today if possible.
              </label>
            </div>

            {/* Patient Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="space-y-1.5">
                <label className="block text-xs font-mono tracking-widest uppercase text-slate-400">
                  Patient Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="e.g. Jessica Miller"
                  className="w-full bg-depot-900 border border-brass-mid/20 px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-mint-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono tracking-widest uppercase text-slate-400">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(918) 555-0144"
                  className="w-full bg-depot-900 border border-brass-mid/20 px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-mint-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="space-y-1.5">
                <label className="block text-xs font-mono tracking-widest uppercase text-slate-400">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jessica@example.com"
                  className="w-full bg-depot-900 border border-brass-mid/20 px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-mint-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono tracking-widest uppercase text-slate-400">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-depot-900 border border-brass-mid/20 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-mint-400"
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="block text-xs font-mono tracking-widest uppercase text-slate-400">
                  Preferred Time Window
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full bg-depot-900 border border-brass-mid/20 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-mint-400"
                >
                  <option value="Early Morning (7:30 AM – 9:00 AM)">Early Morning (7:30 AM – 9:00 AM)</option>
                  <option value="Midday (10:00 AM – 1:00 PM)">Midday (10:00 AM – 1:00 PM)</option>
                  <option value="Afternoon (2:00 PM – 5:00 PM)">Afternoon (2:00 PM – 5:00 PM)</option>
                  <option value="Saturday Morning (8:00 AM – 12:00 PM)">Saturday Morning (8:00 AM – 12:00 PM)</option>
                </select>
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-mint-500 to-mint-600 hover:from-mint-400 hover:to-mint-500 text-depot-950 font-sans text-xs uppercase tracking-widest font-bold border border-mint-400 transition-all duration-300 shadow-xl hover:shadow-depot-glow flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-depot-950" />
                <span>Confirm Dental Station Reservation</span>
              </button>
              <p className="text-[10px] text-slate-400 text-center font-sans mt-2">
                Most dental insurances accepted. Walk-ins always welcome.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
