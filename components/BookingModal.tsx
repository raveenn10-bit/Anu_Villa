"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Sparkles, ShieldCheck } from "lucide-react";
import { VILLA_DATA } from "@/data/villaData";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("4");
  const [specialRequests, setSpecialRequests] = useState("");

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Anu Villa! 🏡\nI'd like to book your villa in Unawatuna.\n\n👤 Name: ${name || "Guest"}\n📞 Phone: ${phone || "Not provided"}\n📅 Check-in: ${checkIn || "Flexible"}\n📅 Check-out: ${checkOut || "Flexible"}\n👥 Guests: ${guests}\n📝 Requests: ${specialRequests || "None"}\n\nPlease confirm availability!`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${VILLA_DATA.whatsappNumber}?text=${encoded}`, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white dark:bg-tropical-deep rounded-3xl max-w-lg w-full shadow-2xl border border-sand-200 dark:border-white/15 z-10 overflow-hidden my-8"
          >
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-gold-500 to-gold-600 dark:from-gold-600 dark:to-gold-700 p-6 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 hover:bg-black/30 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-gold-200" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold-100">
                  Direct Booking Inquiry
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold">Reserve Anu Villa</h3>
              <p className="text-xs text-gold-100 mt-1">
                Best Rate Guarantee • Instant Host WhatsApp Support
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleWhatsAppSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-charcoal-700 dark:text-charcoal-300 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-sand-300 dark:border-white/15 bg-white dark:bg-tropical-surface text-charcoal-800 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-gold-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-700 dark:text-charcoal-300 mb-1">
                  Contact Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+44 7000 000000"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-sand-300 dark:border-white/15 bg-white dark:bg-tropical-surface text-charcoal-800 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 dark:text-charcoal-300 mb-1">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-sand-300 dark:border-white/15 bg-white dark:bg-tropical-surface text-charcoal-800 dark:text-white text-xs focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 dark:text-charcoal-300 mb-1">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-sand-300 dark:border-white/15 bg-white dark:bg-tropical-surface text-charcoal-800 dark:text-white text-xs focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-700 dark:text-charcoal-300 mb-1">
                  Total Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-sand-300 dark:border-white/15 bg-white dark:bg-tropical-surface text-charcoal-800 dark:text-white text-xs focus:outline-none focus:border-gold-500"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"} (Whole 4-BR Villa)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-700 dark:text-charcoal-300 mb-1">
                  Special Requests / Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Need airport pickup, baby cot, or private chef?"
                  className="w-full px-3 py-2 rounded-xl border border-sand-300 dark:border-white/15 bg-white dark:bg-tropical-surface text-charcoal-800 dark:text-white text-xs focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 rounded-xl font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Request Booking on WhatsApp</span>
                </motion.button>
              </div>

              <div className="text-center pt-1">
                <p className="text-[11px] text-charcoal-400 dark:text-charcoal-500 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  Instant confirmation with villa manager
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
