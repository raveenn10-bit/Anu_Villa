"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MessageCircle,
  Users,
  Check,
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
  Bed,
  Bath,
  Maximize2,
  Tv,
  Coffee,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  XCircle,
} from "lucide-react";
import { VILLA_DATA } from "@/data/villaData";

interface RatesBookingProps {
  onOpenBookingModal?: () => void;
}

const formatDateForInput = (d: Date) => {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const formatDisplayDate = (dateStr: string) => {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
};

const addDays = (dateStr: string, days: number) => {
  const d = new Date(dateStr + "T12:00:00");
  d.setDate(d.getDate() + days);
  return formatDateForInput(d);
};

interface RoomTier {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  isPopular?: boolean;
  sleeps: number;
  beds: string[];
  size: string;
  baseUSD: number;
  amenityTags: string[];
  breakfastLKR: number;
  breakfastUSD: number;
}

const ACCOMMODATIONS: RoomTier[] = [
  {
    id: "whole-villa",
    name: "Entire 6-Bedroom Luxury Villa",
    tagline: "Exclusive whole property reservation with private pool & gardens",
    badge: "Most Popular / Best Value",
    isPopular: true,
    sleeps: 12,
    beds: ["6 Bedrooms: 6 King / Double Four-Poster Canopy Beds with Mosquito Netting"],
    size: "280 m²",
    baseUSD: 140,
    amenityTags: [
      "Entire villa",
      "280 m²",
      "Private pool",
      "Private kitchen",
      "6 Attached bathrooms",
      "Poolside BBQ",
      "Balcony & Patio",
      "Pool view",
      "Air conditioning",
      "Free High-Speed Wifi",
      "Free Parking",
    ],
    breakfastLKR: 1316,
    breakfastUSD: 4,
  },
  {
    id: "two-bedroom-villa",
    name: "Two-Bedroom Villa Suite",
    tagline: "Private 2-bedroom wing with kitchen, living lounge & pool deck access",
    sleeps: 4,
    beds: ["Bedroom 1: 1 King Bed", "Bedroom 2: 1 Full Bed"],
    size: "160 m²",
    baseUSD: 60,
    amenityTags: [
      "Entire villa wing",
      "160 m²",
      "Private kitchen",
      "2 Attached bathrooms",
      "Private pool access",
      "Balcony",
      "Pool view",
      "Mountain view",
      "Air conditioning",
      "Free Wifi",
    ],
    breakfastLKR: 1316,
    breakfastUSD: 4,
  },
  {
    id: "one-bedroom-villa",
    name: "One-Bedroom Villa Suite",
    tagline: "Spacious private air-conditioned en-suite with garden veranda",
    sleeps: 2,
    beds: ["1 King Bed with Mosquito Netting"],
    size: "45 m²",
    baseUSD: 30,
    amenityTags: [
      "Private Suite",
      "45 m²",
      "Attached bathroom with hot water",
      "Private pool access",
      "Garden view",
      "Air conditioning",
      "Free Wifi",
    ],
    breakfastLKR: 1316,
    breakfastUSD: 4,
  },
];

export default function RatesBooking({ onOpenBookingModal }: RatesBookingProps) {
  const [currency, setCurrency] = useState<"USD" | "LKR" | "EUR" | "GBP" | "AUD">("USD");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomsCount, setRoomsCount] = useState(1);
  const [selectedQuantities, setSelectedQuantities] = useState<{ [key: string]: number }>({
    "whole-villa": 1,
    "two-bedroom-villa": 0,
    "one-bedroom-villa": 0,
  });

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

  const [nights, setNights] = useState(2);

  const currInfo = VILLA_DATA.pricing.currencies[currency];

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

  const handleQuantityChange = (tierId: string, qty: number) => {
    setSelectedQuantities((prev) => ({
      ...prev,
      [tierId]: qty,
    }));
  };

  // Calculate total selected price
  const activeSelection = useMemo(() => {
    let totalUSD = 0;
    const selectedItems: { name: string; qty: number; subtotal: number }[] = [];

    ACCOMMODATIONS.forEach((acc) => {
      const qty = selectedQuantities[acc.id] || 0;
      if (qty > 0) {
        const itemTotalUSD = acc.baseUSD * nights * qty;
        totalUSD += itemTotalUSD;
        selectedItems.push({
          name: acc.name,
          qty,
          subtotal: Math.round(itemTotalUSD * currInfo.rate),
        });
      }
    });

    // Default fallback to whole villa if 0 selected
    if (selectedItems.length === 0) {
      const whole = ACCOMMODATIONS[0];
      const subtotal = Math.round(whole.baseUSD * nights * currInfo.rate);
      return {
        totalPriceFormatted: `${currInfo.symbol}${subtotal.toLocaleString()}`,
        totalUSD: whole.baseUSD * nights,
        selectedItems: [{ name: whole.name, qty: 1, subtotal }],
      };
    }

    const convertedTotal = Math.round(totalUSD * currInfo.rate);
    return {
      totalPriceFormatted: `${currInfo.symbol}${convertedTotal.toLocaleString()}`,
      totalUSD,
      selectedItems,
    };
  }, [selectedQuantities, nights, currInfo]);

  const handleWhatsAppBooking = (tier?: RoomTier) => {
    let bookingSummary = "";
    if (tier) {
      const rate = Math.round(tier.baseUSD * nights * currInfo.rate);
      bookingSummary = `🏡 Accommodation: ${tier.name}\n👥 Occupancy: ${tier.sleeps} Guests\n💰 Rate: ${currInfo.symbol}${rate.toLocaleString()} (${currency})`;
    } else {
      const itemLines = activeSelection.selectedItems
        .map((i) => `• ${i.name} (Qty: ${i.qty}) — ${currInfo.symbol}${i.subtotal.toLocaleString()}`)
        .join("\n");
      bookingSummary = `🏡 Selected Rooms:\n${itemLines}\n💰 Total Guaranteed Rate: ${activeSelection.totalPriceFormatted} (${currency})`;
    }

    const text = `Hello M. Mangala! 🏡\nI'm inquiring to reserve M.S.A Anu Villa in Thalpe, Unawatuna.\n\n📅 Check-in: ${checkIn} (12:00 PM)\n📅 Check-out: ${checkOut} (10:00 AM)\n🌙 Duration: ${nights} ${nights === 1 ? "Night" : "Nights"}\n👥 Guests: ${adults} Adults, ${children} Children\n\n${bookingSummary}\n\n✓ No prepayment needed – pay at property\n✓ No credit card needed\n\nPlease confirm availability for these dates. Thank you!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${VILLA_DATA.whatsappNumber}?text=${encoded}`, "_blank");
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
    <section id="rates" className="py-16 sm:py-24 lg:py-28 bg-[#F4F6F8] relative overflow-hidden">
      
      {/* Background Subtle Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gold-200/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[400px] bg-ocean-300/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="font-sans font-bold text-2xl sm:text-4xl text-[#1A1A1A] tracking-tight">
                Availability
              </h2>
              <span className="inline-flex items-center text-xs font-semibold text-[#006CE4] bg-[#EBF3FF] px-2.5 py-0.5 rounded-full border border-[#D0E2FF]">
                <Info className="w-3 h-3 mr-1" /> Best Price Guarantee
              </span>
            </div>
            <p className="text-xs sm:text-sm text-charcoal-600 font-sans">
              Prices converted to <strong className="text-charcoal-900 font-semibold">{currInfo.label}</strong> • Direct booking with host guarantees lowest rate with zero commission.
            </p>
          </div>

          {/* Currency Switcher Buttons */}
          <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-sand-300 shadow-2xs">
            <span className="text-xs font-bold text-charcoal-500 px-2 font-sans hidden sm:inline">
              Currency:
            </span>
            {(["USD", "LKR", "EUR", "GBP", "AUD"] as const).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  currency === curr
                    ? "bg-[#003580] text-white shadow-xs"
                    : "text-charcoal-700 hover:bg-sand-100"
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>

        {/* Booking.com Style Top Yellow Search Bar */}
        <div className="bg-[#FFB700] p-1 rounded-2xl shadow-md">
          <div className="bg-white rounded-xl p-2 sm:p-3 grid grid-cols-1 md:grid-cols-12 gap-2.5 items-center font-sans">
            
            {/* Select Dates Box */}
            <div className="md:col-span-6 bg-[#F2F4F7] hover:bg-[#EAEFF5] transition-colors rounded-xl p-2.5 border border-sand-300 flex items-center gap-3">
              <Calendar className="w-5 h-5 text-[#003580] shrink-0" />
              <div className="flex-1 grid grid-cols-2 gap-2">
                <div>
                  <span className="text-[10px] uppercase font-bold text-charcoal-500 block">Check-in</span>
                  <input
                    type="date"
                    value={checkIn}
                    min={formatDateForInput(new Date())}
                    onChange={(e) => handleCheckInChange(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-bold text-charcoal-900 focus:outline-none cursor-pointer"
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-charcoal-500 block">Check-out ({nights} {nights === 1 ? "night" : "nights"})</span>
                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn || formatDateForInput(new Date())}
                    onChange={(e) => handleCheckOutChange(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-bold text-charcoal-900 focus:outline-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Select Occupancy Box */}
            <div className="md:col-span-4 bg-[#F2F4F7] hover:bg-[#EAEFF5] transition-colors rounded-xl p-2.5 border border-sand-300 flex items-center gap-3">
              <Users className="w-5 h-5 text-[#003580] shrink-0" />
              <div className="flex-1 grid grid-cols-2 gap-2">
                <div>
                  <span className="text-[10px] uppercase font-bold text-charcoal-500 block">Adults</span>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="w-full bg-transparent text-xs sm:text-sm font-bold text-charcoal-900 focus:outline-none cursor-pointer"
                  >
                    {[1, 2, 4, 6, 8, 10, 12].map((n) => (
                      <option key={n} value={n}>{n} Adults</option>
                    ))}
                  </select>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-charcoal-500 block">Children</span>
                  <select
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="w-full bg-transparent text-xs sm:text-sm font-bold text-charcoal-900 focus:outline-none cursor-pointer"
                  >
                    {[0, 1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>{n} Children</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Change Search / Calculate CTA */}
            <div className="md:col-span-2">
              <button
                type="button"
                onClick={() => handleWhatsAppBooking()}
                className="w-full h-full min-h-[48px] bg-[#006CE4] hover:bg-[#0057b8] active:scale-98 text-white rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-1.5"
              >
                <span>Calculate &amp; Book</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* ── Booking.com Style Professional Availability Table ──────────── */}
        <div className="bg-white rounded-2xl border border-[#C6D2E0] shadow-md overflow-hidden font-sans">
          
          {/* Table Header (Booking.com Navy Blue) */}
          <div className="hidden lg:grid lg:grid-cols-12 bg-[#003580] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 divide-x divide-white/20">
            <div className="col-span-4 pl-2">Accommodation Type</div>
            <div className="col-span-2 px-3 text-center">Today&apos;s Price ({nights} {nights === 1 ? "night" : "nights"})</div>
            <div className="col-span-3 px-3">Your Choices &amp; Perks</div>
            <div className="col-span-1 px-2 text-center">Select Qty</div>
            <div className="col-span-2 px-3 text-center">Reserve</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#C6D2E0]">
            {ACCOMMODATIONS.map((acc, index) => {
              const itemTotalCalculated = Math.round(acc.baseUSD * nights * currInfo.rate);
              const perNightCalculated = Math.round(acc.baseUSD * currInfo.rate);
              const qty = selectedQuantities[acc.id] || 0;

              return (
                <div
                  key={acc.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 p-4 sm:p-6 gap-5 lg:gap-0 lg:divide-x lg:divide-[#C6D2E0] transition-colors ${
                    acc.isPopular ? "bg-[#F8FBFF]" : "hover:bg-sand-50/50"
                  }`}
                >
                  
                  {/* Col 1: Accommodation Details */}
                  <div className="lg:col-span-4 space-y-3 lg:pr-5">
                    <div className="space-y-1">
                      {acc.badge && (
                        <span className="inline-block bg-[#008009] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                          {acc.badge}
                        </span>
                      )}
                      <h3 className="font-bold text-base sm:text-lg text-[#006CE4] hover:underline cursor-pointer leading-snug">
                        {acc.name}
                      </h3>
                      <p className="text-xs text-charcoal-600 font-normal">
                        {acc.tagline}
                      </p>
                    </div>

                    {/* Sleeps & Bed Configuration */}
                    <div className="space-y-1.5 text-xs text-charcoal-800">
                      <div className="flex items-center gap-1.5 font-bold">
                        <Users className="w-4 h-4 text-charcoal-700" />
                        <span>Sleeps: {acc.sleeps} adults</span>
                      </div>
                      {acc.beds.map((bed, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-1.5 text-xs text-charcoal-600">
                          <Bed className="w-4 h-4 text-charcoal-500 shrink-0 mt-0.5" />
                          <span>{bed}</span>
                        </div>
                      ))}
                    </div>

                    {/* Amenity Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {acc.amenityTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="inline-flex items-center text-[11px] bg-white border border-[#C6D2E0] text-charcoal-700 px-2 py-0.5 rounded-md font-medium shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Col 2: Today's Price */}
                  <div className="lg:col-span-2 lg:px-4 flex flex-col justify-between py-1 bg-[#F9FAFB] lg:bg-transparent rounded-xl p-3 lg:p-0">
                    <div>
                      <span className="text-[11px] text-charcoal-500 uppercase block">
                        {nights} {nights === 1 ? "night" : "nights"}, {acc.sleeps} adults
                      </span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="font-ui font-mono font-bold text-2xl sm:text-3xl text-charcoal-950 tracking-tight">
                          {currInfo.symbol}{itemTotalCalculated.toLocaleString()}
                        </span>
                      </div>
                      <span className="text-[11px] text-charcoal-500 font-mono block">
                        ({currInfo.symbol}{perNightCalculated.toLocaleString()} / night)
                      </span>
                      <span className="text-[11px] text-[#008009] font-semibold block mt-1">
                        + {currInfo.symbol}0 taxes and fees (Direct Rate)
                      </span>
                    </div>
                  </div>

                  {/* Col 3: Your Choices & Perks */}
                  <div className="lg:col-span-3 lg:px-4 space-y-2 text-xs py-1">
                    <div className="flex items-start gap-2 text-charcoal-800">
                      <Coffee className="w-4 h-4 text-charcoal-500 shrink-0 mt-0.5" />
                      <span>Breakfast {currInfo.symbol}{Math.round(acc.breakfastUSD * currInfo.rate).toLocaleString()} (optional)</span>
                    </div>

                    <div className="flex items-start gap-2 text-charcoal-800">
                      <XCircle className="w-4 h-4 text-charcoal-500 shrink-0 mt-0.5" />
                      <span>Free cancellation up to 48h before arrival</span>
                    </div>

                    <div className="flex items-start gap-2 text-[#008009] font-bold">
                      <Check className="w-4 h-4 text-[#008009] shrink-0 mt-0.5" />
                      <span>No prepayment needed – pay at property</span>
                    </div>

                    <div className="flex items-start gap-2 text-[#008009] font-bold">
                      <Check className="w-4 h-4 text-[#008009] shrink-0 mt-0.5" />
                      <span>No credit card needed (Cash or Bank Transfer)</span>
                    </div>
                  </div>

                  {/* Col 4: Select Quantity */}
                  <div className="lg:col-span-1 lg:px-2 flex lg:flex-col items-center justify-between lg:justify-center gap-2">
                    <span className="text-xs font-bold text-charcoal-600 lg:hidden">Select Quantity:</span>
                    <select
                      value={qty}
                      onChange={(e) => handleQuantityChange(acc.id, Number(e.target.value))}
                      className="w-20 lg:w-full py-2 px-2.5 rounded-lg border border-[#003580] bg-white text-sm font-bold text-charcoal-900 focus:outline-none cursor-pointer shadow-2xs"
                    >
                      {[0, 1, 2, 3].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Col 5: Reserve CTA Action */}
                  <div className="lg:col-span-2 lg:px-3 flex flex-col justify-center space-y-2 pt-2 lg:pt-0">
                    <button
                      type="button"
                      onClick={() => handleWhatsAppBooking(acc)}
                      className="w-full py-3 px-4 bg-[#006CE4] hover:bg-[#0057b8] text-white rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-1.5 group cursor-pointer active:scale-98"
                    >
                      <span>I&apos;ll reserve</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                    <ul className="text-[11px] text-charcoal-500 space-y-0.5 pl-2 list-disc font-sans">
                      <li>You won&apos;t be charged yet</li>
                      <li>Instant confirmation with Host M. Mangala</li>
                    </ul>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Table Bottom Floating Summary Bar */}
          <div className="bg-[#F0F6FF] p-4 sm:p-5 border-t border-[#C6D2E0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#003580] uppercase tracking-wider block">
                Total Direct Reservation Summary:
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-charcoal-800">
                {activeSelection.selectedItems.map((item, i) => (
                  <span key={i} className="font-semibold bg-white px-2.5 py-1 rounded-lg border border-[#D0E2FF]">
                    {item.name} ({item.qty}x)
                  </span>
                ))}
                <span className="text-xs text-charcoal-500">• {nights} {nights === 1 ? "night" : "nights"} total</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-[11px] text-charcoal-500 uppercase block">Guaranteed Direct Total:</span>
                <span className="font-ui font-mono font-bold text-2xl sm:text-3xl text-charcoal-950">
                  {activeSelection.totalPriceFormatted}
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleWhatsAppBooking()}
                className="bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 shrink-0 cursor-pointer active:scale-98"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Confirm on WhatsApp</span>
              </button>
            </div>
          </div>

        </div>

        {/* ── 4 Direct Perks Bento Grid ───────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans">
          {directPerks.map((perk, idx) => {
            const Icon = perk.icon;
            const isOceanBreeze = idx === 2;
            return (
              <div
                key={idx}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-sand-200 shadow-2xs hover:shadow-md transition-all flex items-start gap-3"
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
                  <p className="text-[11px] text-charcoal-500 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Host Direct Contact & OTA Alternatives Strip */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-sand-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 font-sans">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gold-500 text-white font-serif font-bold text-lg flex items-center justify-center shadow-sm shrink-0">
              MM
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-700 block">
                DIRECT VILLA HOST
              </span>
              <h4 className="font-bold text-sm sm:text-base text-charcoal-950">
                {VILLA_DATA.hostName}
              </h4>
              <p className="text-xs text-charcoal-500">
                Samagiya, Thalpe North, Unawatuna • Speaks English &amp; Sinhala
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={VILLA_DATA.social.bookingCom}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-[#003580] hover:bg-[#00224f] text-white rounded-xl text-xs font-bold shadow-xs transition-colors flex items-center gap-1.5"
            >
              <span className="font-extrabold text-[#00BAFC]">B.</span>
              <span>View on Booking.com</span>
            </a>

            <a
              href={VILLA_DATA.social.airbnb}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-[#FF5A5F] hover:bg-[#e0484d] text-white rounded-xl text-xs font-bold shadow-xs transition-colors flex items-center gap-1.5"
            >
              <span>View on Airbnb</span>
            </a>

            <a
              href={VILLA_DATA.social.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-sand-100 hover:bg-sand-200 text-charcoal-800 rounded-xl text-xs font-bold shadow-xs transition-colors flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-700" />
              <span>Google Maps Listing</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
