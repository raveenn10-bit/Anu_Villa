"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { VILLA_DATA } from "@/data/villaData";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPill, setShowPill] = useState(true);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    const defaultText = message || `Hello M. Mangala! I'd like to check availability and rates for ${VILLA_DATA.officialName} in Unawatuna.`;
    window.open(`https://wa.me/${VILLA_DATA.whatsappNumber}?text=${encodeURIComponent(defaultText)}`, "_blank");
    setIsOpen(false);
  };

  const handleDirectWhatsApp = () => {
    const defaultText = `Hello M. Mangala! I'm visiting the ${VILLA_DATA.officialName} website and would like to ask about booking the 6-bedroom villa ($140/night).`;
    window.open(`https://wa.me/${VILLA_DATA.whatsappNumber}?text=${encodeURIComponent(defaultText)}`, "_blank");
  };

  return (
    <aside aria-label="WhatsApp Concierge" className="fixed bottom-6 right-4 sm:bottom-7 sm:right-7 z-50 flex items-center gap-3">
      {/* Pill Badge ([🟢 Chat on WhatsApp ✕]) */}
      <AnimatePresence>
        {showPill && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, x: 10 }}
            transition={{ duration: 0.3 }}
            className="bg-white/95 backdrop-blur-md border border-sand-300/90 px-4.5 py-2.5 sm:px-5 sm:py-2.5 rounded-full shadow-2xl shadow-black/15 flex items-center gap-2.5 text-xs font-semibold text-charcoal-900 cursor-pointer hover:bg-sand-50 transition-all select-none"
            onClick={handleDirectWhatsApp}
          >
            <span className="w-3 h-3 rounded-full bg-[#25D366] shrink-0 animate-pulse shadow-xs shadow-emerald-400" />
            <span className="whitespace-nowrap font-bold text-charcoal-950 text-xs sm:text-sm tracking-tight">
              Chat on WhatsApp
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowPill(false);
              }}
              className="text-charcoal-400 hover:text-charcoal-700 ml-0.5 p-1 rounded-full hover:bg-sand-200/70 transition-colors"
              aria-label="Dismiss chat pill"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="absolute bottom-20 right-0 bg-white rounded-3xl shadow-2xl border border-sand-200 w-80 overflow-hidden"
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
                    Host M. Mangala • Online
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
            <div className="p-4 bg-[#ECE5DD] space-y-3">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-xs text-xs text-charcoal-800 space-y-1">
                <p className="font-semibold text-gold-700">Welcome to M.S.A Anu Villa! 🌴</p>
                <p>Hello! How can we assist your stay in Thalpe, Unawatuna today? Inquire about dates, our 6 rooms, or the $140 nightly rate.</p>
                <span className="text-[9px] text-charcoal-400 block text-right">Just now</span>
              </div>
            </div>

            {/* Input & Action */}
            <div className="p-3 bg-white border-t border-sand-200 space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSendMessage();
                  }}
                  className="flex-1 px-3 py-2 text-xs rounded-xl bg-sand-50 border border-sand-300 text-charcoal-800 focus:outline-none focus:border-[#25D366]"
                />
                <button
                  onClick={handleSendMessage}
                  className="w-9 h-9 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shrink-0 shadow-xs transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[9px] text-center text-charcoal-400">
                Direct WhatsApp with Villa Host M. Mangala
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ultra-Prominent WhatsApp Circular Floating Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={handleDirectWhatsApp}
        className="w-16 h-16 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 border-[2.5px] border-white/50 relative group shrink-0 transition-all cursor-pointer"
        aria-label="Open WhatsApp Chat"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
        <svg
          viewBox="0 0 24 24"
          className="w-9.5 h-9.5 sm:w-9.5 sm:h-9.5 fill-current text-white relative z-10 drop-shadow-xs"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.75 7.85 19L7.55 18.82L4.43 19.64L5.26 16.59L5.06 16.27C4.24 14.97 3.8 13.46 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.57 14.39C16.32 14.26 15.1 13.66 14.87 13.58C14.65 13.5 14.49 13.46 14.32 13.71C14.16 13.96 13.69 14.51 13.54 14.68C13.4 14.84 13.25 14.86 13 14.74C12.75 14.61 11.95 14.35 11 13.51C10.26 12.85 9.76 12.04 9.61 11.79C9.47 11.54 9.6 11.4 9.72 11.28C9.83 11.17 9.97 10.99 10.1 10.84C10.22 10.7 10.26 10.59 10.34 10.43C10.42 10.26 10.38 10.12 10.32 10C10.26 9.87 9.76 8.65 9.56 8.14C9.36 7.65 9.15 7.71 9 7.71C8.86 7.7 8.7 7.7 8.53 7.7C8.37 7.7 8.1 7.76 7.87 8.01C7.65 8.26 7.02 8.85 7.02 10.05C7.02 11.25 7.9 12.4 8.02 12.57C8.14 12.73 9.74 15.2 12.21 16.27C12.8 16.52 13.26 16.67 13.61 16.79C14.2 16.97 14.74 16.95 15.17 16.88C15.65 16.81 16.64 16.28 16.85 15.7C17.05 15.11 17.05 14.61 16.99 14.51C16.93 14.41 16.82 14.51 16.57 14.39Z" />
        </svg>
      </motion.button>
    </aside>
  );
}
