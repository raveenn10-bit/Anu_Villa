"use client";

import React from "react";
import { motion } from "framer-motion";
import { BedDouble, Users, Waves, MapPin } from "lucide-react";
import { VILLA_DATA } from "@/data/villaData";

interface HeroProps {
  onOpenBooking?: () => void;
  onExplore?: () => void;
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
    <section id="home" className="relative w-full min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-24 pb-6 sm:pt-32 sm:pb-10 overflow-hidden bg-noir-950">
      
      {/* Full-bleed edge-to-edge Cinematic Background Video with Poster Fallback */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/villa/apartment-1/apartment-1-08.webp"
          className="w-full h-full object-cover object-center scale-[1.02] filter brightness-[0.78] contrast-[1.06] saturate-[0.92]"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Filmic Lighting Grading & Gradient Depth for Ultra-Crisp Legibility */}
        <div className="absolute inset-0 bg-noir-950/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir-950/95 via-noir-950/75 to-transparent md:w-[70%] lg:w-[60%] z-10" />
        <div className="absolute inset-x-0 bottom-0 h-36 sm:h-44 bg-gradient-to-t from-sand-50 via-sand-50/70 to-transparent z-10" />
      </div>

      {/* Main Editorial Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center">
        <div className="max-w-xl lg:max-w-2xl py-4 sm:py-10 space-y-4 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3 sm:space-y-5"
          >
            {/* Dramatic Cinematic Headline */}
            <h1 className="font-editorial text-3xl sm:text-6xl lg:text-[72px] text-white font-light leading-[1.04] tracking-[-0.03em] drop-shadow-md">
              A Private Sanctuary <br />
              in <span className="font-editorial italic font-normal text-gold-400">Unawatuna</span>
            </h1>

            {/* Authentic Descriptive Prose */}
            <p className="text-sand-100/90 text-xs sm:text-base lg:text-lg leading-relaxed max-w-lg font-sans font-light drop-shadow-xs">
              Escape into tropical tranquility at <span className="text-white font-medium">{VILLA_DATA.officialName}</span>. Six spacious air-conditioned suites with private en-suite baths, swimming pool, full kitchen, and starlit BBQ gardens in peaceful Samagiya.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating 4-Stat Architectural Bar (Fully Responsive Grid) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-2 sm:mt-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-black/10 border border-sand-200 p-3 sm:p-5 lg:p-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-6 md:divide-x md:divide-sand-200">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center gap-2 sm:gap-4 ${
                    index > 0 ? "md:pl-4 lg:pl-6" : ""
                  }`}
                >
                  <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-gold-50 border border-gold-200 text-gold-600 flex items-center justify-center shrink-0">
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
