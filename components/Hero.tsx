"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Compass, BedDouble, Users, Waves, MapPin, Sparkles } from "lucide-react";
import { VILLA_DATA } from "@/data/villaData";

interface HeroProps {
  onOpenBooking: () => void;
  onExplore: () => void;
}

export default function Hero({ onOpenBooking, onExplore }: HeroProps) {
  const highlights = [
    {
      icon: BedDouble,
      title: "6 En-Suite Suites",
      subtitle: "Attached Private Bathrooms",
    },
    {
      icon: Users,
      title: "Up to 12 Guests",
      subtitle: "Families & Private Groups",
    },
    {
      icon: Waves,
      title: "Private Pool",
      subtitle: "Exclusive Swimming & Deck",
    },
    {
      icon: MapPin,
      title: "Thalpe North",
      subtitle: "1.5 km to Turtle Beach",
    },
  ];

  return (
    <section id="home" className="relative w-full min-h-[94vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-8 sm:pt-32 sm:pb-10 overflow-hidden bg-noir-950">
      
      {/* Full-bleed edge-to-edge Cinematic Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2000&q=80"
          alt="M.S.A Anu Villa Private Luxury Estate in Thalpe North Unawatuna"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center md:object-right-top scale-[1.02]"
        />
        
        {/* Filmic Lighting Grading & Gradient Depth for Ultra-Crisp Legibility */}
        <div className="absolute inset-0 bg-noir-950/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir-950/95 via-noir-950/80 to-transparent md:w-[70%] lg:w-[60%] z-10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-sand-50 via-sand-50/70 to-transparent z-10" />
      </div>

      {/* Main Editorial Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center">
        <div className="max-w-xl lg:max-w-2xl py-6 sm:py-12 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Geographic Coordinates & Estate Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-noir-900/80 backdrop-blur-md border border-gold-400/30">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] text-gold-300 uppercase font-sans">
                6.0125° N, 80.2448° E • THALPE NORTH, GALLE
              </span>
            </div>

            {/* Dramatic Cinematic Headline */}
            <h1 className="font-editorial text-3xl sm:text-6xl lg:text-[72px] text-white font-light leading-[1.04] tracking-[-0.03em] drop-shadow-md">
              A Private Sanctuary <br />
              in <span className="font-editorial italic font-normal text-gold-400">Unawatuna</span>
            </h1>

            {/* Authentic Descriptive Prose */}
            <p className="text-sand-100/90 text-xs sm:text-base lg:text-lg leading-relaxed max-w-lg font-sans font-light drop-shadow-xs">
              Escape into tropical tranquility at <span className="text-white font-medium">{VILLA_DATA.officialName}</span>. Six spacious air-conditioned suites with private en-suite baths, swimming pool, full kitchen, and starlit BBQ gardens in peaceful Samagiya.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
              className="bg-gold-500 hover:bg-gold-600 text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl font-ui font-bold text-btn tracking-[0.2em] uppercase shadow-xl shadow-gold-500/20 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Villa ($140/nt)</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onExplore}
                className="bg-white/15 hover:bg-white/25 text-white border border-white/30 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-medium text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md transition-all flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-gold-400" />
                <span>Explore 6 Rooms</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating 4-Stat Architectural Bar */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-2 sm:mt-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-black/10 border border-sand-200 p-3.5 sm:p-5 lg:p-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-sand-200">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center gap-2.5 sm:gap-4 ${
                    index > 0 ? "pt-2.5 sm:pt-0 sm:pl-4 lg:pl-6" : ""
                  }`}
                >
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gold-50 border border-gold-200 text-gold-600 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-xs sm:text-base text-charcoal-900 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-charcoal-500 font-sans font-normal mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

    </section>
  );
}
