"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, X } from "lucide-react";
import { VILLA_DATA } from "@/data/villaData";

interface AboutProps { onOpenBooking: () => void }

export default function About({ onOpenBooking }: AboutProps) {
  const [showStory, setShowStory] = useState(false);

  return (
    <section id="about" className="overflow-hidden bg-[#f5f1e8] px-6 py-24 sm:px-10 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 flex items-center gap-5 border-b border-[#cfc7b9] pb-5">
          <span className="font-ui text-[9px] font-semibold uppercase tracking-[0.28em] text-[#9c6c32]">01 / The Sanctuary</span>
          <span className="ml-auto hidden font-ui text-[9px] uppercase tracking-[0.2em] text-[#777970] sm:block">Samagiya · Thalpe North</span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[56%_44%] lg:gap-0">
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.85 }} className="relative aspect-[5/4] overflow-hidden lg:aspect-[4/3]">
            <Image src="/images/villa/pool-real.webp" alt="Private swimming pool and courtyard at M.S.A Anu Villa" fill sizes="(max-width: 1024px) 100vw, 56vw" className="object-cover saturate-[0.86] transition-transform duration-[1400ms] hover:scale-[1.025]" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/55 to-transparent p-5 pt-20 text-white sm:p-8">
              <span className="font-ui text-[9px] uppercase tracking-[0.25em]">Private courtyard pool</span>
              <span className="font-display text-xl italic">Unawatuna, Sri Lanka</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.85 }} className="relative bg-[#fbf9f4] px-7 py-12 sm:px-12 lg:-ml-8 lg:px-16 lg:py-16 xl:px-20 xl:py-20">
            <p className="mb-5 font-ui text-[9px] font-semibold uppercase tracking-[0.28em] text-[#9c6c32]">Welcome to Anu Villa</p>
            <h2 className="font-display text-[clamp(3.1rem,6vw,6.6rem)] font-light leading-[0.86] tracking-[-0.045em] text-[#1d201c]">Gather.<br />Unwind.<br /><em>Feel at home.</em></h2>
            <p className="mt-8 max-w-lg font-body text-sm leading-7 text-[#62665f] sm:text-base">Located in peaceful Thalpe North, M.S.A Anu Villa brings families and friends together with six independent air-conditioned suites, private bathrooms, a pool, a full kitchen and tropical outdoor spaces.</p>
            <button onClick={() => setShowStory(true)} className="group mt-8 inline-flex items-center gap-8 border-b border-[#9c6c32] pb-2 font-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-[#81551f]">Discover our story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></button>

            <div className="mt-10 grid grid-cols-3 border-y border-[#d8d0c2] py-5">
              <div><span className="block font-display text-2xl text-[#20221f] sm:text-3xl">6</span><span className="font-ui text-[8px] uppercase tracking-[0.18em] text-[#777970]">En-Suite Rooms</span></div>
              <div className="border-l border-[#d8d0c2] pl-4 sm:pl-6"><span className="block font-display text-2xl text-[#20221f] sm:text-3xl">12</span><span className="font-ui text-[8px] uppercase tracking-[0.18em] text-[#777970]">Guests</span></div>
              <div className="border-l border-[#d8d0c2] pl-4 sm:pl-6"><span className="block font-display text-2xl text-[#20221f] sm:text-3xl">$140</span><span className="font-ui text-[8px] uppercase tracking-[0.18em] text-[#777970]">Per Night</span></div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 font-ui text-[9px] uppercase tracking-[0.17em] text-[#666962]">
              <span className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5 text-[#9c6c32]" /> Check-in {VILLA_DATA.checkInTime}</span>
              <span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-[#9c6c32]" /> Check-out {VILLA_DATA.checkOutTime}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showStory && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <motion.button aria-label="Close story" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowStory(false)} className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto bg-[#f5f1e8] p-7 shadow-2xl sm:p-12">
              <button onClick={() => setShowStory(false)} className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-black/15"><X className="h-4 w-4" /></button>
              <p className="font-ui text-[9px] uppercase tracking-[0.25em] text-[#9c6c32]">Our Story</p>
              <h3 className="mt-5 pr-10 font-display text-4xl font-light text-[#20221f] sm:text-5xl">A tranquil home away from home.</h3>
              <p className="mt-7 font-body text-sm leading-7 text-[#5f635c] sm:text-base">{VILLA_DATA.description.longAbout}</p>
              <button onClick={() => { setShowStory(false); onOpenBooking(); }} className="mt-8 inline-flex items-center gap-8 bg-[#20221f] px-6 py-4 font-ui text-[9px] uppercase tracking-[0.22em] text-white">Reserve the villa <ArrowRight className="h-4 w-4" /></button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
