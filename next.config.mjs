/** @type {import('next').NextConfig} */
const nextConfig = {

  // ── Image Optimization ────────────────────────────────────────
  images: {
    // Serve AVIF first (40-50% smaller than WebP), WebP as fallback
    formats: ["image/avif", "image/webp"],

    // Cache optimized images for 1 year on Vercel Edge CDN
    minimumCacheTTL: 31536000,

    // Responsive breakpoints aligned with Tailwind sm/md/lg/xl/2xl
    deviceSizes: [390, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [64, 128, 256, 384, 640],

    // Allowed external image domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },

  // ── Compiler Optimizations ────────────────────────────────────
  compiler: {
    // Strip all console.log in production — no runtime cost
    removeConsole: process.env.NODE_ENV === "production"
      ? { exclude: ["error", "warn"] }
      : false,
  },

  // ── HTTP Response Headers ─────────────────────────────────────
  async headers() {
    return [
      {
        // Next.js static assets are content-hashed — safe to cache forever
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Vercel serves images via /_next/image — cache aggressively
        source: "/_next/image",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, must-revalidate",
          },
        ],
      },
      {
        // HTML pages — serve fresh but allow stale while revalidating
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=60, stale-while-revalidate=300",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
