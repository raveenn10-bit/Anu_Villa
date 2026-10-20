"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavbarProps { onOpenBooking: () => void }

const links = [
  ["The Villa", "about"],
  ["Rooms", "facilities"],
  ["Gallery", "gallery"],
  ["Rates", "rates"],
  ["Location", "contact"],
];

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 h-[76px] border-b transition-all duration-500 lg:h-[88px] ${scrolled ? "border-black/10 bg-[#f5f1e8]/95 backdrop-blur-xl" : "border-black/10 bg-[#f5f1e8]"}`}>
        <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href="#home" className="group leading-none">
            <span className="block font-cinzel text-lg font-medium tracking-[0.26em] text-[#161814] sm:text-xl">M.S.A ANU VILLA</span>
            <span className="mt-1.5 block font-ui text-[8px] font-medium uppercase tracking-[0.36em] text-[#9c6c32]">Unawatuna · Galle</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex xl:gap-10">
            {links.map(([name, id]) => (
              <Link key={id} href={`#${id}`} className="font-ui text-[10px] font-medium uppercase tracking-[0.18em] text-[#494c47] transition-colors hover:text-[#9c6c32]">{name}</Link>
            ))}
          </nav>

          <button onClick={onOpenBooking} className="group hidden items-center gap-7 bg-[#20221f] px-6 py-3.5 font-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#9c6c32] lg:inline-flex">
            Book your stay <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>

          <button onClick={() => setOpen(true)} aria-label="Open menu" className="flex h-11 w-11 items-center justify-center border border-black/15 text-[#20221f] lg:hidden"><Menu className="h-5 w-5" /></button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }} className="fixed inset-0 z-[60] flex flex-col bg-[#20221f] p-6 text-white">
            <div className="flex items-center justify-between border-b border-white/15 pb-6">
              <div><span className="font-cinzel tracking-[0.24em]">M.S.A ANU VILLA</span><span className="mt-2 block font-ui text-[8px] uppercase tracking-[0.32em] text-[#d4a663]">Unawatuna · Galle</span></div>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="flex h-11 w-11 items-center justify-center border border-white/20"><X className="h-5 w-5" /></button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-3">
              {links.map(([name, id], index) => (
                <Link key={id} href={`#${id}`} onClick={() => setOpen(false)} className="flex items-end gap-4 border-b border-white/10 py-3 font-display text-[clamp(2.5rem,11vw,4rem)] font-light leading-none">
                  <span className="mb-1 font-ui text-[9px] text-[#d4a663]">0{index + 1}</span>{name}
                </Link>
              ))}
            </nav>
            <button onClick={() => { setOpen(false); onOpenBooking(); }} className="flex w-full items-center justify-between border border-[#d4a663] px-5 py-4 font-ui text-[10px] uppercase tracking-[0.22em] text-[#e6c28d]">Book your stay <ArrowUpRight className="h-4 w-4" /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
