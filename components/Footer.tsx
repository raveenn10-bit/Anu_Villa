"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUp, ArrowUpRight, ChevronLeft, ChevronRight, Clock, Facebook, MapPin, MessageCircle, Pause, Phone, Play, X } from "lucide-react";
import { VILLA_DATA } from "@/data/villaData";
import styles from "./Footer.module.css";

const links = [["Home", "home"], ["The Villa", "about"], ["Rooms & Facilities", "facilities"], ["Gallery", "gallery"], ["Rates & Booking", "rates"], ["Contact", "contact"]];
const photos = [
  { src: "/images/villa/apartment-1/apartment-1-08.webp", alt: "Canopy bedroom at Anu Villa", label: "Rest beautifully" },
  { src: "/images/hero/hero-slide-3.webp", alt: "Private swimming pool and tropical greenery at Anu Villa", label: "Your private escape" },
  { src: "/images/attractions/dalawella-turtle-beach.webp", alt: "Nearby Dalawella Turtle Beach", label: "Discover the coast" },
  { src: "/images/hero/hero-slide-2.webp", alt: "Anu Villa poolside dining patio", label: "Gather together" },
];

function Palm({ className }: { className: string }) {
  return <svg aria-hidden="true" viewBox="0 0 250 310" className={className} fill="none">
    <path d="M126 302C112 230 113 154 143 69" stroke="currentColor" strokeWidth="3" />
    {[-75, -48, -22, 16, 45, 72].map((angle) => <g key={angle} transform={`rotate(${angle} 142 70)`}>
      <path d="M142 70Q79 64 37 163Q115 134 142 70Z" fill="currentColor" fillOpacity=".3" stroke="currentColor" />
      <path d="M142 70Q89 99 37 163" stroke="currentColor" />
      {[0,1,2,3,4,5].map((i) => <path key={i} d={`M${130-i*13} ${82+i*12}l${-20-i*2} -4m${20+i*2} 4l2 17`} stroke="currentColor" strokeOpacity=".6" />)}
    </g>)}
  </svg>;
}

function Wave({ bottom = false }: { bottom?: boolean }) {
  return <div aria-hidden="true" className={`${styles.wave} ${bottom ? styles.bottomWave : ""}`}>
    <svg viewBox="0 0 1440 160" preserveAspectRatio="none">
      <path className={styles.waveFill} d="M0 87C190 137 310 140 460 99S650 7 735 28S840 124 1040 106S1250 39 1440 64V160H0Z" />
      <path className={styles.waveLine} d="M0 87C190 137 310 140 460 99S650 7 735 28S840 124 1040 106S1250 39 1440 64" />
      <path className={styles.waveGleam} d="M0 87C190 137 310 140 460 99S650 7 735 28S840 124 1040 106S1250 39 1440 64" />
    </svg>
  </div>;
}

