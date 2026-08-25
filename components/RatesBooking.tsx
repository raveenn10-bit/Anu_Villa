"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MessageCircle,
  Users,
  Check,
  Phone,
  ShieldCheck,
  Coins,
  Sparkles,
  Award,
  Clock,
  Waves,
  Utensils,
  Flame,
  Wifi,
  ArrowRight,
  Info,
  BadgePercent,
  MapPin,
} from "lucide-react";
import { VILLA_DATA } from "@/data/villaData";

interface RatesBookingProps {
  onOpenBookingModal: () => void;
}

const formatDateForInput = (d: Date) => {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const addDays = (dateStr: string, days: number) => {
  const d = new Date(dateStr + "T12:00:00");
  d.setDate(d.getDate() + days);
  return formatDateForInput(d);
};

export default function RatesBooking({ onOpenBookingModal }: RatesBookingProps) {
  const [currency, setCurrency] = useState<"USD" | "LKR" | "EUR" | "GBP" | "AUD">("USD");
  const [nights, setNights] = useState(2);
  const [guests, setGuests] = useState(6);

  const [checkIn, setCheckIn] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return formatDateForInput(tomorrow);
  });

  const [checkOut, setCheckOut] = useState(() => {
    const dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 3); // 2 nights default
    return formatDateForInput(dayAfter);
  });

  const currInfo = VILLA_DATA.pricing.currencies[currency];
  const nightlyRate = Math.round(VILLA_DATA.pricing.baseNightlyRateUSD * currInfo.rate);
  const totalPrice = nightlyRate * nights;

  const handleCheckInChange = (newCheckIn: string) => {
    setCheckIn(newCheckIn);
    if (!newCheckIn) return;
    const d1 = new Date(newCheckIn + "T12:00:00");
    const d2 = new Date(checkOut + "T12:00:00");
    if (d2 <= d1) {
      setCheckOut(addDays(newCheckIn, nights));
    } else {
      const diffDays = Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
      setNights(Math.max(1, diffDays));
    }
  };

  const handleCheckOutChange = (newCheckOut: string) => {
    setCheckOut(newCheckOut);
    if (!newCheckOut || !checkIn) return;
    const d1 = new Date(checkIn + "T12:00:00");
    const d2 = new Date(newCheckOut + "T12:00:00");
    if (d2 <= d1) {
      const adjusted = addDays(checkIn, 1);
      setCheckOut(adjusted);
      setNights(1);
    } else {
      const diffDays = Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
      setNights(Math.max(1, diffDays));
    }
  };

  const handleNightsChange = (newNights: number) => {
    const valid = Math.max(1, newNights);
    setNights(valid);
    if (checkIn) {
      setCheckOut(addDays(checkIn, valid));
    }
  };

  const handleWhatsAppBooking = () => {
    const text = `Hello M. Mangala! 🏡\nI'm inquiring to book ${VILLA_DATA.officialName} in Thalpe, Unawatuna.\n\n📅 Check-in: ${checkIn || "Flexible"}\n📅 Check-out: ${checkOut || "Flexible"}\n🌙 Duration: ${nights} ${nights === 1 ? "Night" : "Nights"}\n👥 Guests: ${guests} Guests (Whole 6-Room Villa)\n💰 Rate: ${currInfo.symbol}${totalPrice.toLocaleString()} (${currency})\n\nPlease confirm availability and payment details. Thank you!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${VILLA_DATA.whatsappNumber}?text=${encoded}`, "_blank");
  };

  const handleDirectCall = (phone: string) => {
    window.open(`tel:${phone.replace(/\s+/g, "")}`, "_self");
  };

  const directPerks = [
    {
      icon: BadgePercent,
      title: "Guaranteed Best Price ($140/nt)",
      desc: "Save up to 20% compared to third-party OTA commission markups.",
    },
    {
      icon: Users,
      title: "Entire 6-Room Villa (Up to 12 Guests)",
      desc: "Zero extra person fees — exclusive private property access.",
    },
    {
      icon: Flame,
      title: "Complimentary BBQ & Pool Access",
      desc: "Full private swimming pool & garden barbecue grill equipment.",
    },
    {
      icon: ShieldCheck,
      title: "Direct Host Support with M. Mangala",
      desc: "Instant assistance for scooter rentals, airport transfers & tours.",
    },
  ];

  return (
    <section id="rates" className="py-20 lg:py-28 bg-gradient-to-b from-white via-sand-50/60 to-white relative overflow-hidden">
      
      {/* Background Subtle Luxury Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gold-200/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[400px] bg-ocean-300/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100/70 border border-gold-200 text-gold-800 text-xs font-semibold tracking-widest uppercase font-sans">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>TRANSPARENT DIRECT VILLA RATES</span>
          </div>
          
          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-[52px] text-charcoal-950 font-normal leading-[1.08] tracking-[-0.02em]">
            Luxury Stay Without <span className="font-editorial italic text-gold-600">Hidden Fees</span>
          </h2>
          
          <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto font-normal">
            Enjoy the entire 6-bedroom villa with private pool, kitchen, and garden in Thalpe North for a fixed direct rate of <strong className="text-charcoal-900 font-semibold">$140 USD per night</strong> for up to 12 guests.
          </p>
        </div>

        {/* Main Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Booking Benefits & Currency Selector */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            
            {/* Currency Pill Bar */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-sand-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-charcoal-800 uppercase tracking-wider flex items-center gap-2">
                  <Coins className="w-4 h-4 text-gold-600" /> Choose Preferred Currency
                </span>
                <span className="text-[11px] text-charcoal-400 font-sans">Updated live exchange</span>
              </div>

              <div className="grid grid-cols-5 gap-2 pt-1">
                {(["USD", "LKR", "EUR", "GBP", "AUD"] as const).map((curr) => {
                  const isSelected = currency === curr;
                  const info = VILLA_DATA.pricing.currencies[curr];
                  return (
                    <button
                      key={curr}
                      onClick={() => setCurrency(curr)}
                      className={`py-2.5 px-2 rounded-2xl text-xs font-bold transition-all duration-200 flex flex-col items-center gap-0.5 ${
                        isSelected
                          ? "bg-gold-500 text-white shadow-md shadow-gold-500/25 scale-[1.03]"
                          : "bg-sand-50 hover:bg-sand-100 text-charcoal-700 border border-sand-200/80"
                      }`}
                    >
                      <span className="text-xs font-bold">{curr}</span>
                      <span className={`text-[10px] font-normal ${isSelected ? "text-gold-100" : "text-charcoal-400"}`}>
                        {info.symbol}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Direct Booking Perks Bento Cards */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold tracking-[0.2em] text-charcoal-400 uppercase font-sans">
                WHY BOOK DIRECT WITH ANU VILLA:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {directPerks.map((perk, idx) => {
                  const Icon = perk.icon;
                  const isOceanBreeze = idx === 2; // Complimentary BBQ & Pool
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -3 }}
                      className="p-4 rounded-2xl bg-white border border-sand-200/80 shadow-2xs hover:border-gold-300 hover:shadow-md transition-all flex items-start gap-3"
                    >
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                          isOceanBreeze
                            ? "bg-ocean-plate-1 border border-[#7FCDFF] text-[#0E3048]"
                            : "bg-gold-50 border border-gold-200/80 text-gold-600"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-semibold text-xs sm:text-sm text-charcoal-900 leading-snug">
                          {perk.title}
                        </h4>
                        <p className="text-[11px] text-charcoal-500 leading-relaxed font-sans">
                          {perk.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Host Direct Contact Banner */}
            <div className="bg-gradient-to-br from-gold-50/90 via-sand-50 to-white rounded-3xl p-6 border border-gold-200/70 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gold-500 text-white font-serif font-bold text-lg flex items-center justify-center shadow-sm shrink-0">
                    MM
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold-700 block">
                      VILLA HOST
                    </span>
                    <h4 className="font-serif text-lg font-bold text-charcoal-900 leading-tight">
                      M. Mangala
                    </h4>
                    <p className="text-xs text-charcoal-500 font-sans">
                      Available 24/7 for booking inquiries &amp; special arrangements
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold self-start sm:self-auto">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Direct Host Rates</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                {VILLA_DATA.phones.map((phone, i) => (
                  <button
                    key={i}
                    onClick={() => handleDirectCall(phone)}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-gold-200/90 text-xs font-semibold text-charcoal-800 hover:text-gold-700 hover:border-gold-400 hover:bg-gold-50/40 shadow-2xs transition-all font-ui"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span className="whitespace-nowrap font-mono tracking-tight">{phone}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: High-End Live Interactive Booking Engine Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sand-300/80 shadow-2xl shadow-charcoal-900/8 relative overflow-hidden">
              
              {/* Top Accent Strip */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />

              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-sand-200 gap-3">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-600 font-sans block">
                    EXCLUSIVE WHOLE PROPERTY HIRE
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-charcoal-950">
                    Reserve Entire Villa
                  </h3>
                  <p className="text-xs text-charcoal-500 font-sans">
                    6 en-suite A/C bedrooms • Private swimming pool • Kitchen &amp; BBQ
                  </p>
                </div>

                <div className="sm:text-right bg-sand-50 sm:bg-transparent p-3 sm:p-0 rounded-2xl border sm:border-0 border-sand-200">
                  <div className="flex items-baseline sm:justify-end gap-1.5">
                    <span className="font-ui text-3xl sm:text-4xl font-bold text-charcoal-950 tracking-tight">
                      {currInfo.symbol}{nightlyRate.toLocaleString()}
                    </span>
                    <span className="text-xs text-charcoal-500 font-sans font-medium">/ night</span>
                  </div>
                  <span className="text-[11px] text-emerald-700 font-semibold block mt-0.5">
                    ✓ Up to 12 Guests Included
                  </span>
                </div>
              </div>

              {/* Interactive Form Controls */}
              <div className="py-6 space-y-5">
                
                {/* Connected Date Range Picker Box */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider font-sans">
                    Select Stay Dates
                  </label>
                  <div className="grid grid-cols-2 rounded-2xl border border-sand-300 bg-sand-50/50 overflow-hidden divide-x divide-sand-300 shadow-2xs">
                    <div className="p-3">
                      <span className="text-[10px] font-bold text-charcoal-400 uppercase tracking-wider block">
                        CHECK-IN (12:00 PM)
                      </span>
                      <input
                        type="date"
                        value={checkIn}
                        min={formatDateForInput(new Date())}
                        onChange={(e) => handleCheckInChange(e.target.value)}
                        className="w-full mt-1 bg-transparent text-xs sm:text-sm font-semibold text-charcoal-900 focus:outline-none cursor-pointer"
                      />
                    </div>
                    <div className="p-3">
                      <span className="text-[10px] font-bold text-charcoal-400 uppercase tracking-wider block">
                        CHECK-OUT (10:00 AM)
                      </span>
                      <input
                        type="date"
                        value={checkOut}
                        min={checkIn || formatDateForInput(new Date())}
                        onChange={(e) => handleCheckOutChange(e.target.value)}
                        className="w-full mt-1 bg-transparent text-xs sm:text-sm font-semibold text-charcoal-900 focus:outline-none cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Guests & Nights Selector Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Guests */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider font-sans">
                      Guests (Max 12)
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full px-3.5 py-3 rounded-2xl bg-sand-50 border border-sand-300 text-xs sm:text-sm font-medium text-charcoal-900 focus:outline-none focus:border-gold-500 cursor-pointer shadow-2xs"
                    >
                      {[2, 4, 6, 8, 10, 12].map((num) => (
                        <option key={num} value={num}>
                          {num} Guests ({num <= 2 ? "1-2 Rooms" : num <= 6 ? "3-4 Rooms" : "All 6 Rooms"})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Nights Stepper */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider font-sans">
                      Duration
                    </label>
                    <div className="flex items-center rounded-2xl border border-sand-300 bg-sand-50 p-1 shadow-2xs">
                      <button
                        type="button"
                        onClick={() => handleNightsChange(nights - 1)}
                        className="w-10 h-10 rounded-xl bg-white hover:bg-sand-100 text-charcoal-800 font-bold border border-sand-200 shadow-2xs flex items-center justify-center text-base transition-colors"
                      >
                        -
                      </button>
                      <span className="flex-1 text-center font-ui font-mono font-bold text-charcoal-950 text-sm sm:text-base">
                        {nights} {nights === 1 ? "Night" : "Nights"}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleNightsChange(nights + 1)}
                        className="w-10 h-10 rounded-xl bg-white hover:bg-sand-100 text-charcoal-800 font-bold border border-sand-200 shadow-2xs flex items-center justify-center text-base transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Transparent Price Summary Ledger */}
                <div className="rounded-2xl bg-sand-50 border border-sand-200 p-4 space-y-2.5 font-sans">
                  <div className="flex justify-between text-xs text-charcoal-700">
                    <span>
                      {currInfo.symbol}{nightlyRate.toLocaleString()} × {nights} {nights === 1 ? "night" : "nights"}
                    </span>
                    <span className="font-ui font-mono font-bold text-charcoal-900">
                      {currInfo.symbol}{totalPrice.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between text-xs text-charcoal-700">
                    <span>6 Private Attached Bathrooms &amp; A/C</span>
                    <span className="font-semibold text-emerald-700">Included ($0)</span>
                  </div>

                  <div className="flex justify-between text-xs text-charcoal-700">
                    <span>Swimming Pool, Kitchen &amp; BBQ Use</span>
                    <span className="font-semibold text-emerald-700">Included ($0)</span>
                  </div>

                  <div className="flex justify-between text-xs text-charcoal-700">
                    <span>Third-Party Platform Booking Fees</span>
                    <span className="font-semibold text-emerald-700">WAIVED ($0)</span>
                  </div>

                  <div className="pt-3 border-t border-sand-200 flex justify-between items-baseline">
                    <div>
                      <span className="text-sm font-bold text-charcoal-950 block">Guaranteed Total:</span>
                      <span className="text-[11px] text-charcoal-400 font-normal">No hidden fees or extra person tax</span>
                    </div>
                    <span className="font-ui font-mono text-2xl sm:text-3xl font-bold text-gold-700 tracking-tight">
                      {currInfo.symbol}{totalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Direct Action Button with Official WhatsApp Icon */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsAppBooking}
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-4 rounded-2xl font-semibold text-sm sm:text-base shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.75 7.85 19L7.55 18.82L4.43 19.64L5.26 16.59L5.06 16.27C4.24 14.97 3.8 13.46 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.57 14.39C16.32 14.26 15.1 13.66 14.87 13.58C14.65 13.5 14.49 13.46 14.32 13.71C14.16 13.96 13.69 14.51 13.54 14.68C13.4 14.84 13.25 14.86 13 14.74C12.75 14.61 11.95 14.35 11 13.51C10.26 12.85 9.76 12.04 9.61 11.79C9.47 11.54 9.6 11.4 9.72 11.28C9.83 11.17 9.97 10.99 10.1 10.84C10.22 10.7 10.26 10.59 10.34 10.43C10.42 10.26 10.38 10.12 10.32 10C10.26 9.87 9.76 8.65 9.56 8.14C9.36 7.65 9.15 7.71 9 7.71C8.86 7.7 8.7 7.7 8.53 7.7C8.37 7.7 8.1 7.76 7.87 8.01C7.65 8.26 7.02 8.85 7.02 10.05C7.02 11.25 7.9 12.4 8.02 12.57C8.14 12.73 9.74 15.2 12.21 16.27C12.8 16.52 13.26 16.67 13.61 16.79C14.2 16.97 14.74 16.95 15.17 16.88C15.65 16.81 16.64 16.28 16.85 15.7C17.05 15.11 17.05 14.61 16.99 14.51C16.93 14.41 16.82 14.51 16.57 14.39Z" />
                  </svg>
                  <span>Instant Reserve on WhatsApp — Host M. Mangala</span>
                </motion.button>

                {/* OTA & Google Maps Alternative Links */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-0.5">
                  <a
                    href={VILLA_DATA.social.bookingCom}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#003580] hover:bg-[#00224f] text-white py-3 px-2.5 rounded-2xl font-semibold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5 group font-ui"
                  >
                    <span className="font-extrabold text-sm tracking-tighter text-[#00BAFC]">B.</span>
                    <span>Booking.com</span>
                  </a>

                  <a
                    href={VILLA_DATA.social.airbnb}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#FF5A5F] hover:bg-[#e0484d] text-white py-3 px-2.5 rounded-2xl font-semibold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5 group font-ui"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836 1.88 4.382.49 9.387-3.327 11.233-1.428.69-3.003.887-4.577.581-2.023-.393-3.63-1.682-4.48-3.036-.85 1.354-2.457 2.643-4.48 3.036-1.574.306-3.149.109-4.577-.581-3.817-1.846-5.207-6.851-3.327-11.233.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.398 0-2.392.684-3.414 2.508l-.517.994c-1.93 3.784-6.06 12.434-7.018 14.665-1.48 3.45-.457 7.378 2.527 8.82 1.077.52 2.261.666 3.447.435 1.996-.388 3.655-2.008 4.095-3.692.176-.673.804-1.144 1.498-1.144.694 0 1.322.471 1.498 1.144.44 1.684 2.099 3.304 4.095 3.692 1.186.231 2.37.085 3.447-.435 2.984-1.442 4.007-5.37 2.527-8.82-.958-2.231-5.088-10.881-7.018-14.665l-.517-.994C18.392 3.684 17.398 3 16 3zm0 7c2.209 0 4 1.791 4 4 0 1.942-1.385 3.562-3.23 3.931l-.27.039-.5-.035C13.844 17.587 12 15.65 12 14c0-2.209 1.791-4 4-4zm0 2c-1.105 0-2 .895-2 2 0 .963.681 1.767 1.586 1.954l.164.026.25.02c1.105 0 2-.895 2-2s-.895-2-2-2z"/>
                    </svg>
                    <span>Airbnb</span>
                  </a>

                  <a
                    href={VILLA_DATA.social.googleMaps}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3 px-2.5 rounded-2xl font-semibold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5 group font-ui"
                  >
                    <MapPin className="w-3.5 h-3.5 text-emerald-200 shrink-0" />
                    <span>Google Maps</span>
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-1 text-[11px] text-charcoal-500">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified Host Direct
                  </span>
                  <span>•</span>
                  <span>⚡ Instant Reply</span>
                  <span>•</span>
                  <span>🏖️ 1.5 km to Thalpe Beach</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
