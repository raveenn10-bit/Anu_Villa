"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, BedDouble, Users, Waves } from "lucide-react";

interface HeroProps {
  onOpenBooking?: () => void;
  onExplore?: () => void;
}

const slides = [
  { src: "/images/hero/hero-slide-1.webp", alt: "M.S.A Anu Villa private courtyard swimming pool" },
  { src: "/images/hero/hero-slide-2.webp", alt: "Poolside dining patio at M.S.A Anu Villa" },
  { src: "/images/hero/hero-slide-3.webp", alt: "Tropical pool deck at M.S.A Anu Villa" },
];

export default function Hero({ onOpenBooking, onExplore }: HeroProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setCurrent((value) => (value + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, []);

  const facts = [
    { icon: BedDouble, value: "6 En-Suite Rooms" },
    { icon: Users, value: "Up to 12 Guests" },
    { icon: Waves, value: "Private Pool" },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-[#f5f1e8] pt-[76px] lg:pt-[88px]">
      <div className="grid min-h-[calc(100svh-76px)] lg:min-h-[calc(100vh-88px)] lg:grid-cols-[38%_62%]">
        <div className="relative z-10 flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-[7vw] lg:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <p className="mb-8 font-ui text-[10px] font-semibold uppercase tracking-[0.34em] text-[#9c6c32]">Unawatuna · Galle · Sri Lanka</p>
            <h1 className="max-w-[560px] font-display text-[clamp(3.6rem,7.1vw,7.6rem)] font-light leading-[0.82] tracking-[-0.055em] text-[#171916]">
              Your own<br />private<br /><em className="font-normal">sanctuary.</em>
            </h1>
            <p className="mt-9 max-w-md font-body text-sm leading-7 text-[#5e625d] sm:text-base">Six private en-suite rooms, a peaceful courtyard pool, and generous spaces made for time together.</p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <button onClick={onExplore} className="group inline-flex items-center gap-8 bg-[#20221f] px-7 py-4 font-ui text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#9c6c32]">
                Explore the villa <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </button>
              <button onClick={onOpenBooking} className="group inline-flex items-center gap-2 border-b border-[#20221f] pb-1 font-ui text-[10px] font-semibold uppercase tracking-[0.22em] text-[#20221f]">
                Book direct <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </motion.div>

          <div className="mt-14 flex items-center gap-3 lg:absolute lg:bottom-8 lg:left-[7vw] lg:mt-0">
            <span className="font-ui text-[9px] tracking-[0.22em] text-[#797b75]">01</span>
            <div className="h-px w-16 bg-[#b9b2a5]">
              <motion.div key={current} initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 6.5, ease: "linear" }} className="h-full bg-[#20221f]" />
            </div>
            <span className="font-ui text-[9px] tracking-[0.22em] text-[#797b75]">03</span>
          </div>
        </div>

        <div className="relative min-h-[58svh] overflow-hidden lg:min-h-full">
          <AnimatePresence mode="sync">
            <motion.div key={current} initial={{ opacity: 0, scale: 1.045 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }} className="absolute inset-0">
              <Image src={slides[current].src} alt={slides[current].alt} fill priority sizes="(max-width: 1024px) 100vw, 62vw" className="object-cover object-center saturate-[0.88] contrast-[1.04]" />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/5" />
          <p className="absolute bottom-7 right-6 max-w-[240px] text-right font-display text-lg italic leading-tight text-white sm:right-10">A quiet courtyard.<br />A stay to remember.</p>
        </div>
      </div>

      <div className="relative z-20 grid bg-[#20221f] px-6 text-white sm:grid-cols-3 sm:px-10 lg:ml-[38%] lg:-mt-[94px] lg:w-[62%] lg:px-6">
        {facts.map(({ icon: Icon, value }, index) => (
          <div key={value} className={`flex items-center gap-4 px-2 py-6 sm:justify-center lg:py-8 ${index !== 0 ? "border-t border-white/15 sm:border-l sm:border-t-0" : ""}`}>
            <Icon className="h-5 w-5 stroke-[1.25] text-[#d4a663]" />
            <span className="font-display text-lg tracking-wide sm:text-base xl:text-xl">{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
