"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock, Calendar, ShieldCheck, Award, ArrowRight, X, Sparkles, MapPin, Coffee, Utensils, Wifi, Car, Waves, BedDouble, Trees } from "lucide-react";
import { VILLA_DATA } from "@/data/villaData";

interface AboutProps {
  onOpenBooking: () => void;
}

export default function About({ onOpenBooking }: AboutProps) {
  const [showStoryModal, setShowStoryModal] = useState(false);

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Eyebrow Header */}
        <div className="flex items-center gap-3 mb-10 sm:mb-14">
          <span className="font-serif text-sm font-semibold tracking-[0.2em] text-gold-600 uppercase font-sans">
            01 / THE SANCTUARY
          </span>
          <div className="flex-1 h-[1px] bg-sand-300/80" />
          <span className="text-xs text-charcoal-400 font-sans hidden sm:inline">
            Samagiya, Thalpe North
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetrical Editorial Photography Plate */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-sand-200 aspect-[4/5] group">
              <Image
                src="/images/villa/pool-real.webp"
                alt="M.S.A Anu Villa Private Swimming Pool and Courtyard Patio"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950/60 via-transparent to-transparent opacity-70" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gold-600 block">
                      PRIVATE PROPERTY
                    </span>
                    <h4 className="font-serif text-sm sm:text-base font-bold text-charcoal-900">
                      6 Suites • 12 Guests Max
                    </h4>
                  </div>
                  <span className="text-xs font-bold text-gold-700 bg-gold-50 px-2.5 py-1 rounded-lg border border-gold-200">
                    $140 / nt
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle atmospheric glow */}
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gold-200/30 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Right Column: Editorial Narrative & Stay Parameters */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Section Headline */}
            <div className="space-y-3">
              <h2 className="font-editorial text-3xl sm:text-5xl lg:text-[54px] text-charcoal-950 font-normal leading-[1.05] tracking-[-0.02em]">
                Immerse in Quiet Coastal Luxury
              </h2>
              <p className="font-editorial italic text-lg sm:text-xl text-gold-700">
                &ldquo;Where tropical birdsong and cool pool breezes replace city noise.&rdquo;
              </p>
            </div>

            {/* Narrative Prose */}
            <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed font-sans font-normal">
              Located in the peaceful residential cul-de-sac of Samagiya, Thalpe North, <strong className="text-charcoal-900 font-semibold">{VILLA_DATA.officialName}</strong> was designed as a tranquil home away from home. Offering six fully independent air-conditioned suites with private en-suite bathrooms, an outdoor swimming pool, fully equipped kitchen, and lush coconut palm gardens, our property is tailored for multi-generational families and travel groups seeking complete privacy.
            </p>

            {/* Key Features Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 font-sans">
              {VILLA_DATA.aboutChecklist.map((item, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-gold-100 border border-gold-300 text-gold-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-charcoal-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Stay Parameters Strip (Check-in, Check-out, Rate) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-sand-200 shadow-sm flex flex-wrap items-center justify-between gap-4 font-sans">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sand-50 text-gold-600 flex items-center justify-center">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-charcoal-400 block">Check-in</span>
                  <span className="text-xs sm:text-sm font-bold text-charcoal-900">{VILLA_DATA.checkInTime}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sand-50 text-gold-600 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-charcoal-400 block">Check-out</span>
                  <span className="text-xs sm:text-sm font-bold text-charcoal-900">{VILLA_DATA.checkOutTime}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sand-50 text-gold-600 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-charcoal-400 block">Direct Rate</span>
                  <span className="text-xs sm:text-sm font-bold text-gold-600">$140 / Night</span>
                </div>
              </div>

              <button
                onClick={() => setShowStoryModal(true)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-700 hover:text-gold-800 transition-colors ml-auto sm:ml-0"
              >
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Story Modal */}
      <AnimatePresence>
        {showStoryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowStoryModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-sand-200 z-10 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-sand-200">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gold-600" />
                  <h3 className="font-serif text-xl font-bold text-charcoal-900">The Story of M.S.A Anu Villa</h3>
                </div>
                <button
                  onClick={() => setShowStoryModal(false)}
                  className="w-8 h-8 rounded-full bg-sand-100 hover:bg-sand-200 flex items-center justify-center text-charcoal-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="py-6 space-y-4 text-charcoal-700 text-sm sm:text-base leading-relaxed font-sans">
                <p>{VILLA_DATA.description.longAbout}</p>
                <div className="p-4 bg-sand-50 rounded-2xl border border-sand-200 space-y-2">
                  <h4 className="font-semibold text-charcoal-900 text-sm flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold-600" />
                    Samagiya, Thalpe North, Unawatuna
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-600">
                    Just 1.5 km to Turtle Beach and Thalpe Rock Pools, 7.5 km to UNESCO Galle Fort. Host M. Mangala is readily on hand to assist with airport pickup, scooters, and local itineraries.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-charcoal-800">
                    <Wifi className="w-4 h-4 text-gold-600" /> High-speed 100Mbps Wi-Fi
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-charcoal-800">
                    <Car className="w-4 h-4 text-gold-600" /> Free Private Secure Parking
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-charcoal-800">
                    <Utensils className="w-4 h-4 text-gold-600" /> Fully Equipped Kitchen
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-charcoal-800">
                    <Coffee className="w-4 h-4 text-gold-600" /> Ceylon Tea Station
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-sand-200 flex items-center justify-end gap-3 font-sans">
                <button
                  onClick={() => setShowStoryModal(false)}
                  className="px-5 py-2.5 rounded-xl border border-sand-300 text-charcoal-700 text-xs sm:text-sm font-medium hover:bg-sand-50"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setShowStoryModal(false);
                    onOpenBooking();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-white text-xs sm:text-sm font-medium shadow-sm"
                >
                  Reserve Entire Villa
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
