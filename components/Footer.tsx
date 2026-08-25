"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin, Lock, Facebook } from "lucide-react";
import { VILLA_DATA } from "@/data/villaData";

export default function Footer() {
  return (
    <footer className="bg-white text-charcoal-800 pt-16 pb-12 transition-colors duration-300 border-t border-sand-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-7">
        
        {/* 1. Brand Logo & Name */}
        <div className="flex flex-col items-center space-y-2">
          <div className="relative w-14 h-14 rounded-full overflow-hidden bg-white border border-gold-300 p-0.5 shadow-sm">
            <Image
              src="/images/logo.png"
              alt="M.S.A Anu Villa"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-widest text-charcoal-900 uppercase">
              {VILLA_DATA.officialName}
            </h3>
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold-600 font-semibold block font-ui">
              THALPE NORTH • UNAWATUNA • GALLE
            </span>
          </div>
        </div>

        {/* 2. Social & OTA Booking Icons (Centered circular buttons) */}
        <div className="flex items-center justify-center gap-3">
          {/* Booking.com Official Icon */}
          <a
            href={VILLA_DATA.social.bookingCom}
            target="_blank"
            rel="noreferrer"
            aria-label="Booking.com Official Listing"
            title="Book on Booking.com"
            className="h-10 px-3.5 rounded-full bg-[#003580] hover:bg-[#00224f] text-white flex items-center justify-center gap-1.5 transition-all shadow-xs group"
          >
            <span className="font-extrabold text-sm tracking-tighter text-[#00BAFC]">B.</span>
            <span className="text-[11px] font-bold tracking-tight">Booking.com</span>
          </a>

          {/* Google Maps */}
          <a
            href={VILLA_DATA.social.googleMaps}
            target="_blank"
            rel="noreferrer"
            aria-label="Google Maps Location"
            title="Find on Google Maps"
            className="w-10 h-10 rounded-full bg-sand-50 border border-sand-300 text-charcoal-700 hover:text-emerald-700 hover:border-emerald-400 flex items-center justify-center transition-all shadow-xs"
          >
            <MapPin className="w-4 h-4 text-emerald-700" />
          </a>

          {/* Facebook */}
          <a
            href={VILLA_DATA.social.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook Page"
            title="Follow on Facebook"
            className="w-10 h-10 rounded-full bg-sand-50 border border-sand-300 text-charcoal-700 hover:text-blue-600 hover:border-blue-400 flex items-center justify-center transition-all shadow-xs"
          >
            <Facebook className="w-4 h-4 text-blue-600" />
          </a>

          {/* TikTok */}
          <a
            href={VILLA_DATA.social.tiktok}
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            title="Watch on TikTok"
            className="w-10 h-10 rounded-full bg-sand-50 border border-sand-300 text-charcoal-700 hover:text-charcoal-950 hover:border-charcoal-400 flex items-center justify-center transition-all shadow-xs"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68a6.34 6.34 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-3.04-1.54 4.83 4.83 0 0 1-1-3Z" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${VILLA_DATA.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp Direct Concierge"
            title="Chat on WhatsApp"
            className="w-10 h-10 rounded-full bg-sand-50 border border-sand-300 text-[#25D366] hover:bg-emerald-50 flex items-center justify-center transition-all shadow-xs"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
          </a>
        </div>

        {/* 3. Main Navigation Links (Centered uppercase) */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-charcoal-700 font-ui">
          <Link href="#home" className="hover:text-gold-600 transition-colors">HOME</Link>
          <Link href="#about" className="hover:text-gold-600 transition-colors">ABOUT US</Link>
          <Link href="#facilities" className="hover:text-gold-600 transition-colors">ROOMS &amp; FACILITIES</Link>
          <Link href="#gallery" className="hover:text-gold-600 transition-colors">GALLERY</Link>
          <Link href="#rates" className="hover:text-gold-600 transition-colors">RATES ($140)</Link>
          <Link href="#nearby" className="hover:text-gold-600 transition-colors">NEARBY PLACES</Link>
          <Link href="#contact" className="hover:text-gold-600 transition-colors">CONTACT</Link>
        </nav>

        {/* 4. Villa Features Tagline Row */}
        <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xs text-charcoal-500 max-w-3xl leading-relaxed">
          <span>6 A/C Bedrooms</span>
          <span className="text-gold-500">•</span>
          <span>6 Attached Bathrooms</span>
          <span className="text-gold-500">•</span>
          <span>Private Swimming Pool</span>
          <span className="text-gold-500">•</span>
          <span>Kitchen &amp; BBQ Facilities</span>
          <span className="text-gold-500">•</span>
          <span>Garden Sanctuary</span>
          <span className="text-gold-500">•</span>
          <span>Up to 12 Guests</span>
        </div>

        {/* 5. GET IN TOUCH Section */}
        <div className="pt-2 flex flex-col items-center space-y-2">
          <span className="text-[11px] font-bold tracking-[0.25em] text-gold-600 uppercase font-ui">
            GET IN TOUCH WITH HOST M. MANGALA
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            {VILLA_DATA.phones.map((p, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="text-charcoal-400 font-light hidden sm:inline">/</span>}
                <a
                  href={`tel:${p.replace(/\s+/g, "")}`}
                  className="font-serif text-base sm:text-xl font-bold text-charcoal-900 hover:text-gold-600 transition-colors"
                >
                  {p}
                </a>
              </React.Fragment>
            ))}
          </div>
          <p className="text-xs text-charcoal-500 flex items-center justify-center gap-1.5 pt-0.5">
            <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0" />
            <span>{VILLA_DATA.location} (1.5 km to Beach)</span>
          </p>
        </div>

        {/* 6. Divider Line */}
        <div className="w-full max-w-4xl h-[1px] bg-sand-300 my-2" />

        {/* 7. Copyright Bottom */}
        <div className="flex items-center justify-center gap-2 text-xs text-charcoal-500 pb-2">
          <span>Copyright © {new Date().getFullYear()} {VILLA_DATA.officialName}. All Rights Reserved.</span>
          <Lock className="w-3 h-3 text-charcoal-400" />
        </div>

      </div>
    </footer>
  );
}
