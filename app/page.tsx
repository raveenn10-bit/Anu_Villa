"use client";

import React, { useState } from "react";
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
    <main className="min-h-screen flex flex-col bg-sand-50 text-charcoal-800 selection:bg-gold-500 selection:text-white">
      {/* Fixed Luxury Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

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
