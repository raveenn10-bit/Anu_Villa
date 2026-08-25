"use client";

import React, { useState, useRef } from "react";
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
  Info,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { VILLA_DATA, FacilityItem } from "@/data/villaData";
import { useAutoScroll } from "@/hooks/useAutoScroll";

interface RoomsFacilitiesProps {
  onOpenBooking: () => void;
}

export default function RoomsFacilities({ onOpenBooking }: RoomsFacilitiesProps) {
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);
  const scrollContainerRef = useAutoScroll<HTMLDivElement>({ interval: 3200, pauseAfterTouch: 4000 });

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

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="font-serif text-sm font-semibold tracking-[0.2em] text-gold-600 uppercase font-sans">
            02 / ACCOMMODATION &amp; ESTATE
          </span>
          <div className="flex-1 h-[1px] bg-sand-300/80" />
          <span className="text-xs text-charcoal-400 font-sans hidden sm:inline">
            6 En-Suite Rooms • Private Pool
          </span>
        </div>

        {/* Section Title & Desktop / Mobile Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="space-y-2">
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-[52px] text-charcoal-950 font-normal leading-[1.05] tracking-[-0.02em]">
              Designed for Absolute Privacy
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 max-w-xl font-sans font-normal">
              Every detail is crafted for group comfort — six private en-suite bedrooms, sparkling pool, and full kitchen facilities.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            {/* Mobile Scroll Arrow Buttons */}
            <div className="flex md:hidden items-center gap-1.5 bg-sand-100 p-1 rounded-xl">
              <button
                onClick={() => handleScroll("left")}
                aria-label="Scroll left"
                className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-charcoal-700 shadow-2xs active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                aria-label="Scroll right"
                className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-charcoal-700 shadow-2xs active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowAllModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-sand-300 text-xs sm:text-sm font-semibold text-charcoal-800 hover:text-gold-600 hover:border-gold-300 hover:bg-gold-50/50 transition-all shadow-2xs"
            >
              <LayoutGrid className="w-4 h-4 text-gold-600" />
              <span>Full Specifications</span>
            </motion.button>
          </div>
        </div>

        {/* Mobile Horizontal Snap-Scroll / Desktop Responsive 3-Column Grid */}
        <div
          ref={scrollContainerRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-none px-1 md:px-0 scroll-smooth"
        >
          {VILLA_DATA.facilities.map((item, index) => {
            const IconComponent = getIcon(item.iconName);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedFacility(item)}
                className="w-[85vw] max-w-[340px] md:w-auto md:max-w-none flex-shrink-0 snap-start group cursor-pointer bg-white rounded-3xl overflow-hidden border border-sand-200 hover:border-gold-300 transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-sand-200 img-zoom-container">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 380px"
                    className="object-cover img-gallery"
                  />
                  {/* Cinematic cinematic bottom-to-top text gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-950/72 via-noir-950/20 to-transparent z-[2]" />
                  {/* Warm amber tonal wash */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-900/[0.07] to-transparent pointer-events-none z-[3]" />

                  {/* Floating Icon badge */}
                  <div
                    className={`absolute top-3.5 left-3.5 w-10 h-10 rounded-xl flex items-center justify-center shadow-md ${
                      item.iconName === "Waves"
                        ? "bg-ocean-plate-1 text-[#0E3048] border border-[#7FCDFF]"
                        : "bg-white/95 backdrop-blur-md text-gold-700"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold-300 font-sans block">
                      {item.subtitle}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans line-clamp-2">
                    {item.description}
                  </p>

                  <div className="pt-2 border-t border-sand-100 flex items-center justify-between text-xs font-semibold text-gold-700 group-hover:text-gold-800">
                    <span>Inspect details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-center gap-1 text-[11px] text-charcoal-400 mt-2">
          <span>Swipe horizontally to explore all 6 amenities</span>
          <ArrowRight className="w-3 h-3" />
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
              className="absolute inset-0 bg-noir-950/70 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-sand-200 z-10"
            >
              <div className="relative h-60 sm:h-64 w-full">
                <Image
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 600px"
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-noir-950/60 hover:bg-noir-950/80 text-white flex items-center justify-center backdrop-blur-md transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-white/50 shadow-md">
                  <h3 className="font-editorial text-2xl font-normal text-charcoal-950">{selectedFacility.title}</h3>
                  <p className="text-xs text-gold-700 font-semibold uppercase tracking-wider mt-0.5">{selectedFacility.subtitle}</p>
                </div>
              </div>

              <div className="p-6 space-y-4 font-sans">
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  {selectedFacility.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-400">
                    Included Amenities &amp; Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedFacility.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-charcoal-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-sand-200 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedFacility(null)}
                    className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-charcoal-600 hover:bg-sand-100"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setSelectedFacility(null);
                      onOpenBooking();
                    }}
                    className="px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-white text-xs sm:text-sm font-semibold shadow-sm"
                  >
                    Reserve Entire Villa ($140/nt)
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
              className="absolute inset-0 bg-noir-950/70 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-sand-200 z-10 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-sand-200">
                <div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-charcoal-950">
                    Complete Property Specifications
                  </h3>
                  <p className="text-xs text-gold-700 font-semibold mt-0.5">M.S.A Anu Villa • Samagiya, Thalpe North</p>
                </div>
                <button
                  onClick={() => setShowAllModal(false)}
                  className="w-9 h-9 rounded-full bg-sand-100 hover:bg-sand-200 flex items-center justify-center text-charcoal-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-5 font-sans">
                {VILLA_DATA.facilities.map((fac) => (
                  <div key={fac.id} className="p-4 rounded-2xl bg-sand-50 border border-sand-200 space-y-2">
                    <h4 className="font-serif font-bold text-charcoal-900 text-sm">{fac.title}</h4>
                    <p className="text-xs text-charcoal-600">{fac.description}</p>
                    <ul className="space-y-1 pt-1">
                      {fac.details.map((d, i) => (
                        <li key={i} className="text-[11px] text-charcoal-700 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
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
                  className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-white text-xs sm:text-sm font-semibold shadow-sm"
                >
                  Reserve Entire Villa ($140/nt)
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
