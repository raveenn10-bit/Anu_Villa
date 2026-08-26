import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Cinzel,
  DM_Sans,
  Jost,
} from "next/font/google";
import "./globals.css";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Analytics } from "@vercel/analytics/next";

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
  metadataBase: new URL("https://www.msaanuvilla.com"),
  title: {
    default: "M.S.A Anu Villa | Luxury 6-Bedroom Private Pool Villa in Unawatuna, Thalpe, Galle",
    template: "%s | M.S.A Anu Villa",
  },
  description:
    "Book M.S.A Anu Villa in Samagiya, Thalpe North, Unawatuna. Private 6 en-suite A/C bedroom luxury villa with private pool, kitchen, BBQ garden, up to 12 guests from $140/night. 1.5 km to Turtle Beach & Dalawella Beach.",
  keywords: [
    "M.S.A Anu Villa",
    "Anu Villa",
    "Anu Villa Unawatuna",
    "Anu Villa Thalpe",
    "Anu Villa Galle",
    "M.S.A Anu Villa Thalpe North",
    "Private villa in Unawatuna with pool",
    "6 bedroom villa Unawatuna",
    "Luxury villa Thalpe Galle",
    "Villa for 12 guests Galle",
    "Dalawella beach villa",
    "Turtle beach villa Unawatuna",
    "Thalpe coral rock pools accommodation",
    "Sri Lanka private villa rental",
    "M. Mangala Anu Villa",
    "Cheap luxury villa Galle",
    "Whole villa for rent Unawatuna",
    "Family villa Unawatuna Galle",
    "Mihiripanne beach villa",
  ],
  authors: [{ name: "M.S.A Anu Villa — M. Mangala", url: "https://www.msaanuvilla.com" }],
  creator: "M.S.A Anu Villa",
  publisher: "M.S.A Anu Villa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "https://www.msaanuvilla.com",
    languages: {
      "en-US": "https://www.msaanuvilla.com",
      "x-default": "https://www.msaanuvilla.com",
    },
  },
  openGraph: {
    title: "M.S.A Anu Villa | Luxury 6-Bedroom Private Pool Villa in Unawatuna, Galle",
    description:
      "Exclusive 6-bedroom villa with private swimming pool, en-suite bathrooms, full kitchen & garden BBQ in Thalpe North, Unawatuna. $140/night for up to 12 guests.",
    url: "https://www.msaanuvilla.com",
    siteName: "M.S.A Anu Villa",
    images: [
      {
        url: "/images/hero/hero-slide-3.jpg",
        width: 1200,
        height: 630,
        alt: "M.S.A Anu Villa Swimming Pool & Sun Deck overlooking tropical palm forest",
      },
      {
        url: "/images/hero/hero-slide-1.jpg",
        width: 1200,
        height: 630,
        alt: "M.S.A Anu Villa Private Pool and Courtyard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M.S.A Anu Villa | Private Pool Villa in Unawatuna, Galle",
    description:
      "6-bedroom private pool villa in Thalpe North, Unawatuna. 1.5 km to Turtle Beach. Direct rates from $140/night.",
    images: ["/images/hero/hero-slide-3.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "travel",
  other: {
    "geo.region": "LK-31",
    "geo.placename": "Thalpe North, Unawatuna, Galle",
    "geo.position": "6.013238;80.260422",
    "ICBM": "6.013238, 80.260422",
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
        {/* Google Search & Browser Favicon declarations */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />

        {/* Preconnect to CDN & Fonts for optimal performance */}
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
        <SchemaMarkup />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
