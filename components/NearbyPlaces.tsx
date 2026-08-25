"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Navigation, Clock, Compass, Sparkles, CheckCircle, X, ArrowRight } from "lucide-react";
import { VILLA_DATA, NearbyPlace } from "@/data/villaData";

export default function NearbyPlaces() {
  const [selectedPlace, setSelectedPlace] = useState<NearbyPlace | null>(null);

  return (
    <section id="nearby" className="py-16 lg:py-24 bg-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold tracking-[0.25em] text-gold-600 uppercase">
            EXPLORE THE SOUTH COAST
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-charcoal-900 font-bold">
            Nearby Places & Attractions
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            Anu Villa puts you right at the center of Unawatuna&apos;s best beaches, coral reefs, UNESCO heritage sites, and tropical nature spots.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VILLA_DATA.nearbyAttractions.map((place, index) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedPlace(place)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-sand-200 hover:border-gold-300 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-sand-200">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Distance & Travel Badge */}
                <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-charcoal-900 flex items-center gap-1.5 shadow-sm border border-sand-200/50">
                  <Clock className="w-3 h-3 text-gold-600" />
                  <span>{place.travelTime}</span>
                  <span className="text-charcoal-400 font-normal">({place.distance})</span>
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-gold-300">
                    {place.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug drop-shadow-sm">
                    {place.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-charcoal-600 line-clamp-2 leading-relaxed">
                  {place.description}
                </p>

                <div className="space-y-1.5">
                  {place.highlights.slice(0, 2).map((hl, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-charcoal-700">
                      <CheckCircle className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-sand-100 flex items-center justify-between text-xs font-semibold text-gold-600 group-hover:text-gold-700">
                  <span>View distance & guide</span>
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
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-sand-200 z-10"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={selectedPlace.image}
                  alt={selectedPlace.name}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedPlace(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-white/40">
                  <span className="text-[10px] font-bold text-gold-600 uppercase tracking-widest">{selectedPlace.category}</span>
                  <h3 className="font-serif text-lg font-bold text-charcoal-900">{selectedPlace.name}</h3>
                  <p className="text-xs text-charcoal-500 flex items-center gap-1.5 mt-0.5">
                    <Navigation className="w-3.5 h-3.5 text-gold-600" />
                    {selectedPlace.distance} from Anu Villa • {selectedPlace.travelTime}
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-sm text-charcoal-700 leading-relaxed">
                  {selectedPlace.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-400">
                    Why You Should Visit:
                  </h4>
                  <div className="space-y-1.5">
                    {selectedPlace.highlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-charcoal-800">
                        <CheckCircle className="w-4 h-4 text-gold-600 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-sand-50 border border-sand-200 text-xs text-charcoal-600 flex items-center justify-between">
                  <span>Need scooter rental or tuk-tuk arrangements?</span>
                  <span className="font-semibold text-gold-700">Host can arrange</span>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedPlace(null)}
                    className="px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-white text-xs sm:text-sm font-medium shadow-sm"
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
