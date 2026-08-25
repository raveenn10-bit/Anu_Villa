import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Cinzel,
  DM_Sans,
  Jost,
} from "next/font/google";
import "./globals.css";

// ─────────────────────────────────────────────────────────────────
// PRIMARY LUXURY DISPLAY SERIF — Cormorant Garamond
// Inspiration: Loro Piana, Dior, Bottega Veneta, The Row
// Use: H1, H2, Hero Headlines, Pull Quotes, Hero Italic accents
// Character: Italian Renaissance origin, hairline serifs, extreme
//   stroke contrast, exquisite at large sizes. Communicates old-money
//   luxury, restraint, and editorial confidence.
// ─────────────────────────────────────────────────────────────────
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

// ─────────────────────────────────────────────────────────────────
// ARCHITECTURAL LABEL FONT — Cinzel
// Inspiration: Rolls-Royce, Rolex, Roman Architectural Inscriptions
// Use: Section eyebrows, chapter numbers, coordinate labels,
//   badge text, navigation items, and all-caps structural markers.
// Character: Based on classical Roman lapidary letterforms. Pure,
//   timeless, architecturally precise. The Hermès of label fonts.
// ─────────────────────────────────────────────────────────────────
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
  preload: true,
});

// ─────────────────────────────────────────────────────────────────
// BODY TEXT — DM Sans
// Inspiration: Architectural Digest, Wallpaper*, Condé Nast
// Use: All body copy, descriptions, paragraphs, form text, FAQs
// Character: Geometric humanist sans designed for editorial clarity.
//   Generous x-height, clean strokes, outstanding legibility at
//   small sizes. Pairs beautifully with high-contrast display serifs.
// ─────────────────────────────────────────────────────────────────
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
});

// ─────────────────────────────────────────────────────────────────
// UI & BUTTON FONT — Jost
// Inspiration: Bang & Olufsen, Aesop, luxury DTC brands
// Use: Navigation links, CTA buttons, stats, price labels, tags
// Character: Geometric precision with optical balance. Zero visual
//   noise. At uppercase tracking, it reads like a precision instrument.
//   The mechanical clarity elevates buttons and labels above ordinary.
// ─────────────────────────────────────────────────────────────────
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-jost",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "M.S.A Anu Villa | 6-Bedroom Private Luxury Villa in Thalpe North, Unawatuna, Galle",
  description:
    "Escape the busy city life at M.S.A Anu Villa in Samagiya, Thalpe North, Unawatuna. 6 A/C en-suite bedrooms, private swimming pool, kitchen, BBQ, up to 12 guests, just 1.5 km to beach. $140/night.",
  keywords: [
    "M.S.A Anu Villa",
    "Anu Villa",
    "Anu Villa Unawatuna",
    "Thalpe North Villa",
    "Villa in Galle",
    "Private Villa Unawatuna",
    "Holiday Villa Sri Lanka",
    "Villa with Private Pool Galle",
    "6 Bedroom Villa Unawatuna",
    "12 Guests Villa Galle",
    "Turtle Beach Villa",
    "Thalpe Beach Villa",
    "Luxury Stay Galle"
  ],
  authors: [{ name: "M.S.A Anu Villa - M. Mangala" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#C59152",
  openGraph: {
    title: "M.S.A Anu Villa | Your Perfect Getaway in Unawatuna",
    description:
      "A calm, peaceful, comfortable stay in Samagiya, Thalpe North, Unawatuna. 6 AC bedrooms with attached bathrooms, private pool, BBQ, up to 12 guests.",
    type: "website",
    locale: "en_US",
    siteName: "M.S.A Anu Villa",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "M.S.A Anu Villa Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${cormorant.variable}
          ${cinzel.variable}
          ${dmSans.variable}
          ${jost.variable}
          font-body bg-sand-50 text-charcoal-800 antialiased
          selection:bg-gold-500 selection:text-white
        `}
      >
        {children}
      </body>
    </html>
  );
}
