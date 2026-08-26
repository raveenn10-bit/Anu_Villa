"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BedDouble, Users, Waves, MapPin } from "lucide-react";
import { VILLA_DATA } from "@/data/villaData";

interface HeroProps {
  onOpenBooking?: () => void;
  onExplore?: () => void;
}

const HERO_DESKTOP_SLIDES = [
  {
    src: "/images/hero/hero-slide-1.webp",
    alt: "M.S.A Anu Villa Private Swimming Pool & Sunlit Courtyard",
  },
  {
    src: "/images/hero/hero-slide-2.webp",
    alt: "Poolside Dining Patio & Tropical Banana Greenery at Anu Villa",
  },
  {
    src: "/images/hero/hero-slide-3.webp",
    alt: "Sun Loungers on Stone Pool Deck Overlooking Lush Forest Canopy",
  },
];

export default function Hero({ onOpenBooking, onExplore }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_DESKTOP_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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
      
      {/* ── Background Media Container ───────────────────────────────── */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
        
        {/* 1. Desktop Landscape View: 3-Image Slideshow */}
        <div className="hero-slideshow-landscape absolute inset-0 w-full h-full">
          <AnimatePresence mode="sync">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={HERO_DESKTOP_SLIDES[currentSlide].src}
                alt={HERO_DESKTOP_SLIDES[currentSlide].alt}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center filter brightness-[0.92] contrast-[1.04] saturate-[1.05]"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 2. Mobile & Portrait View: Looping Cinematic Video (e.g. 1080x1920, mobile, tablet portrait) */}
        <div className="hero-video-portrait absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/villa/apartment-1/apartment-1-08.webp"
            className="w-full h-full object-cover object-center scale-[1.01] filter brightness-[0.98] contrast-[1.06] saturate-[1.12]"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Filmic Lighting Grading & Gradient Depth for Ultra-Crisp Legibility */}
        <div className="absolute inset-0 bg-noir-950/15 sm:bg-noir-950/25 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-950/75 via-noir-950/30 to-transparent sm:bg-gradient-to-r sm:from-noir-950/80 sm:via-noir-950/40 sm:to-transparent md:w-[70%] lg:w-[60%] z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-36 bg-gradient-to-t from-sand-50 via-sand-50/50 to-transparent z-10 pointer-events-none" />
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
            <h1 className="font-editorial text-3xl sm:text-6xl lg:text-[72px] text-white font-light leading-[1.04] tracking-[-0.03em] drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              A Private Sanctuary <br />
              in <span className="font-editorial italic font-normal text-gold-400">Unawatuna</span>
            </h1>

            {/* Authentic Descriptive Prose */}
            <p className="text-sand-100 text-xs sm:text-base lg:text-lg leading-relaxed max-w-lg font-sans font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              Escape into tropical tranquility at <span className="text-white font-bold">{VILLA_DATA.officialName}</span>. Six spacious air-conditioned suites with private en-suite baths, swimming pool, full kitchen, and starlit BBQ gardens in peaceful Samagiya.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating 4-Stat Architectural Bar with Slide Indicators for Desktop */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-2 sm:mt-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-black/10 border border-sand-200 p-3 sm:p-5 lg:p-6 relative"
        >
          {/* Slide Indicators visible ONLY on Desktop Landscape */}
          <div className="hero-slideshow-landscape items-center gap-1.5 absolute -top-3 right-6 bg-noir-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-gold-400/30">
            <div className="flex items-center gap-1.5">
              {HERO_DESKTOP_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === idx
                      ? "w-5 h-1.5 bg-gold-400"
                      : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-6 md:divide-x md:divide-sand-200">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              const isOceanBreeze = index === 2; // Private Pool
              const isCoastal = index === 3; // Thalpe Coast
              return (
                <div
                  key={index}
                  className={`flex items-center gap-2 sm:gap-4 ${
                    index > 0 ? "md:pl-4 lg:pl-6" : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform hover:scale-105 ${
                      isOceanBreeze
                        ? "bg-ocean-plate-1 border border-[#7FCDFF] text-[#0E3048] shadow-xs"
                        : isCoastal
                        ? "bg-ocean-plate-3 border border-[#7FCDFF] text-[#0E3048] shadow-xs"
                        : "bg-gold-50 border border-gold-200 text-gold-600"
                    }`}
                  >
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
