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
        src: "/images/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
