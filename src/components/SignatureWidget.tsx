import React, { useState } from 'react';
import { Compass, Train, Clock, Phone, MapPin, CheckCircle } from 'lucide-react';

interface RouteDispatcherWidgetProps {
  onOpenBooking: (station?: any) => void;
}

export const RouteDispatcherWidget: React.FC<RouteDispatcherWidgetProps> = ({ onOpenBooking }) => {
  const [region, setRegion] = useState<'okc' | 'tulsa' | 'ortho'>('tulsa');
  const [selectedStation, setSelectedStation] = useState('Bixby & South Tulsa');

  const stationsData = {
    tulsa: [
      { name: 'Bixby & South Tulsa', phone: '(918) 948-6965', hours: 'Mon - Fri: 7:30 AM - 5:00 PM', doctor: 'Dr. Glen Ashmore DDS & Team' },
      { name: 'Central Tulsa / Sheridan', phone: '(918) 664-6868', hours: 'Mon - Sat: 7:30 AM - 5:00 PM', doctor: 'Dr. Michael Tran DDS' },
      { name: 'Broken Arrow Station', phone: '(918) 893-6868', hours: 'Mon - Fri: 8:00 AM - 5:00 PM', doctor: 'Dr. Sarah Higgins DDS' },
      { name: 'Owasso Depot', phone: '(918) 274-6868', hours: 'Mon - Fri: 7:30 AM - 5:00 PM', doctor: 'Dr. David Lee DDS' }
    ],
    okc: [
      { name: 'Central OKC / Depot HQ', phone: '(405) 525-5555', hours: 'Mon - Sat: 7:30 AM - 5:30 PM', doctor: 'Dr. Glenn Ashmore & 6 Doctors' },
      { name: 'Edmond North Station', phone: '(405) 348-6868', hours: 'Mon - Fri: 8:00 AM - 5:00 PM', doctor: 'Dr. Mark Davis DDS' },
      { name: 'Norman Railway Station', phone: '(405) 360-6868', hours: 'Mon - Fri: 8:00 AM - 5:00 PM', doctor: 'Dr. Angela Cole DDS' },
      { name: 'Moore Depot', phone: '(405) 794-6868', hours: 'Mon - Fri: 7:30 AM - 5:00 PM', doctor: 'Dr. John Miller DDS' }
    ],
    ortho: [
      { name: 'OKC Metro Orthodontic Hub', phone: '(405) 947-6868', hours: 'Braces & Invisalign Specialists', doctor: 'Dr. Christopher Woller MS Ortho' },
      { name: 'Tulsa Regional Ortho Center', phone: '(918) 948-6968', hours: 'Complimentary Consultations', doctor: 'Dr. Laura Edwards Orthodontist' }
    ]
  };

  const activeList = stationsData[region];
  const activeStationObj = activeList.find(s => s.name === selectedStation) || activeList[0];

  return (
    <section id="route-dispatcher" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F241C] text-[#F4EEE5] relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C89D56]/15 border border-[#C89D56]/30 text-xs font-mono uppercase tracking-widest text-[#C89D56] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Live Timetable & Clinical Network</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-['Playfair_Display_SC'] font-bold text-[#C89D56] tracking-tight">
            25-Station Route Dispatcher
          </h2>
          <p className="mt-4 text-[#9EABA2] text-sm sm:text-base max-w-2xl mx-auto font-['Work_Sans']">
            Board the finest dental experience in Oklahoma. Select your regional branch for immediate chair boarding times, doctor rosters, and same-day relief dispatch.
          </p>
        </div>

        <div className="bg-[#261613]/80 rounded-2xl p-6 sm:p-10 border border-[#C89D56]/30 shadow-2xl backdrop-blur-md">
          {/* Region Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-[#C89D56]/20 pb-4">
            {[
              { id: 'tulsa', label: 'Tulsa Regional Line (4 Depots)' },
              { id: 'okc', label: 'OKC Metro Line (12 Depots)' },
              { id: 'ortho', label: 'Dedicated Orthodontic Centers' }
            ].map(r => (
              <button
                key={r.id}
                type="button"
                onClick={() => {
                  setRegion(r.id as any);
                  setSelectedStation(stationsData[r.id as 'tulsa' | 'okc' | 'ortho'][0].name);
                }}
                className={`py-2 px-4 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                  region === r.id
                    ? 'bg-[#C89D56] text-[#0F241C] font-bold shadow-md'
                    : 'bg-[#0F241C]/60 text-[#9EABA2] hover:bg-[#C89D56]/20 hover:text-white'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Station List */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#C89D56] block">
                Select Active Station Track:
              </span>
              {activeList.map(st => (
                <div
                  key={st.name}
                  onClick={() => setSelectedStation(st.name)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedStation === st.name
                      ? 'bg-[#0F241C] border-[#C89D56] text-white shadow-lg'
                      : 'bg-[#0F241C]/40 border-[#C89D56]/20 text-[#9EABA2] hover:border-[#C89D56]/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Train className={`w-4 h-4 ${selectedStation === st.name ? 'text-[#C89D56]' : 'text-slate-500'}`} />
                    <div>
                      <h4 className="text-sm font-semibold font-['Work_Sans']">{st.name}</h4>
                      <p className="text-[11px] text-[#9EABA2] font-mono">{st.doctor}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#C89D56]">ACTIVE</span>
                </div>
              ))}
            </div>

            {/* Station Dispatch Card */}
            <div className="bg-[#0F241C] p-6 rounded-xl border border-[#C89D56]/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#C89D56]/20 pb-4 mb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#E67E22]">Platform Scheduled</span>
                    <h3 className="text-lg font-bold font-['Playfair_Display_SC'] text-[#C89D56]">{activeStationObj.name}</h3>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                </div>

                <div className="space-y-3 text-xs font-['Work_Sans'] text-[#9EABA2]">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C89D56]" />
                    <span>Locomotive Model Train Station Interior · Wheelchair Accessible</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#C89D56]" />
                    <span>{activeStationObj.hours}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#C89D56]" />
                    <span className="font-mono text-white">{activeStationObj.phone}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Walk-ins & Same-Day Relief Welcomed Daily</span>
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#C89D56]/20 flex gap-3">
                <button
                  type="button"
                  onClick={() => onOpenBooking(activeStationObj)}
                  className="flex-1 py-3 bg-[#C89D56] text-[#0F241C] font-['Playfair_Display_SC'] font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-amber-400 transition-all btn-spring text-center"
                >
                  Book Priority Chair
                </button>
                <a
                  href={`tel:${activeStationObj.phone.replace(/[^0-9]/g, '')}`}
                  className="px-4 py-3 bg-[#0F241C] border border-[#C89D56]/40 text-[#C89D56] rounded-lg text-xs font-mono flex items-center justify-center hover:bg-[#C89D56]/10"
                >
                  Call Depot
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SignatureWidget = RouteDispatcherWidget;
