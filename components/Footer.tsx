"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Lock, Facebook, Youtube, Instagram } from "lucide-react";
import { VILLA_DATA } from "@/data/villaData";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0A100C] text-charcoal-800 dark:text-charcoal-200 pt-16 pb-12 transition-colors duration-300 border-t border-sand-200 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-7">
        
        {/* 1. Brand Logo & Name */}
        <div className="flex flex-col items-center space-y-2">
          <div className="relative w-14 h-14 rounded-full overflow-hidden bg-white dark:bg-tropical-deep border border-gold-300 dark:border-gold-500/40 p-0.5 shadow-sm">
            <Image
              src="/images/logo.png"
              alt="Anu Villa"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-widest text-charcoal-900 dark:text-white uppercase">
              ANU VILLA
            </h3>
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold-600 dark:text-gold-400 font-semibold block">
              UNAWATUNA • GALLE
            </span>
          </div>
        </div>

        {/* 2. Social & Contact Icons (Centered circular buttons) */}
        <div className="flex items-center justify-center gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 rounded-full bg-sand-50 dark:bg-tropical-surface border border-sand-300 dark:border-white/15 text-charcoal-700 dark:text-charcoal-300 hover:text-gold-600 dark:hover:text-gold-400 hover:border-gold-400 flex items-center justify-center transition-all shadow-xs"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full bg-sand-50 dark:bg-tropical-surface border border-sand-300 dark:border-white/15 text-charcoal-700 dark:text-charcoal-300 hover:text-gold-600 dark:hover:text-gold-400 hover:border-gold-400 flex items-center justify-center transition-all shadow-xs"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="w-10 h-10 rounded-full bg-sand-50 dark:bg-tropical-surface border border-sand-300 dark:border-white/15 text-charcoal-700 dark:text-charcoal-300 hover:text-gold-600 dark:hover:text-gold-400 hover:border-gold-400 flex items-center justify-center transition-all shadow-xs"
          >
            <Youtube className="w-4 h-4" />
          </a>
          <a
            href={`https://wa.me/${VILLA_DATA.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="w-10 h-10 rounded-full bg-sand-50 dark:bg-tropical-surface border border-sand-300 dark:border-white/15 text-[#25D366] hover:bg-emerald-50 dark:hover:bg-tropical-card flex items-center justify-center transition-all shadow-xs"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
          </a>
        </div>

        {/* 3. Main Navigation Links (Centered uppercase) */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-charcoal-700 dark:text-charcoal-300">
          <Link href="#home" className="hover:text-gold-600 dark:hover:text-gold-400 transition-colors">HOME</Link>
          <Link href="#about" className="hover:text-gold-600 dark:hover:text-gold-400 transition-colors">ABOUT US</Link>
          <Link href="#facilities" className="hover:text-gold-600 dark:hover:text-gold-400 transition-colors">ROOMS &amp; FACILITIES</Link>
          <Link href="#gallery" className="hover:text-gold-600 dark:hover:text-gold-400 transition-colors">GALLERY</Link>
          <Link href="#rates" className="hover:text-gold-600 dark:hover:text-gold-400 transition-colors">RATES</Link>
          <Link href="#nearby" className="hover:text-gold-600 dark:hover:text-gold-400 transition-colors">NEARBY PLACES</Link>
          <Link href="#contact" className="hover:text-gold-600 dark:hover:text-gold-400 transition-colors">CONTACT</Link>
        </nav>

        {/* 4. Villa Features Tagline Row */}
        <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xs text-charcoal-500 dark:text-charcoal-400 max-w-3xl leading-relaxed">
          <span>4 A/C Bedrooms</span>
          <span className="text-gold-500">•</span>
          <span>4 Attached Bathrooms</span>
          <span className="text-gold-500">•</span>
          <span>Private Outdoor Swimming Pool</span>
          <span className="text-gold-500">•</span>
          <span>2 Fully Equipped Kitchens</span>
          <span className="text-gold-500">•</span>
          <span>Spacious Living &amp; Dining</span>
          <span className="text-gold-500">•</span>
          <span>Peaceful Garden Sanctuary</span>
        </div>

        {/* 5. GET IN TOUCH Section */}
        <div className="pt-2 flex flex-col items-center space-y-1.5">
          <span className="text-[11px] font-bold tracking-[0.25em] text-gold-600 dark:text-gold-400 uppercase">
            GET IN TOUCH!
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <a
              href="tel:+94764526021"
              className="font-serif text-lg sm:text-2xl font-bold text-charcoal-900 dark:text-white hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
            >
              +94 76 452 6021
            </a>
            <span className="text-charcoal-400 text-lg font-light">/</span>
            <a
              href="tel:+94775183955"
              className="font-serif text-lg sm:text-2xl font-bold text-charcoal-900 dark:text-white hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
            >
              +94 77 518 3955
            </a>
          </div>
          <p className="text-xs text-charcoal-500 dark:text-charcoal-400 flex items-center justify-center gap-1.5 pt-1">
            <MapPin className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
            <span>Address: Unawatuna, Galle, Southern Province, Sri Lanka</span>
          </p>
        </div>

        {/* 6. Divider Line */}
        <div className="w-full max-w-4xl h-[1px] bg-sand-300 dark:bg-white/10 my-2" />

        {/* 7. Copyright Bottom */}
        <div className="flex items-center justify-center gap-2 text-xs text-charcoal-500 dark:text-charcoal-400 pb-2">
          <span>Copyright © {new Date().getFullYear()} Anu Villa Unawatuna. All Rights Reserved.</span>
          <Lock className="w-3 h-3 text-charcoal-400 dark:text-charcoal-500" />
        </div>

      </div>
    </footer>
  );
}
