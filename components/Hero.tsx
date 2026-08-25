"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Compass, BedDouble, Users, Waves, MapPin } from "lucide-react";
import { VILLA_DATA } from "@/data/villaData";

interface HeroProps {
  onOpenBooking: () => void;
  onExplore: () => void;
}

export default function Hero({ onOpenBooking, onExplore }: HeroProps) {
  const highlights = [
    {
      icon: BedDouble,
      title: "4 Bedrooms",
      subtitle: "Spacious & Comfortable",
    },
    {
      icon: Users,
      title: "Up to 8 Guests",
      subtitle: "Perfect for Families",
    },
    {
      icon: Waves,
      title: "Swimming Pool",
      subtitle: "Private & Relaxing",
    },
    {
      icon: MapPin,
      title: "Galle, Sri Lanka",
      subtitle: "Prime Location",
    },
  ];

  return (
    <section id="home" className="relative pt-20 pb-12 lg:pt-24 lg:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-sand-200/80 bg-white min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-center">
          
          {/* Background Image: Luxury Villa with Pool & Palm Trees */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1800&q=85"
              alt="Anu Villa Galle Luxury Private Getaway"
              fill
              priority
              className="object-cover object-right md:object-center"
            />
            
            {/* Smooth Left Gradient for Crisp Text Readability matching mockup */}
            <div className="absolute inset-0 bg-gradient-to-r from-sand-50/95 via-sand-50/85 to-transparent md:w-[65%] lg:w-[55%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-sand-50/90 via-transparent to-transparent md:hidden" />
          </div>

          {/* Text & Content Container */}
          <div className="relative z-10 px-6 sm:px-12 lg:px-16 py-12 max-w-xl lg:max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 sm:space-y-5"
            >
              {/* Subtitle */}
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-gold-600 uppercase block">
                WELCOME TO ANU VILLA
              </span>

              {/* Main Heading (Exact mockup typography) */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] text-charcoal-900 font-bold leading-[1.12] tracking-tight">
                Your Private Getaway <br />
                in <span className="text-gold-600 font-serif">Galle</span>
              </h1>

              {/* Description */}
              <p className="text-charcoal-600 text-xs sm:text-sm lg:text-base leading-relaxed max-w-md">
                {VILLA_DATA.description.hero}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenBooking}
                  className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-xl font-medium text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Your Stay</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onExplore}
                  className="bg-white/90 hover:bg-white text-charcoal-800 border border-sand-300 px-5 py-3 rounded-xl font-medium text-xs sm:text-sm shadow-xs backdrop-blur-sm transition-all flex items-center gap-2"
                >
                  <Compass className="w-4 h-4 text-gold-600" />
                  <span>Explore Villa</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Quick Features Bar (Exact mockup alignment & layout) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative -mt-6 sm:-mt-8 lg:-mt-10 z-20 max-w-5xl mx-auto px-2"
        >
          <div className="bg-white rounded-2xl shadow-xl shadow-charcoal-900/5 border border-sand-200 p-4 sm:p-5 lg:p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-sand-200">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -2 }}
                    className={`flex items-center gap-3 sm:gap-3.5 ${
                      index > 0 ? "pt-3 sm:pt-0 sm:pl-4 lg:pl-6" : ""
                    }`}
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gold-50 border border-gold-200 text-gold-600 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-charcoal-900 leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-charcoal-500 font-normal mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
