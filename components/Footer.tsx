"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Facebook, MapPin, MessageCircle } from "lucide-react";
import { VILLA_DATA } from "@/data/villaData";

const nav = [["The Villa", "about"], ["Rooms", "facilities"], ["Gallery", "gallery"], ["Rates", "rates"], ["Nearby", "nearby"], ["Contact", "contact"]];

export default function Footer() {
  const whatsapp = `https://wa.me/${VILLA_DATA.whatsappNumber}?text=${encodeURIComponent("Hello M.S.A Anu Villa! I would like to enquire about availability.")}`;

  return (
    <footer className="relative overflow-hidden bg-[#1f211e] px-6 pb-8 pt-24 text-white sm:px-10 lg:px-12 lg:pt-32">
      <div className="pointer-events-none absolute -right-24 -top-20 h-[520px] w-[520px] rounded-full border border-white/[0.04]" />
      <div className="pointer-events-none absolute -right-10 top-10 h-[360px] w-[360px] rounded-full border border-[#d4a663]/10" />
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-14 border-b border-white/15 pb-20 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-ui text-[9px] uppercase tracking-[0.3em] text-[#d4a663]">Your private stay in Unawatuna</p>
            <h2 className="mt-7 max-w-4xl font-display text-[clamp(4rem,9vw,9rem)] font-light leading-[0.78] tracking-[-0.055em] text-[#f5f1e8]">Make time<br />for a little <em>quiet.</em></h2>
          </div>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="group flex w-full items-center justify-between border border-[#c59152] px-6 py-5 font-ui text-[10px] uppercase tracking-[0.22em] text-[#e6c28d] transition-colors hover:bg-[#c59152] hover:text-white sm:w-[310px]">
            Enquire about your stay <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <p className="font-cinzel text-xl tracking-[0.28em] text-[#f5f1e8]">M.S.A ANU VILLA</p>
            <p className="mt-3 font-ui text-[8px] uppercase tracking-[0.32em] text-[#c59152]">Thalpe North · Unawatuna · Galle</p>
            <p className="mt-7 max-w-sm text-sm leading-7 !text-white/55">A private six-room villa for families and groups, with an exclusive swimming pool, kitchen, garden and warm local hospitality.</p>
          </div>

          <div>
            <p className="font-ui text-[9px] uppercase tracking-[0.25em] text-[#d4a663]">Explore</p>
            <nav className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3">
              {nav.map(([label, id]) => <Link key={id} href={`#${id}`} className="font-body text-sm text-white/65 transition-colors hover:text-white">{label}</Link>)}
            </nav>
          </div>

          <div>
            <p className="font-ui text-[9px] uppercase tracking-[0.25em] text-[#d4a663]">Connect</p>
            <div className="mt-6 flex gap-3">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-11 w-11 items-center justify-center border border-white/20 transition-colors hover:border-[#d4a663] hover:text-[#d4a663]"><MessageCircle className="h-4 w-4" /></a>
              <a href={VILLA_DATA.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center border border-white/20 transition-colors hover:border-[#d4a663] hover:text-[#d4a663]"><Facebook className="h-4 w-4" /></a>
              <a href={VILLA_DATA.social.googleMaps} target="_blank" rel="noopener noreferrer" aria-label="Google Maps" className="flex h-11 w-11 items-center justify-center border border-white/20 transition-colors hover:border-[#d4a663] hover:text-[#d4a663]"><MapPin className="h-4 w-4" /></a>
            </div>
            <a href={`tel:${VILLA_DATA.rawPhones[0]}`} className="mt-6 block font-display text-2xl text-[#f5f1e8]">{VILLA_DATA.phones[0]}</a>
            <p className="mt-2 !text-xs !text-white/45">Direct host reservations · M. Mangala</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/15 pt-7 font-ui text-[8px] uppercase tracking-[0.18em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p className="!text-[8px] !text-white/35">© {new Date().getFullYear()} M.S.A Anu Villa. All rights reserved.</p>
          <p className="!text-[8px] !text-white/35">Designed &amp; developed by Harsh Apex Digital Solutions</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 text-white/60 transition-colors hover:text-white">Back to top <ArrowUp className="h-3 w-3" /></button>
        </div>
      </div>
    </footer>
  );
}
