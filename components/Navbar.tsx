"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Menu, X, Calendar, Sun, Moon, Sparkles } from "lucide-react";
import { VILLA_DATA } from "@/data/villaData";

interface NavbarProps {
  onOpenBooking: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ onOpenBooking, isDark, onToggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
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
    const message = encodeURIComponent("Hello Anu Villa! I'm interested in booking your villa in Unawatuna. Could you please share availability and rates?");
    window.open(`https://wa.me/${VILLA_DATA.whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-[#0E1612]/95 backdrop-blur-md shadow-sm dark:shadow-black/40 py-3 border-b border-sand-200 dark:border-white/10"
            : "bg-white/85 dark:bg-[#0E1612]/85 backdrop-blur-sm py-4 border-b border-sand-100 dark:border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-white dark:bg-tropical-deep shadow-sm border border-gold-200/80 dark:border-gold-500/40 p-0.5 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Anu Villa Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-charcoal-900 dark:text-white leading-none group-hover:text-gold-500 transition-colors">
                ANU VILLA
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-gold-600 dark:text-gold-400 font-semibold mt-1">
                Unawatuna • Galle
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-all relative rounded-full ${
                    isActive
                      ? "text-gold-600 dark:text-gold-400 font-semibold"
                      : "text-charcoal-700 dark:text-charcoal-300 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-gold-50/60 dark:hover:bg-tropical-surface/60"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-500 dark:bg-gold-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={onToggleTheme}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme"
              className="w-10 h-10 rounded-xl bg-sand-100 dark:bg-tropical-surface text-charcoal-700 dark:text-gold-400 border border-sand-200 dark:border-white/10 flex items-center justify-center transition-colors hover:border-gold-300"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            {/* Book Now Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenBooking}
              className="bg-gold-500 hover:bg-gold-600 dark:bg-gold-600 dark:hover:bg-gold-500 text-white px-5 py-2.5 rounded-xl font-medium text-sm shadow-sm transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </motion.button>

            {/* WhatsApp Icon Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              title="Chat on WhatsApp"
              className="w-10 h-10 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-sm transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </motion.button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="w-9 h-9 rounded-lg bg-sand-100 dark:bg-tropical-surface text-charcoal-700 dark:text-gold-400 flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="w-9 h-9 rounded-lg bg-[#25D366] text-white flex items-center justify-center"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-charcoal-800 dark:text-white hover:bg-sand-100 dark:hover:bg-tropical-surface transition-colors"
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white dark:bg-[#0E1612] shadow-2xl z-50 p-6 flex flex-col justify-between lg:hidden border-l border-sand-200 dark:border-white/10"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-sand-200 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold-300 bg-white">
                      <Image
                        src="/images/logo.png"
                        alt="Anu Villa"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-charcoal-900 dark:text-white">ANU VILLA</h4>
                      <p className="text-[10px] text-gold-600 dark:text-gold-400 uppercase tracking-widest font-semibold">Unawatuna • Galle</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-sand-100 dark:hover:bg-tropical-surface text-charcoal-600 dark:text-charcoal-300"
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
                      className={`text-base font-medium py-2.5 px-3 rounded-xl transition-colors ${
                        activeSection === link.id
                          ? "bg-gold-50 dark:bg-tropical-surface text-gold-700 dark:text-gold-400 font-semibold"
                          : "text-charcoal-700 dark:text-charcoal-300 hover:bg-sand-50 dark:hover:bg-tropical-surface/50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-sand-200 dark:border-white/10 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Your Stay</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleWhatsAppClick();
                  }}
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-md"
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
