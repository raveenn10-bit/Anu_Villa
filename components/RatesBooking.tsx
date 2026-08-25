"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MessageCircle,
  Users,
  Check,
  Phone,
  ShieldCheck,
  Coins
} from "lucide-react";
import { VILLA_DATA } from "@/data/villaData";

interface RatesBookingProps {
  onOpenBookingModal: () => void;
}

export default function RatesBooking({ onOpenBookingModal }: RatesBookingProps) {
  const [currency, setCurrency] = useState<"USD" | "LKR" | "EUR" | "GBP" | "AUD">("USD");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(4);
  const [nights, setNights] = useState(2);

  const currInfo = VILLA_DATA.pricing.currencies[currency];
  const nightlyRate = Math.round(VILLA_DATA.pricing.baseNightlyRateUSD * currInfo.rate);
  const totalPrice = nightlyRate * nights;

  const handleDateChange = (inDate: string, outDate: string) => {
    setCheckIn(inDate);
    setCheckOut(outDate);
    if (inDate && outDate) {
      const d1 = new Date(inDate);
      const d2 = new Date(outDate);
      const diffTime = Math.abs(d2.getTime() - d1.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays > 0) {
        setNights(diffDays);
      }
    }
  };

  const handleWhatsAppBooking = () => {
    const text = `Hello Anu Villa! 🏡\nI would like to enquire about booking Anu Villa, Unawatuna.\n\n📅 Check-in: ${checkIn || "Flexible"}\n📅 Check-out: ${checkOut || "Flexible"}\n🌙 Nights: ${nights}\n👥 Guests: ${guests}\n💰 Currency: ${currency}\n\nPlease confirm availability and total rate. Thank you!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${VILLA_DATA.whatsappNumber}?text=${encoded}`, "_blank");
  };

  const handleDirectCall = (phone: string) => {
    window.open(`tel:${phone.replace(/\s+/g, "")}`, "_self");
  };

  return (
    <section id="rates" className="py-16 lg:py-24 bg-white dark:bg-[#0E1612] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Mockup Match: Ready to Enjoy Your Stay Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-sand-50 dark:bg-tropical-deep rounded-2xl sm:rounded-3xl border border-sand-200 dark:border-white/10 p-6 sm:p-8 shadow-sm dark:shadow-black/30 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gold-100 dark:bg-tropical-surface text-gold-600 dark:text-gold-400 flex items-center justify-center shrink-0 border border-gold-200/80 dark:border-gold-500/30">
              <Calendar className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900 dark:text-white leading-snug">
                Ready to Enjoy Your Stay?
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-500 dark:text-charcoal-400 mt-0.5">
                Book your stay at Anu Villa and create unforgettable memories.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenBookingModal}
              className="flex-1 md:flex-initial bg-gold-500 hover:bg-gold-600 dark:bg-gold-600 dark:hover:bg-gold-500 text-white px-6 py-3 rounded-xl font-medium text-sm shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleWhatsAppBooking}
              className="flex-1 md:flex-initial border border-emerald-600 dark:border-emerald-500 bg-white dark:bg-tropical-surface hover:bg-emerald-50 dark:hover:bg-tropical-card text-emerald-700 dark:text-emerald-400 px-6 py-3 rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600 dark:fill-emerald-400 text-emerald-600 dark:text-emerald-400" />
              <span>WhatsApp Us</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Live Interactive Pricing & Booking Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Rates Table & Benefits */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-[0.25em] text-gold-600 dark:text-gold-400 uppercase">
                DIRECT VILLA RATES
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-900 dark:text-white font-bold">
                Exclusive Direct Booking Rates
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
                Book direct with Anu Villa management to enjoy guaranteed best price, no booking platform commissions, and complimentary personalized host services.
              </p>
            </div>

            {/* Currency Switcher */}
            <div className="p-4 bg-sand-50 dark:bg-tropical-deep rounded-2xl border border-sand-200 dark:border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-charcoal-600 dark:text-charcoal-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Coins className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" /> Select Currency
                </span>
                <span className="text-[11px] text-charcoal-400 dark:text-charcoal-500">Live exchange estimate</span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {(["USD", "LKR", "EUR", "GBP", "AUD"] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`py-2 px-1 rounded-xl text-xs font-bold transition-all ${
                      currency === curr
                        ? "bg-gold-500 dark:bg-gold-600 text-white shadow-sm"
                        : "bg-white dark:bg-tropical-surface text-charcoal-700 dark:text-charcoal-300 hover:bg-sand-200 dark:hover:bg-tropical-card border border-sand-200 dark:border-white/5"
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            {/* Inclusions checklist */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-400 dark:text-charcoal-500">
                What’s Included in Your Villa Stay:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "Exclusive Use of Whole 4-Bedroom Villa",
                  "Private Outdoor Swimming Pool",
                  "2 Fully Equipped Kitchens",
                  "Air Conditioned Suites with Attached Baths",
                  "Daily Housekeeping & Pool Cleaning",
                  "High-speed 100Mbps Wi-Fi",
                  "Complimentary Tea & Coffee",
                  "24/7 On-Call Villa Concierge"
                ].map((inc, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-charcoal-700 dark:text-charcoal-300">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone Direct Contact Numbers */}
            <div className="p-4 rounded-2xl bg-gold-50/70 dark:bg-tropical-deep border border-gold-200/80 dark:border-gold-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-gold-800 dark:text-gold-400 uppercase tracking-wider block">
                  Prefer to call us directly?
                </span>
                <p className="text-xs text-charcoal-600 dark:text-charcoal-400 mt-0.5">
                  Available 24/7 for booking inquiries & special requests
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {VILLA_DATA.phones.map((phone, i) => (
                  <button
                    key={i}
                    onClick={() => handleDirectCall(phone)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-tropical-surface border border-gold-300 dark:border-gold-500/30 text-xs font-semibold text-charcoal-800 dark:text-white hover:text-gold-600 dark:hover:text-gold-400 shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
                    <span>{phone}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Instant WhatsApp Booking Engine Card */}
          <div className="lg:col-span-6">
            <div className="bg-sand-50/80 dark:bg-tropical-deep border border-sand-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl dark:shadow-black/50 relative">
              <div className="flex items-center justify-between pb-4 border-b border-sand-200 dark:border-white/10">
                <div>
                  <span className="text-xs font-semibold text-gold-600 dark:text-gold-400 uppercase tracking-wider">
                    Whole Villa Booking
                  </span>
                  <h3 className="font-serif text-xl font-bold text-charcoal-900 dark:text-white">
                    Calculate & Reserve
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-gold-600 dark:text-gold-400 font-serif">
                    {currInfo.symbol} {nightlyRate.toLocaleString()}
                  </span>
                  <span className="text-xs text-charcoal-400 dark:text-charcoal-500 block font-normal">/ night</span>
                </div>
              </div>

              {/* Form Controls */}
              <div className="py-6 space-y-4">
                {/* Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 dark:text-charcoal-300 mb-1">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => handleDateChange(e.target.value, checkOut)}
                      className="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-tropical-surface border border-sand-300 dark:border-white/10 text-xs text-charcoal-800 dark:text-white focus:outline-none focus:border-gold-500 shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 dark:text-charcoal-300 mb-1">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => handleDateChange(checkIn, e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-tropical-surface border border-sand-300 dark:border-white/10 text-xs text-charcoal-800 dark:text-white focus:outline-none focus:border-gold-500 shadow-xs"
                    />
                  </div>
                </div>

                {/* Guests & Nights Slider */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 dark:text-charcoal-300 mb-1">
                      Number of Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-tropical-surface border border-sand-300 dark:border-white/10 text-xs text-charcoal-800 dark:text-white focus:outline-none focus:border-gold-500 shadow-xs"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 dark:text-charcoal-300 mb-1">
                      Total Nights
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setNights(Math.max(1, nights - 1))}
                        className="w-9 h-9 rounded-lg bg-white dark:bg-tropical-surface border border-sand-300 dark:border-white/10 text-charcoal-700 dark:text-white font-bold hover:bg-sand-100 dark:hover:bg-tropical-card flex items-center justify-center text-sm"
                      >
                        -
                      </button>
                      <span className="flex-1 text-center font-bold text-charcoal-900 dark:text-white text-sm">
                        {nights} {nights === 1 ? "Night" : "Nights"}
                      </span>
                      <button
                        onClick={() => setNights(nights + 1)}
                        className="w-9 h-9 rounded-lg bg-white dark:bg-tropical-surface border border-sand-300 dark:border-white/10 text-charcoal-700 dark:text-white font-bold hover:bg-sand-100 dark:hover:bg-tropical-card flex items-center justify-center text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Price Breakdown Box */}
                <div className="p-4 bg-white dark:bg-tropical-surface rounded-2xl border border-sand-200 dark:border-white/10 space-y-2 mt-4">
                  <div className="flex justify-between text-xs text-charcoal-600 dark:text-charcoal-300">
                    <span>
                      {currInfo.symbol} {nightlyRate.toLocaleString()} × {nights} {nights === 1 ? "night" : "nights"}
                    </span>
                    <span>{currInfo.symbol} {totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    <span>Direct Booking Discount</span>
                    <span>FREE Amenities Included</span>
                  </div>
                  <div className="pt-2 border-t border-sand-100 dark:border-white/10 flex justify-between items-center">
                    <span className="text-sm font-bold text-charcoal-900 dark:text-white">Estimated Total:</span>
                    <span className="font-serif text-xl font-bold text-gold-600 dark:text-gold-400">
                      {currInfo.symbol} {totalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Direct Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsAppBooking}
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 rounded-xl font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 mt-4"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Instant Reserve on WhatsApp</span>
                </motion.button>

                <p className="text-[11px] text-center text-charcoal-400 dark:text-charcoal-500 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  No instant charge • Direct contact with villa host
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