export default function Footer() {
  const [paused, setPaused] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  const [offset, setOffset] = useState(0);
  const whatsapp = `https://wa.me/${VILLA_DATA.whatsappNumber}?text=${encodeURIComponent("Hello M.S.A Anu Villa! I would like to enquire about availability.")}`;
  const ordered = photos.map((_, i) => photos[(i + offset + photos.length) % photos.length]);

  return (
    <footer className={`${styles.footer} ${paused ? styles.paused : ""}`}>
      <div className={styles.scene}>
        <Image src="/images/hero/hero-slide-3.webp" alt="Anu Villa pool deck surrounded by tropical greenery" fill sizes="100vw" className={styles.scenePhoto} />
        <div className={styles.sceneShade} />
        <Palm className={`${styles.palm} ${styles.palmTop}`} />
        <div className={styles.sceneCopy}>
          <span className={styles.eyebrow}>A private sanctuary in Unawatuna</span>
          <h2>Moments<br /><em>belong here.</em></h2>
          <button className={styles.storyButton} onClick={() => setStoryOpen(true)}><span><Play size={15} fill="currentColor" /></span>Watch our story</button>
        </div>
        <button className={styles.backTop} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><span><ArrowUp size={24} strokeWidth={1.3} /></span>Back to top</button>
        <Wave />
      </div>

      <div aria-hidden="true" className={styles.sparkles}>
        {Array.from({ length: 16 }, (_, i) => <i key={i} style={{ left: `${3 + (i * 37) % 94}%`, top: `${20 + (i * 19) % 65}%`, animationDelay: `${i * -0.73}s`, animationDuration: `${4 + i % 4}s` }} />)}
      </div>

      <div className={styles.content}>
        <a href="#home" className={styles.crest} aria-label="Anu Villa home">
          <Image src="/images/logo-transparent.png" alt="" width={70} height={70} />
          <span>ANU VILLA</span><small>U N A W A T U N A</small>
        </a>
        <div className={styles.columns}>
          <div className={styles.intro}>
            <p className={styles.brand}>{VILLA_DATA.officialName}</p>
            <p>A private sanctuary for families and friends. Comfort and nature come together for a stay to remember.</p>
            <div className={styles.socials}>
              <a href={VILLA_DATA.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={16} /></a>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={16} /></a>
              <a href={VILLA_DATA.social.googleMaps} target="_blank" rel="noopener noreferrer" aria-label="Google Maps"><MapPin size={16} /></a>
              <a href={VILLA_DATA.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16 2h-3v13a3 3 0 1 1-3-3V9a6 6 0 1 0 6 6V8a8 8 0 0 0 5 2V7a5 5 0 0 1-5-5Z" /></svg></a>
            </div>
          </div>
          <div>
            <h3 className={styles.columnTitle}>Quick links</h3>
            <nav className={styles.links}>{links.map(([label, id]) => <Link key={id} href={`#${id}`}>{label}<ArrowUpRight size={13} /></Link>)}</nav>
          </div>
          <div>
            <h3 className={styles.columnTitle}>Get in touch</h3>
            <div className={styles.contact}>
              <a href={VILLA_DATA.social.googleMaps} target="_blank" rel="noopener noreferrer"><MapPin size={19} /><span>{VILLA_DATA.location}</span></a>
              {VILLA_DATA.phones.map((phone, i) => <a key={phone} href={`tel:+${VILLA_DATA.rawPhones[i]}`}><Phone size={16} /><span>{phone}</span></a>)}
              <div><Clock size={18} /><span>Check-in: {VILLA_DATA.checkInTime}<br />Check-out: {VILLA_DATA.checkOutTime}</span></div>
            </div>
          </div>
          <div className={styles.reservations}>
            <h3 className={styles.columnTitle}>Your next escape</h3>
            <p>Six en-suite rooms, a private pool and time to slow down. Plan your stay with our host, {VILLA_DATA.hostName}.</p>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={styles.enquire}>Enquire about your stay<ArrowUpRight size={17} /></a>
            <div className={styles.bookingLinks}>
              <a href={VILLA_DATA.social.bookingCom} target="_blank" rel="noopener noreferrer">Booking.com <ArrowUpRight size={12} /></a>
              <a href={VILLA_DATA.social.airbnb} target="_blank" rel="noopener noreferrer">Airbnb <ArrowUpRight size={12} /></a>
            </div>
          </div>
        </div>

        <div className={styles.memories}>
          <div className={styles.coast}>
            <Image src="/images/attractions/dalawella-turtle-beach.webp" alt="Nearby Dalawella coastline" fill sizes="(max-width: 767px) 100vw, 45vw" />
            <div />
            <p>Salt in the air.<br /><em>Memories to keep.</em></p>
            <Link href="#nearby">Explore nearby <ArrowDownRight size={16} /></Link>
          </div>
          <div className={styles.photos}>
            <div className={styles.photoStack}>
              {ordered.slice(0, 3).map((photo, i) => <Link key={photo.src} href="#gallery" className={styles.photoCard} style={{ animationDelay: `${i * -1.5}s` }}>
                <div><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 767px) 42vw, 16vw" /></div><span>{photo.label}</span>
              </Link>)}
            </div>
            <div className={styles.photoControls}>
              <button aria-label="Previous footer photos" onClick={() => setOffset((v) => (v - 1 + photos.length) % photos.length)}><ChevronLeft size={17} /></button>
              <Link href="#gallery">A glimpse of your stay</Link>
              <button aria-label="Next footer photos" onClick={() => setOffset((v) => (v + 1) % photos.length)}><ChevronRight size={17} /></button>
            </div>
          </div>
          <Palm className={`${styles.palm} ${styles.palmBottom}`} />
        </div>

        <div className={styles.destination}><span>Unawatuna <b>✦</b> Sri Lanka</span><small>Luxury · Nature · Memories</small></div>
        <Wave bottom />
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} {VILLA_DATA.officialName}. All rights reserved.</p>
          <p>Designed with care by <span>Harsh Apex</span></p>
          <button onClick={() => setPaused((v) => !v)} aria-pressed={paused} aria-label={paused ? "Play footer animations" : "Pause footer animations"}>{paused ? <Play size={12} /> : <Pause size={12} />}{paused ? "Play motion" : "Pause motion"}</button>
        </div>
      </div>

      {storyOpen && <div className={styles.modal} role="dialog" aria-modal="true" aria-label="Anu Villa video">
        <button className={styles.modalBackdrop} aria-label="Close video" onClick={() => setStoryOpen(false)} />
        <div className={styles.videoPanel}>
          <button className={styles.videoClose} aria-label="Close video" onClick={() => setStoryOpen(false)}><X size={22} /></button>
          <video controls autoPlay playsInline poster="/images/hero/hero-slide-1.webp"><source src="/videos/hero-bg.mp4" type="video/mp4" /></video>
        </div>
      </div>}
    </footer>
  );
}
