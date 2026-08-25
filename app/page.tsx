"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import RoomsFacilities from "@/components/RoomsFacilities";
import Gallery from "@/components/Gallery";
import RatesBooking from "@/components/RatesBooking";
import NearbyPlaces from "@/components/NearbyPlaces";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from localStorage / system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("anu_villa_theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleToggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("anu_villa_theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("anu_villa_theme", "light");
      }
      return next;
    });
  };

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  const handleExplore = () => {
    const facilitiesSection = document.getElementById("facilities");
    if (facilitiesSection) {
      facilitiesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-sand-50 dark:bg-[#0E1612] text-charcoal-800 dark:text-charcoal-200 transition-colors duration-300 selection:bg-gold-500 selection:text-white">
      {/* Fixed Luxury Navigation with Dark Mode Toggle */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
      />

      {/* Hero Section */}
      <Hero onOpenBooking={handleOpenBooking} onExplore={handleExplore} />

      {/* About Section */}
      <About onOpenBooking={handleOpenBooking} />

      {/* Rooms & Facilities Section */}
      <RoomsFacilities onOpenBooking={handleOpenBooking} />

      {/* Gallery Section */}
      <Gallery />

      {/* Rates & Direct Booking Section */}
      <RatesBooking onOpenBookingModal={handleOpenBooking} />

      {/* Nearby Attractions */}
      <NearbyPlaces />

      {/* 5-Star Reviews & Testimonials */}
      <Reviews />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Contact & Map Location */}
      <ContactLocation />

      {/* Minimalist Centered Luxury Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal isOpen={bookingModalOpen} onClose={handleCloseBooking} />

      {/* Floating WhatsApp Concierge with Pill Badge */}
      <FloatingWhatsApp />
    </main>
  );
}
