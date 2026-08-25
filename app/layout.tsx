import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Cinzel,
  DM_Sans,
  Jost,
} from "next/font/google";
import "./globals.css";

// ─────────────────────────────────────────────────────────────────
// PRIMARY LUXURY DISPLAY SERIF — Cormorant Garamond
// ─────────────────────────────────────────────────────────────────
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

// ─────────────────────────────────────────────────────────────────
// ARCHITECTURAL LABEL FONT — Cinzel
// ─────────────────────────────────────────────────────────────────
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cinzel",
  display: "swap",
  preload: true,
});

// ─────────────────────────────────────────────────────────────────
// BODY TEXT — DM Sans
// ─────────────────────────────────────────────────────────────────
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
});

// ─────────────────────────────────────────────────────────────────
// UI & BUTTON FONT — Jost
// ─────────────────────────────────────────────────────────────────
const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#C59152",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://anuvilla.com"),
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
      <head>
        {/* Preconnect to CDN domain for instant image loading */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
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
