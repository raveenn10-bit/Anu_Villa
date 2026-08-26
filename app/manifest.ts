import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "M.S.A Anu Villa — Unawatuna, Galle",
    short_name: "Anu Villa",
    description: "Luxury 6-Bedroom Private Pool Villa in Samagiya, Thalpe North, Unawatuna, Sri Lanka.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF9F5",
    theme_color: "#C59152",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
    ],
  };
}
