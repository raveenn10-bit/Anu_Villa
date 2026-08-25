"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { VILLA_DATA } from "@/data/villaData";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPill, setShowPill] = useState(true);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    const defaultText = message || "Hi Anu Villa! I'd like to check availability and rates for your villa.";
    window.open(`https://wa.me/${VILLA_DATA.whatsappNumber}?text=${encodeURIComponent(defaultText)}`, "_blank");
    setIsOpen(false);
  };

  const handleDirectWhatsApp = () => {
    const defaultText = "Hi Anu Villa! I'm visiting your website and would like to ask about booking.";
    window.open(`https://wa.me/${VILLA_DATA.whatsappNumber}?text=${encodeURIComponent(defaultText)}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Pill Badge (Matches User's reference screenshot: [🟢 Chat on WhatsApp ✕]) */}
      <AnimatePresence>
        {showPill && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-charcoal-900 border border-sand-300 dark:border-white/20 px-4 py-2 rounded-full shadow-xl flex items-center gap-2 text-xs font-semibold text-charcoal-900 dark:text-white cursor-pointer hover:bg-sand-50 dark:hover:bg-charcoal-800 transition-colors"
            onClick={handleDirectWhatsApp}
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shrink-0" />
            <span className="whitespace-nowrap font-medium text-charcoal-900 dark:text-white">Chat on WhatsApp</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowPill(false);
              }}
              className="text-charcoal-400 hover:text-charcoal-700 dark:hover:text-white ml-1 p-0.5"
              aria-label="Dismiss chat pill"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            className="absolute bottom-16 right-0 bg-white dark:bg-tropical-deep rounded-3xl shadow-2xl border border-sand-200 dark:border-white/15 w-80 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#075E54] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-sm">
                  AV
                </div>
                <div>
                  <h4 className="text-sm font-bold leading-tight">Anu Villa Concierge</h4>
                  <span className="text-[10px] text-emerald-200 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Online • Typically replies in minutes
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-[#ECE5DD] dark:bg-[#121B16] space-y-3">
              <div className="bg-white dark:bg-tropical-surface p-3 rounded-2xl rounded-tl-none shadow-xs text-xs text-charcoal-800 dark:text-charcoal-200 space-y-1">
                <p className="font-semibold text-gold-700 dark:text-gold-400">Welcome to Anu Villa! 🌴</p>
                <p>How can we assist your stay in Unawatuna today? Ask for dates, rates, or custom requests.</p>
                <span className="text-[9px] text-charcoal-400 dark:text-charcoal-500 block text-right">Just now</span>
              </div>
            </div>

            {/* Input & Action */}
            <div className="p-3 bg-white dark:bg-tropical-deep border-t border-sand-200 dark:border-white/10 space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your question..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSendMessage();
                  }}
                  className="flex-1 px-3 py-2 text-xs rounded-xl bg-sand-50 dark:bg-tropical-surface border border-sand-300 dark:border-white/10 text-charcoal-800 dark:text-white focus:outline-none focus:border-[#25D366]"
                />
                <button
                  onClick={handleSendMessage}
                  className="w-9 h-9 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shrink-0 shadow-xs"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[9px] text-center text-charcoal-400 dark:text-charcoal-500">
                Direct WhatsApp with Villa Management
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulsing Floating Circular Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl relative group shrink-0"
        aria-label="Open WhatsApp Chat"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:opacity-40" />
        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </motion.button>
    </div>
  );
}
