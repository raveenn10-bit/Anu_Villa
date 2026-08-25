"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

// ── Above-the-fold: load immediately (no lazy) ────────────────────
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// ── Below-the-fold: dynamic import = separate JS chunk ───────────
// Each component only downloads when the browser is ready.
// `ssr: false` prevents server-rendering large interactive components,
// reducing TTFB and eliminating hydration mismatches on modals.
const About = dynamic(() => import("@/components/About"), {
  ssr: true,  // keep SSR for SEO content
});
const RoomsFacilities = dynamic(() => import("@/components/RoomsFacilities"), {
  ssr: true,
});
const Gallery = dynamic(() => import("@/components/Gallery"), {
  ssr: true,
});
const RatesBooking = dynamic(() => import("@/components/RatesBooking"), {
  ssr: true,
});
const NearbyPlaces = dynamic(() => import("@/components/NearbyPlaces"), {
  ssr: true,
});
const AreaInfo = dynamic(() => import("@/components/AreaInfo"), {
  ssr: true,
});
const Reviews = dynamic(() => import("@/components/Reviews"), {
  ssr: true,
});
const FAQ = dynamic(() => import("@/components/FAQ"), {
  ssr: true,
});
const ContactLocation = dynamic(() => import("@/components/ContactLocation"), {
  ssr: true,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true,
});

// Modals: never need SSR — load only when opened
const BookingModal = dynamic(() => import("@/components/BookingModal"), {
  ssr: false,
});

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleOpenBooking = () => setBookingModalOpen(true);
  const handleCloseBooking = () => setBookingModalOpen(false);

  const handleExplore = () => {
    const el = document.getElementById("facilities");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen flex flex-col bg-sand-50 text-charcoal-800 selection:bg-gold-500 selection:text-white">
      {/* Above-the-fold — renders immediately */}
      <Navbar onOpenBooking={handleOpenBooking} />
      <Hero onOpenBooking={handleOpenBooking} onExplore={handleExplore} />

      {/* Below-the-fold — lazy chunks, load as user scrolls */}
      <About onOpenBooking={handleOpenBooking} />
      <RoomsFacilities onOpenBooking={handleOpenBooking} />
      <Gallery />
      <RatesBooking onOpenBookingModal={handleOpenBooking} />
      <NearbyPlaces />
      <AreaInfo />
      <Reviews />
      <FAQ />
      <ContactLocation />
      <Footer />

      {/* Deferred modal — 0 cost until user clicks Book */}
      <BookingModal isOpen={bookingModalOpen} onClose={handleCloseBooking} />

      {/* WhatsApp pill — tiny component, always visible */}
      <FloatingWhatsApp />
    </main>
  );
}
