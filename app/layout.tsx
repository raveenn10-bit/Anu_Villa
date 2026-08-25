import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "M.S.A Anu Villa | 6-Bedroom Private Villa in Thalpe North, Unawatuna, Galle",
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
      <body className={`${playfair.variable} ${jakarta.variable} font-sans bg-sand-50 text-charcoal-800 antialiased selection:bg-gold-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
