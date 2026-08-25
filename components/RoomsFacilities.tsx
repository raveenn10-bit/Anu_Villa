"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  BedDouble,
  Bath,
  Waves,
  Tv,
  UtensilsCrossed,
  Trees,
  LayoutGrid,
  CheckCircle2,
  X,
  Sparkles,
  ArrowRight,
  Info
} from "lucide-react";
import { VILLA_DATA, FacilityItem } from "@/data/villaData";

interface RoomsFacilitiesProps {
  onOpenBooking: () => void;
}

export default function RoomsFacilities({ onOpenBooking }: RoomsFacilitiesProps) {
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "BedDouble":
        return BedDouble;
      case "Bath":
        return Bath;
      case "Waves":
        return Waves;
      case "Tv":
        return Tv;
      case "UtensilsCrossed":
        return UtensilsCrossed;
      case "Trees":
        return Trees;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="facilities" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-[0.25em] text-gold-600 uppercase">
              ROOMS & FACILITIES
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-charcoal-900 font-bold">
              Designed for Your Comfort
            </h2>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowAllModal(true)}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-sand-300 text-xs sm:text-sm font-medium text-charcoal-700 hover:text-gold-600 hover:border-gold-300 hover:bg-gold-50/50 transition-all shadow-xs"
          >
            <LayoutGrid className="w-4 h-4 text-gold-600" />
            <span>View All Facilities</span>
          </motion.button>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VILLA_DATA.facilities.map((item, index) => {
            const IconComponent = getIcon(item.iconName);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedFacility(item)}
                className="group cursor-pointer bg-sand-50/70 hover:bg-white rounded-2xl overflow-hidden border border-sand-200 hover:border-gold-300 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-sand-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-medium flex items-center gap-1.5 drop-shadow-md">
                      <Info className="w-3.5 h-3.5 text-gold-400" /> Click to view details
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-gold-100 text-gold-700 flex items-center justify-center mb-3 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-base sm:text-lg text-charcoal-900 group-hover:text-gold-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-500 mt-1 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center text-xs font-semibold text-gold-600 group-hover:text-gold-700 gap-1">
                    <span>Explore details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Single Facility Detail Modal */}
      <AnimatePresence>
        {selectedFacility && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFacility(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-sand-200 z-10"
            >
              <div className="relative h-56 sm:h-64 w-full">
                <Image
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-3 border border-white/40">
                  <h3 className="font-serif text-lg font-bold text-charcoal-900">{selectedFacility.title}</h3>
                  <p className="text-xs text-gold-700 font-medium">{selectedFacility.subtitle}</p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-sm text-charcoal-600 leading-relaxed">
                  {selectedFacility.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-400">
                    Included Amenities & Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedFacility.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-charcoal-800">
                        <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-sand-200 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedFacility(null)}
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-charcoal-600 hover:bg-sand-100"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setSelectedFacility(null);
                      onOpenBooking();
                    }}
                    className="px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-white text-xs sm:text-sm font-medium shadow-sm"
                  >
                    Book This Villa
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* All Facilities Overview Modal */}
      <AnimatePresence>
        {showAllModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAllModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-sand-200 z-10 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-sand-200">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900">
                    Complete Facilities & Property Features
                  </h3>
                  <p className="text-xs text-gold-600 font-medium">Anu Villa • Unawatuna, Galle</p>
                </div>
                <button
                  onClick={() => setShowAllModal(false)}
                  className="w-8 h-8 rounded-full bg-sand-100 hover:bg-sand-200 flex items-center justify-center text-charcoal-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {VILLA_DATA.facilities.map((fac) => (
                  <div key={fac.id} className="p-4 rounded-2xl bg-sand-50 border border-sand-200 space-y-2">
                    <h4 className="font-bold text-charcoal-900 text-sm">{fac.title}</h4>
                    <p className="text-xs text-charcoal-600">{fac.description}</p>
                    <ul className="space-y-1 pt-1">
                      {fac.details.map((d, i) => (
                        <li key={i} className="text-[11px] text-charcoal-700 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-sand-200 flex justify-end">
                <button
                  onClick={() => {
                    setShowAllModal(false);
                    onOpenBooking();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-white text-sm font-medium shadow-sm"
                >
                  Book Your Stay Now
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
