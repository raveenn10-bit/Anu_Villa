"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Navigation, Clock, Compass, Sparkles, CheckCircle, X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { VILLA_DATA, NearbyPlace } from "@/data/villaData";
import { useAutoScroll } from "@/hooks/useAutoScroll";

export default function NearbyPlaces() {
  const [selectedPlace, setSelectedPlace] = useState<NearbyPlace | null>(null);
  const scrollRef = useAutoScroll<HTMLDivElement>({ interval: 3400, pauseAfterTouch: 4000 });

  const handleScroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="nearby" className="py-20 lg:py-28 bg-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="font-serif text-sm font-semibold tracking-[0.2em] text-ocean-700 uppercase font-sans">
            05 / THE SOUTHERN COAST GUIDE
          </span>
          <div className="flex-1 h-[1px] bg-sand-300/80" />
          <span className="text-xs text-ocean-600 font-sans hidden sm:inline font-medium">
            1.5 km to Turtle Lagoon
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="space-y-2">
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-[52px] text-charcoal-950 font-normal leading-[1.05] tracking-[-0.02em]">
              The Surrounding Coastline
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-sans font-normal max-w-xl">
              Anu Villa is ideally positioned in Thalpe North — minutes away from shallow turtle lagoons, natural rock pools, and historic Galle Fort.
            </p>
          </div>

          {/* Mobile Arrows */}
          <div className="flex md:hidden items-center gap-1.5 bg-ocean-100/80 p-1 rounded-xl self-start border border-ocean-200">
            <button
              onClick={() => handleScroll("left")}
              aria-label="Scroll left"
              className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-charcoal-700 shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              aria-label="Scroll right"
              className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-charcoal-700 shadow-2xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Attractions Horizontal Snap-Scroll on Mobile / 3-col Grid on Desktop */}
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-none px-1 md:px-0 scroll-smooth"
        >
          {VILLA_DATA.nearbyAttractions.map((place, index) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedPlace(place)}
              className="w-[85vw] max-w-[340px] md:w-auto md:max-w-none flex-shrink-0 snap-start group cursor-pointer bg-white rounded-3xl overflow-hidden border border-sand-200 hover:border-ocean-300 transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-sand-200">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 380px"
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950/70 via-transparent to-transparent opacity-80" />

                {/* Distance Badge with Ocean Breeze Plate 1 */}
                <div className="absolute top-3.5 left-3.5 bg-ocean-plate-1 px-3 py-1 rounded-full text-[11px] font-bold text-[#0E3048] flex items-center gap-1.5 shadow-sm border border-[#7FCDFF] font-sans">
                  <Clock className="w-3 h-3 text-[#0E3048]" />
                  <span>{place.travelTime}</span>
                  <span className="text-[#0E3048]/75 font-normal">({place.distance})</span>
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ocean-200 font-sans block">
                    {place.category}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-white leading-tight">
                    {place.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3.5 font-sans">
                <p className="text-xs sm:text-sm text-charcoal-600 line-clamp-2 leading-relaxed">
                  {place.description}
                </p>

                <div className="space-y-1.5">
                  {place.highlights.slice(0, 2).map((hl, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-charcoal-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-sand-100 flex items-center justify-between text-xs font-semibold text-gold-700 group-hover:text-gold-800">
                  <span>View distance &amp; guide</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Place Detail Modal */}
      <AnimatePresence>
        {selectedPlace && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPlace(null)}
              className="absolute inset-0 bg-noir-950/70 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-sand-200 z-10"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={selectedPlace.image}
                  alt={selectedPlace.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 600px"
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedPlace(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-noir-950/60 hover:bg-noir-950/80 text-white flex items-center justify-center backdrop-blur-md"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-white/50 shadow-md">
                  <span className="text-[10px] font-bold text-gold-700 uppercase tracking-widest block font-sans">{selectedPlace.category}</span>
                  <h3 className="font-editorial text-2xl font-normal text-charcoal-950">{selectedPlace.name}</h3>
                  <p className="text-xs text-charcoal-500 flex items-center gap-1.5 mt-0.5 font-sans">
                    <Navigation className="w-3.5 h-3.5 text-gold-600" />
                    {selectedPlace.distance} from Anu Villa • {selectedPlace.travelTime}
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-4 font-sans">
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  {selectedPlace.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-400">
                    Why You Should Visit:
                  </h4>
                  <div className="space-y-1.5">
                    {selectedPlace.highlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-charcoal-800">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-sand-50 border border-sand-200 text-xs text-charcoal-600 flex items-center justify-between">
                  <span>Need scooter rental or tuk-tuk arrangements?</span>
                  <span className="font-semibold text-gold-700">Host Mangala arranges</span>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedPlace(null)}
                    className="px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-white text-xs sm:text-sm font-semibold shadow-sm"
                  >
                    Got It
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
