"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  Navigation,
  User,
  ShieldCheck
} from "lucide-react";
import { VILLA_DATA } from "@/data/villaData";

export default function ContactLocation() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    guests: "6",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // WhatsApp auto-redirect with user's message
    const msg = `Hello M. Mangala (${VILLA_DATA.officialName})! Message from Website:\n\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n📞 Phone: ${formData.phone}\n📅 Dates: ${formData.dates}\n👥 Guests: ${formData.guests}\n💬 Message: ${formData.message}`;
    const encoded = encodeURIComponent(msg);
    setTimeout(() => {
      window.open(`https://wa.me/${VILLA_DATA.whatsappNumber}?text=${encoded}`, "_blank");
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold tracking-[0.25em] text-gold-600 uppercase">
            GET IN TOUCH &amp; LOCATION
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-charcoal-900 font-bold">
            We’d Love to Welcome You
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600">
            Reach out directly to villa host <span className="font-semibold text-charcoal-800">{VILLA_DATA.hostName}</span> for bookings, customized stays, or inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="bg-sand-50 rounded-3xl p-6 sm:p-8 border border-sand-200 space-y-5 shadow-xs">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-charcoal-900">{VILLA_DATA.officialName}</h3>
                  <span className="text-xs text-gold-600 font-semibold flex items-center gap-1 mt-0.5">
                    <User className="w-3.5 h-3.5" /> Host: {VILLA_DATA.hostName}
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                  Instant Reply
                </span>
              </div>

              {/* Phones List */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal-400 block">
                  Direct Calls &amp; WhatsApp
                </span>
                {VILLA_DATA.phones.map((phone, idx) => {
                  const rawNum = VILLA_DATA.rawPhones[idx];
                  return (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white border border-sand-200 hover:border-gold-300 transition-colors shadow-2xs">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gold-100 text-gold-700 flex items-center justify-center">
                          <Phone className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-charcoal-900">{phone}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <a
                          href={`tel:${phone.replace(/\s+/g, "")}`}
                          className="px-2.5 py-1 rounded-lg bg-sand-100 text-charcoal-700 text-xs font-medium hover:bg-sand-200 transition-colors"
                        >
                          Call
                        </a>
                        <a
                          href={`https://wa.me/${rawNum}`}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2.5 py-1 rounded-lg bg-[#25D366] text-white text-xs font-medium hover:bg-[#20ba59] transition-colors"
                        >
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-sand-200">
                <div className="w-8 h-8 rounded-lg bg-gold-100 text-gold-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-charcoal-400 block">Villa Address</span>
                  <p className="text-xs sm:text-sm font-medium text-charcoal-800 mt-0.5">
                    {VILLA_DATA.location}
                  </p>
                  <span className="text-[11px] text-gold-700 font-semibold block mt-1">
                    🏖️ Approximately 1.5 km to Thalpe &amp; Turtle Beach
                  </span>
                </div>
              </div>

              {/* Check times */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-white border border-sand-200 text-center">
                  <span className="text-[10px] uppercase font-bold text-charcoal-400 block">Check-in</span>
                  <span className="text-xs sm:text-sm font-bold text-charcoal-900">{VILLA_DATA.checkInTime}</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-sand-200 text-center">
                  <span className="text-[10px] uppercase font-bold text-charcoal-400 block">Check-out</span>
                  <span className="text-xs sm:text-sm font-bold text-charcoal-900">{VILLA_DATA.checkOutTime}</span>
                </div>
              </div>

              {/* Booking Platforms Badge Strip */}
              <div className="p-3 rounded-xl bg-gold-50/70 border border-gold-200/80">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold-800 block mb-1.5">
                  Also Available On
                </span>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-white border border-sand-300 rounded-lg text-xs font-semibold text-charcoal-800 shadow-2xs">
                    Airbnb
                  </span>
                  <span className="px-3 py-1 bg-white border border-sand-300 rounded-lg text-xs font-semibold text-charcoal-800 shadow-2xs">
                    Booking.com
                  </span>
                  <span className="text-[11px] text-charcoal-500 italic">
                    (Direct booking via WhatsApp offers best rate)
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Map Card */}
            <div className="bg-sand-50 rounded-3xl p-2 border border-sand-200 overflow-hidden shadow-sm">
              <div className="relative h-60 w-full rounded-2xl overflow-hidden">
                <iframe
                  title="M.S.A Anu Villa Thalpe North Unawatuna Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15871.493922709193!2d80.2447953!3d6.0125712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae172f3e8fbb571%3A0x7d65451aa4ea21c7!2sUnawatuna%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-3 text-center">
                <a
                  href="https://maps.google.com/?q=Thalpe+Unawatuna+Galle+Sri+Lanka"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-600 hover:text-gold-700"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Reservation & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-sand-50 rounded-3xl p-6 sm:p-8 border border-sand-200 shadow-lg">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900">
                Send an Inquiry to Host
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-500 mt-1 mb-6">
                Fill out the details below to receive direct assistance for the whole 6-room villa ($140/night).
              </p>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-charcoal-900">Inquiry Prepared!</h4>
                  <p className="text-xs sm:text-sm text-charcoal-600 max-w-md mx-auto">
                    We are connecting you directly with host M. Mangala on WhatsApp. If WhatsApp didn&apos;t open automatically, click below:
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-2 text-xs font-semibold text-gold-600 underline"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-sand-300 text-charcoal-800 text-xs sm:text-sm focus:outline-none focus:border-gold-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-sand-300 text-charcoal-800 text-xs sm:text-sm focus:outline-none focus:border-gold-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+94 77 518 3955"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-sand-300 text-charcoal-800 text-xs sm:text-sm focus:outline-none focus:border-gold-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Dates (Check-in / Out)
                      </label>
                      <input
                        type="text"
                        value={formData.dates}
                        onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                        placeholder="e.g. 15 Oct - 20 Oct"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-sand-300 text-charcoal-800 text-xs sm:text-sm focus:outline-none focus:border-gold-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Total Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-sand-300 text-charcoal-800 text-xs sm:text-sm focus:outline-none focus:border-gold-500"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Message &amp; Special Requests
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ask any question regarding BBQ setup, kitchen facilities, scooter rentals, or airport pickup..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-sand-300 text-charcoal-800 text-xs sm:text-sm focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3.5 rounded-xl font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message &amp; Connect with Host on WhatsApp</span>
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
