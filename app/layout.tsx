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
  title: "Anu Villa | Luxury Private 4-Bedroom Holiday Villa in Unawatuna, Galle",
  description:
    "Experience pure serenity and luxury at Anu Villa Unawatuna, Galle. 4 A/C en-suite bedrooms, private swimming pool, 2 kitchens, lush tropical garden, just minutes from Unawatuna Beach & Galle Fort.",
  keywords: [
    "Anu Villa",
    "Anu Villa Unawatuna",
    "Villa in Galle",
    "Private Villa Unawatuna",
    "Holiday Villa Sri Lanka",
    "Villa with Private Pool Galle",
    "4 Bedroom Villa Unawatuna",
    "Luxury Stay Galle"
  ],
  authors: [{ name: "Anu Villa Unawatuna" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#C59152",
  openGraph: {
    title: "Anu Villa | Your Private Getaway in Galle",
    description:
      "A calm, peaceful, comfortable and beautiful Villa in the middle of lush green in Unawatuna, Galle. 4 AC bedrooms, 2 kitchens, private pool.",
    type: "website",
    locale: "en_US",
    siteName: "Anu Villa Unawatuna",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Anu Villa Unawatuna Logo",
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
