import React from 'react';
import { STATIONS_DATA } from '../data/depotData';
import { Train, Heart, Shield, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-depot-950 border-t border-brass-mid/15 text-slate-300 font-sans text-xs">
      {/* Trust & Accreditations Banner */}
      <div className="border-b border-brass-mid/15 py-12 bg-depot-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 flex flex-col items-center">
              <Train className="w-6 h-6 text-brass-light" />
              <h5 className="font-serif font-bold text-white text-sm">45+ Years Since 1978</h5>
              <p className="text-[11px] text-slate-400">Founded by Dr. Glenn Ashmore, serving Oklahoma families for generations.</p>
            </div>

            <div className="space-y-2 flex flex-col items-center">
              <Heart className="w-6 h-6 text-rose-400" />
              <h5 className="font-serif font-bold text-white text-sm">Over 250,000 Smiles</h5>
              <p className="text-[11px] text-slate-400">Gentle pediatric and adult restorative care without anxiety.</p>
            </div>

            <div className="space-y-2 flex flex-col items-center">
              <Award className="w-6 h-6 text-mint-400" />
              <h5 className="font-serif font-bold text-white text-sm">Invisalign Diamond Provider</h5>
              <p className="text-[11px] text-slate-400">Top 1% provider of clear aligner orthodontic transformations.</p>
            </div>

            <div className="space-y-2 flex flex-col items-center">
              <Shield className="w-6 h-6 text-brass-light" />
              <h5 className="font-serif font-bold text-white text-sm">Most Insurances Accepted</h5>
              <p className="text-[11px] text-slate-400">Delta Dental, SoonerCare, BCBS, MetLife, Cigna, plus CareCredit.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Stations Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & History (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-brass-mid/40 bg-depot-900 flex items-center justify-center">
                <Train className="w-4 h-4 text-brass-light" />
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-white">
                DENTAL DEPOT
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Oklahoma’s trusted neighborhood dental family since 1978. Offering gentle preventative dentistry, orthodontics, and restorative smile care in a warm Victorian train station environment.
            </p>
            <div className="pt-2 text-xs font-mono text-slate-400">
              Tulsa Metro Central:{' '}
              <a href="tel:9189486965" className="text-mint-400 hover:underline">
                (918) 948-6965
              </a>
              <br />
              OKC Metro Central:{' '}
              <a href="tel:4059468800" className="text-mint-400 hover:underline">
                (405) 946-8800
              </a>
            </div>
          </div>

          {/* Regional Stations Directory (8 cols) */}
          <div className="md:col-span-8 space-y-4">
            <h5 className="text-xs font-mono uppercase tracking-widest text-brass-light">
              Featured Stations Across Tulsa & Oklahoma City
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {STATIONS_DATA.map((station) => (
                <div key={station.id} className="p-3 bg-depot-900/30 border border-brass-mid/15 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-semibold text-white block text-xs">
                      {station.name}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    {station.address}
                  </p>
                  <a
                    href={`tel:${station.phone.replace(/[^0-9]/g, '')}`}
                    className="text-[11px] font-mono text-mint-400 block pt-1 hover:underline"
                  >
                    {station.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-brass-mid/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Dental Depot. All rights reserved. Locally founded and operated in Oklahoma.</p>
          <div className="flex items-center gap-6">
            <a href="#stations" className="hover:text-slate-300">25+ Stations</a>
            <a href="#services" className="hover:text-slate-300">Services</a>
            <a href="#depot-kids" className="hover:text-slate-300">Depot Kids</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
