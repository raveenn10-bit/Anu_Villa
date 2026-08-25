"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Menu, X, Calendar } from "lucide-react";
import { VILLA_DATA } from "@/data/villaData";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section spy
      const sections = ["home", "about", "facilities", "gallery", "rates", "nearby", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About Us", href: "#about", id: "about" },
    { name: "Rooms & Facilities", href: "#facilities", id: "facilities" },
    { name: "Gallery", href: "#gallery", id: "gallery" },
    { name: "Rates", href: "#rates", id: "rates" },
    { name: "Nearby Places", href: "#nearby", id: "nearby" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hello M. Mangala (${VILLA_DATA.officialName})! I'm interested in booking your 6-room villa in Unawatuna. Could you please share availability?`);
    window.open(`https://wa.me/${VILLA_DATA.whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs py-3 border-b border-sand-200/80"
            : "bg-white/85 backdrop-blur-sm py-4 border-b border-sand-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Professional Typography */}
          <Link href="#home" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-white shadow-xs border border-gold-200/80 p-0.5 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="M.S.A Anu Villa Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-[22px] font-semibold tracking-[0.12em] text-charcoal-950 leading-none group-hover:text-gold-600 transition-colors">
                ANU VILLA
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.24em] uppercase text-gold-600 font-semibold mt-1 font-sans">
                UNAWATUNA • GALLE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (>= lg) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-2 text-xs font-semibold tracking-[0.12em] uppercase transition-all relative rounded-full ${
                    isActive
                      ? "text-gold-700 font-bold"
                      : "text-charcoal-700 hover:text-gold-600 hover:bg-gold-50/50"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-gold-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA Buttons (>= lg) */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenBooking}
              className="bg-gold-500 hover:bg-gold-600 text-white px-5 py-2.5 rounded-xl font-medium text-xs tracking-wide uppercase shadow-xs transition-all flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              title="Chat on WhatsApp"
              className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-xs transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </motion.button>
          </div>

          {/* Mobile & Tablet Drawer Trigger (< lg) */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex bg-gold-500 hover:bg-gold-600 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider items-center gap-1.5 shadow-2xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xs"
              aria-label="Direct WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-charcoal-800 hover:bg-sand-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl z-50 p-6 flex flex-col justify-between lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-sand-200">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold-300">
                      <Image
                        src="/images/logo.png"
                        alt="M.S.A Anu Villa"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif font-semibold text-charcoal-900 tracking-wider">ANU VILLA</h4>
                      <p className="text-[10px] text-gold-600 uppercase tracking-widest font-semibold font-sans">Unawatuna • Galle</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-sand-100 text-charcoal-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="py-6 flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.id}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-sm font-semibold tracking-wide py-2.5 px-3 rounded-lg transition-colors ${
                        activeSection === link.id
                          ? "bg-gold-50 text-gold-700 font-bold"
                          : "text-charcoal-700 hover:bg-sand-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-sand-200 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-xl font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Your Stay</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleWhatsAppClick();
                  }}
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-xl font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
