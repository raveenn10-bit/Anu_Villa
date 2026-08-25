"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock, Calendar, ShieldCheck, Award, ArrowRight, X, Sparkles, MapPin, Coffee, Utensils, Wifi, Car } from "lucide-react";
import { VILLA_DATA } from "@/data/villaData";

interface AboutProps {
  onOpenBooking: () => void;
}

export default function About({ onOpenBooking }: AboutProps) {
  const [showStoryModal, setShowStoryModal] = useState(false);

  return (
    <section id="about" className="py-16 lg:py-24 relative overflow-hidden bg-sand-50 dark:bg-[#0E1612]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Floating "Best Villa in Galle" Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-tropical-surface bg-sand-100 dark:bg-tropical-deep aspect-[4/5] sm:aspect-[4/4.5] group">
              <Image
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80"
                alt="Anu Villa al fresco patio and lush tropical garden"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.95] dark:brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

              {/* Floating "Best Villa in Galle" Seal Badge (Exact match to mockup) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 right-6 z-10"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/95 dark:bg-tropical-surface/95 backdrop-blur-md shadow-xl border-2 border-gold-300 dark:border-gold-500/50 p-2 flex flex-col items-center justify-center text-center">
                  <div className="w-8 h-8 rounded-full bg-gold-50 dark:bg-tropical-deep flex items-center justify-center text-gold-600 dark:text-gold-400 mb-1">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-charcoal-900 dark:text-white leading-tight uppercase tracking-wider">
                    Best Villa
                  </span>
                  <span className="text-[9px] text-gold-600 dark:text-gold-400 font-semibold uppercase tracking-widest">
                    in Galle
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Decorative subtle background element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold-200/40 dark:bg-gold-500/10 rounded-full blur-2xl -z-10" />
          </motion.div>

          {/* Right Column: About Content + Policy Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Section Heading */}
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-[0.25em] text-gold-600 dark:text-gold-400 uppercase">
                ABOUT ANU VILLA
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-charcoal-900 dark:text-white font-bold leading-tight">
                Experience Comfort, <br />
                Privacy & Luxury
              </h2>
            </div>

            {/* Narrative text */}
            <p className="text-charcoal-600 dark:text-charcoal-300 text-sm sm:text-base leading-relaxed">
              {VILLA_DATA.description.about}
            </p>

            {/* Key Grid Layout: Checklist + Floating Stay Times Box */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 pt-2">
              {/* Checklist Column */}
              <div className="sm:col-span-7 space-y-3.5">
                {VILLA_DATA.aboutChecklist.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold-100 dark:bg-tropical-surface border border-gold-300 dark:border-gold-500/40 text-gold-700 dark:text-gold-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-charcoal-800 dark:text-charcoal-200">
                      {item}
                    </span>
                  </div>
                ))}

                {/* Learn More Button */}
                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowStoryModal(true)}
                    className="bg-gold-500 hover:bg-gold-600 dark:bg-gold-600 dark:hover:bg-gold-500 text-white px-6 py-3 rounded-xl font-medium text-sm shadow-sm transition-all inline-flex items-center gap-2 group"
                  >
                    <span>Learn More About Us</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </div>

              {/* Right Side: Stay Information Card (Matches mockup exactly) */}
              <div className="sm:col-span-5">
                <div className="bg-white dark:bg-tropical-deep rounded-2xl p-5 shadow-md dark:shadow-black/40 border border-sand-200 dark:border-white/10 space-y-4">
                  {/* Check-in */}
                  <div className="flex items-start gap-3 pb-3 border-b border-sand-100 dark:border-white/10">
                    <div className="w-9 h-9 rounded-lg bg-gold-50 dark:bg-tropical-surface text-gold-600 dark:text-gold-400 flex items-center justify-center shrink-0">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-charcoal-400 dark:text-charcoal-500 font-semibold block">
                        Check-in
                      </span>
                      <span className="text-sm font-bold text-charcoal-900 dark:text-white">
                        {VILLA_DATA.checkInTime}
                      </span>
                    </div>
                  </div>

                  {/* Check-out */}
                  <div className="flex items-start gap-3 pb-3 border-b border-sand-100 dark:border-white/10">
                    <div className="w-9 h-9 rounded-lg bg-gold-50 dark:bg-tropical-surface text-gold-600 dark:text-gold-400 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-charcoal-400 dark:text-charcoal-500 font-semibold block">
                        Check-out
                      </span>
                      <span className="text-sm font-bold text-charcoal-900 dark:text-white">
                        {VILLA_DATA.checkOutTime}
                      </span>
                    </div>
                  </div>

                  {/* Minimum Stay */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gold-50 dark:bg-tropical-surface text-gold-600 dark:text-gold-400 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-charcoal-400 dark:text-charcoal-500 font-semibold block">
                        Minimum Stay
                      </span>
                      <span className="text-sm font-bold text-charcoal-900 dark:text-white">
                        {VILLA_DATA.minimumStay}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Learn More Modal */}
      <AnimatePresence>
        {showStoryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowStoryModal(false)}
              className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white dark:bg-tropical-deep rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-sand-200 dark:border-white/10 z-10 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-sand-200 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gold-600 dark:text-gold-400" />
                  <h3 className="font-serif text-xl font-bold text-charcoal-900 dark:text-white">The Story of Anu Villa</h3>
                </div>
                <button
                  onClick={() => setShowStoryModal(false)}
                  className="w-8 h-8 rounded-full bg-sand-100 dark:bg-tropical-surface hover:bg-sand-200 dark:hover:bg-tropical-card flex items-center justify-center text-charcoal-600 dark:text-charcoal-300 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="py-6 space-y-4 text-charcoal-700 dark:text-charcoal-300 text-sm sm:text-base leading-relaxed">
                <p>{VILLA_DATA.description.longAbout}</p>
                <div className="p-4 bg-sand-50 dark:bg-tropical-surface rounded-2xl border border-sand-200 dark:border-white/5 space-y-2">
                  <h4 className="font-semibold text-charcoal-900 dark:text-white text-sm flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold-600 dark:text-gold-400" />
                    Prime Unawatuna Location
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-400">
                    Located in a tranquil residential cul-de-sac away from traffic noise, yet only 5 minutes from Unawatuna Beach and 12 minutes from historic Galle Fort.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-charcoal-800 dark:text-charcoal-200">
                    <Wifi className="w-4 h-4 text-gold-600 dark:text-gold-400" /> High-speed 100Mbps Wi-Fi
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-charcoal-800 dark:text-charcoal-200">
                    <Car className="w-4 h-4 text-gold-600 dark:text-gold-400" /> Free Private Secure Parking
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-charcoal-800 dark:text-charcoal-200">
                    <Utensils className="w-4 h-4 text-gold-600 dark:text-gold-400" /> 2 Fully Equipped Kitchens
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-charcoal-800 dark:text-charcoal-200">
                    <Coffee className="w-4 h-4 text-gold-600 dark:text-gold-400" /> Ceylon Tea & Coffee Provided
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-sand-200 dark:border-white/10 flex items-center justify-end gap-3">
                <button
                  onClick={() => setShowStoryModal(false)}
                  className="px-5 py-2.5 rounded-xl border border-sand-300 dark:border-white/20 text-charcoal-700 dark:text-charcoal-300 text-sm font-medium hover:bg-sand-50 dark:hover:bg-tropical-surface"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setShowStoryModal(false);
                    onOpenBooking();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-white text-sm font-medium shadow-sm"
                >
                  Book Your Stay
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
