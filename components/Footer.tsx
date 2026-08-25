"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin, Lock, Facebook, Phone } from "lucide-react";
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
            <span className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-gold-600 font-semibold block font-ui mt-0.5">
              THALPE NORTH • UNAWATUNA • GALLE
            </span>
          </div>
        </div>

        {/* 2. Social & OTA Booking Icons (Centered responsive pills) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
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
            <span className="text-xs font-bold tracking-tight font-ui">Booking.com</span>
          </a>

          {/* Airbnb Official Icon */}
          <a
            href={VILLA_DATA.social.airbnb}
            target="_blank"
            rel="noreferrer"
            aria-label="Airbnb Official Listing"
            title="Book on Airbnb"
            className="h-10 px-3.5 rounded-full bg-[#FF5A5F] hover:bg-[#e0484d] text-white flex items-center justify-center gap-1.5 transition-all shadow-xs group"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836 1.88 4.382.49 9.387-3.327 11.233-1.428.69-3.003.887-4.577.581-2.023-.393-3.63-1.682-4.48-3.036-.85 1.354-2.457 2.643-4.48 3.036-1.574.306-3.149.109-4.577-.581-3.817-1.846-5.207-6.851-3.327-11.233.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.398 0-2.392.684-3.414 2.508l-.517.994c-1.93 3.784-6.06 12.434-7.018 14.665-1.48 3.45-.457 7.378 2.527 8.82 1.077.52 2.261.666 3.447.435 1.996-.388 3.655-2.008 4.095-3.692.176-.673.804-1.144 1.498-1.144.694 0 1.322.471 1.498 1.144.44 1.684 2.099 3.304 4.095 3.692 1.186.231 2.37.085 3.447-.435 2.984-1.442 4.007-5.37 2.527-8.82-.958-2.231-5.088-10.881-7.018-14.665l-.517-.994C18.392 3.684 17.398 3 16 3zm0 7c2.209 0 4 1.791 4 4 0 1.942-1.385 3.562-3.23 3.931l-.27.039-.5-.035C13.844 17.587 12 15.65 12 14c0-2.209 1.791-4 4-4zm0 2c-1.105 0-2 .895-2 2 0 .963.681 1.767 1.586 1.954l.164.026.25.02c1.105 0 2-.895 2-2s-.895-2-2-2z"/>
            </svg>
            <span className="text-xs font-bold tracking-tight font-ui">Airbnb</span>
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
        <nav className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-charcoal-700 font-ui">
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

        {/* 5. GET IN TOUCH Section with Modern Professional Lining Typography */}
        <div className="pt-2 flex flex-col items-center space-y-3 w-full">
          <span className="text-[11px] font-bold tracking-[0.25em] text-gold-600 uppercase font-ui">
            DIRECT HOST RESERVATIONS — M. MANGALA
          </span>
          
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-2xl">
            {VILLA_DATA.phones.map((p, idx) => (
              <a
                key={idx}
                href={`tel:${p.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sand-50 border border-sand-300/80 hover:border-gold-400 hover:bg-gold-50/50 font-ui font-semibold text-xs sm:text-sm text-charcoal-900 hover:text-gold-700 tracking-wider transition-all shadow-2xs group"
              >
                <Phone className="w-3 h-3 text-gold-600 group-hover:scale-110 transition-transform" />
                <span className="font-mono">{p}</span>
              </a>
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
