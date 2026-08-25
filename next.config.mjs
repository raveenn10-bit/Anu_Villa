/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com https://vitals.vercel-insights.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' blob: data: https://images.unsplash.com https://*.google.com https://*.googleapis.com https://maps.gstatic.com https://*.gstatic.com;
  font-src 'self' https://fonts.gstatic.com data:;
  media-src 'self' blob:;
  connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com https://*.google-analytics.com https://*.analytics.google.com;
  frame-src 'self' https://www.google.com https://maps.google.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self' https://wa.me;
  frame-ancestors 'none';
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, ' ').trim();

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy,
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self \"https://maps.google.com\"), browsing-topics=()",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
];

const nextConfig = {
  // Disable X-Powered-By header to prevent fingerprinting
  poweredByHeader: false,
  reactStrictMode: true,

  // ── Image Optimization & Security ──────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [390, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [64, 128, 256, 384, 640],
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
    removeConsole: process.env.NODE_ENV === "production"
      ? { exclude: ["error", "warn"] }
      : false,
  },

  // ── HTTP Response Security & Caching Headers ───────────────────
  async headers() {
    return [
      {
        // Apply strict enterprise security headers to all application routes
        source: "/:path*",
        headers: securityHeaders,
      },
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
    ];
  },
};

export default nextConfig;
