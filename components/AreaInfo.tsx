"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  MapPin,
  Palmtree,
  Train,
  Plane,
  UtensilsCrossed,
  Sparkles,
  Mountain,
  Compass,
  Waves,
  Coffee,
  Navigation,
  ExternalLink,
  Landmark,
  Trees,
} from "lucide-react";
import { VILLA_DATA } from "@/data/villaData";

interface AttractionCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  iconBg: string;
  items: {
    name: string;
    type?: string;
    distance: string;
  }[];
}

const AREA_INFO_DATA: AttractionCategory[] = [
  {
    title: "Top attractions",
    icon: Landmark,
    accentColor: "text-amber-600",
    iconBg: "bg-amber-50 border-amber-200",
    items: [
      { name: "Mahendra Amarasooriya Park", distance: "6 km" },
      { name: "Galle Fort National Museum", distance: "6 km" },
      { name: "National Maritime Museum", distance: "6 km" },
      { name: "Galle Fort - National Maritime Archaeology Museum", distance: "6 km" },
      { name: "Galle Fort Clock Tower", distance: "6 km" },
      { name: "Galle Light house", distance: "7 km" },
    ],
  },
  {
    title: "Natural Beauty",
    icon: Mountain,
    accentColor: "text-emerald-700",
    iconBg: "bg-emerald-50 border-emerald-200",
    items: [
      { type: "Lake", name: "Koggala Lake", distance: "7 km" },
      { type: "Forest", name: "Kandawattagoda", distance: "8 km" },
    ],
  },
  {
    title: "Beaches in the Neighborhood",
    icon: Waves,
    accentColor: "text-sky-600",
    iconBg: "bg-sky-50 border-sky-200",
    items: [
      { name: "Dalawella Beach (Turtle Lagoon)", distance: "1.5 km" },
      { name: "Unawatuna Beach (Main Bay)", distance: "1.8 km" },
      { name: "Mihiripenna Beach (Tidal Pool)", distance: "1.8 km" },
      { name: "Bonavista Beach", distance: "3.2 km" },
      { name: "Jungle Beach (Rumassala Coral)", distance: "3.6 km" },
    ],
  },
  {
    title: "Public transit",
    icon: Train,
    accentColor: "text-indigo-600",
    iconBg: "bg-indigo-50 border-indigo-200",
    items: [
      { type: "Train", name: "Unawatuna Railway Station", distance: "1.9 km" },
      { type: "Train", name: "Talpe Railway Station", distance: "3.5 km" },
    ],
  },
  {
    title: "Closest Airports",
    icon: Plane,
    accentColor: "text-blue-600",
    iconBg: "bg-blue-50 border-blue-200",
    items: [
      { name: "Koggala Domestic Airport & Seaplane Base", distance: "7 km" },
    ],
  },
  {
    title: "Restaurants & cafes",
    icon: UtensilsCrossed,
    accentColor: "text-rose-600",
    iconBg: "bg-rose-50 border-rose-200",
    items: [
      { type: "Restaurant", name: "Wijaya Beach Restaurant (Dalawella)", distance: "1.5 km" },
      { type: "Cafe", name: "SkinnyTom's Deli", distance: "1.9 km" },
      { type: "Restaurant", name: "The Hideout Unawatuna", distance: "2.0 km" },
      { type: "Cafe/Lounge", name: "Koha Surf Lounge", distance: "2.1 km" },
      { type: "Restaurant", name: "The Me-NU Restaurant", distance: "1.1 km" },
      { type: "Restaurant", name: "Eterna Guest House & Seafood Restaurant", distance: "1.8 km" },
      { type: "Cafe/Bar", name: "Comaran Bar", distance: "1.8 km" },
      { type: "Restaurant", name: "Pizza Hut", distance: "3.8 km" },
      { type: "Restaurant", name: "Domino's Pizza", distance: "4.2 km" },
    ],
  },
];

const categoryContainerVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.07,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const textItemVariants: Variants = {
  hidden: { opacity: 0, x: -12, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function AreaInfo() {
  const scrollToAvailability = () => {
    const el = document.getElementById("rates");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToMap = () => {
    const el = document.getElementById("location");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="area-info" className="py-16 sm:py-20 lg:py-24 bg-white border-y border-sand-200 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header with Scroll Fade In/Out */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-sand-200"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-950 tracking-tight">
              Area info
            </h2>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="text-xs sm:text-sm font-semibold text-emerald-800">
                Excellent location
              </span>
              <span className="text-charcoal-300">•</span>
              <button
                type="button"
                onClick={scrollToMap}
                className="text-xs sm:text-sm font-semibold text-[#006CE4] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Show on map</span>
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToAvailability}
            className="self-start sm:self-auto px-5 py-2.5 bg-[#006CE4] hover:bg-[#0057b8] active:scale-98 text-white rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>See availability</span>
          </button>
        </motion.div>

        {/* 3-Column Booking.com Area Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Column 1: Top Attractions & Restaurants */}
          <div className="space-y-8">
            <CategoryBlock category={AREA_INFO_DATA[0]} />
            <CategoryBlock category={AREA_INFO_DATA[5]} />
          </div>

          {/* Column 2: Natural Beauty & Beaches */}
          <div className="space-y-8">
            <CategoryBlock category={AREA_INFO_DATA[1]} />
            <CategoryBlock category={AREA_INFO_DATA[2]} />
          </div>

          {/* Column 3: Public Transit & Closest Airports */}
          <div className="space-y-8">
            <CategoryBlock category={AREA_INFO_DATA[3]} />
            <CategoryBlock category={AREA_INFO_DATA[4]} />
          </div>

        </div>

      </div>
    </section>
  );
}

function CategoryBlock({ category }: { category: AttractionCategory }) {
  const Icon = category.icon;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={categoryContainerVariants}
      className="space-y-3.5"
    >
      
      {/* Category Header with Animated Micro-Interaction */}
      <motion.div
        variants={textItemVariants}
        className="flex items-center gap-2.5 group cursor-default"
      >
        <motion.div
          whileHover={{ scale: 1.15, rotate: 6 }}
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            scale: { type: "spring", stiffness: 400, damping: 15 },
          }}
          className={`w-8 h-8 rounded-lg flex items-center justify-center border shadow-2xs ${category.iconBg} ${category.accentColor}`}
        >
          <Icon className="w-4 h-4" />
        </motion.div>
        <h3 className="font-bold text-sm sm:text-base text-charcoal-950">
          {category.title}
        </h3>
      </motion.div>

      {/* Place Items List with Scroll Fade In & Stagger */}
      <div className="space-y-2.5">
        {category.items.map((item, idx) => (
          <motion.div
            key={idx}
            variants={textItemVariants}
            whileHover={{ x: 4 }}
            className="flex items-baseline justify-between gap-4 text-xs sm:text-sm text-charcoal-700 hover:text-charcoal-950 transition-colors py-0.5"
          >
            <div className="flex items-baseline gap-1.5 min-w-0 pr-2">
              {item.type && (
                <span className="text-[11px] font-semibold text-charcoal-400 shrink-0">
                  {item.type} •
                </span>
              )}
              <span className="truncate font-medium">{item.name}</span>
            </div>
            <span className="text-xs font-semibold text-charcoal-500 font-mono shrink-0">
              {item.distance}
            </span>
          </motion.div>
        ))}
      </div>

    </motion.div>
  );
}
