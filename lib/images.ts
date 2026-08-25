/**
 * ANU VILLA — LUXURY VISUAL TREATMENT SYSTEM
 * ════════════════════════════════════════════
 *
 * Photography Art Direction:
 * Every image is curated for Tropical Coastal Luxury —
 * warm golden-hour light, lush natural greens, aquamarine
 * pool water, architectural negative space, no harsh flash,
 * no oversaturated color, no generic stock aesthetics.
 *
 * Color Grading Target:
 * → Lifted blacks (never pure black in shadows)
 * → Warm highlights (+8 temperature shift toward amber)
 * → Slightly desaturated greens (nature, not neon)
 * → Aqua/teal pool tones preserved
 * → Skin & stone: warm sand, not pink or grey
 *
 * Aspect Ratios:
 * → Hero:         21:9  (cinematic widescreen)
 * → About:        4:5   (editorial portrait plate)
 * → Cards:        4:3   (horizontal architectural)
 * → Gallery Full: 3:2   (35mm film frame)
 * → Gallery Tall: 2:3   (editorial portrait)
 * → Thumbnails:   1:1   (square precision crop)
 */

// ─────────────────────────────────────────────────────────────────
// IMAGE REGISTRY — Every image intentionally selected, not random
// ─────────────────────────────────────────────────────────────────
export const VILLA_IMAGES = {

  // ── HERO ─────────────────────────────────────────────────────
  // Art direction: Cinematic wide, villa exterior at golden hour.
  // Composition: Pool reflection leads eye to villa architecture.
  // Framing: Sky occupies top 30%, building centered, pool foreground.
  hero: {
    primary:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2400&q=90",
    // Alt (overcast light, architectural focus):
    secondary:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2400&q=88",
  },

  // ── ABOUT / STORY ────────────────────────────────────────────
  // Art direction: Alfresco patio, dappled tropical light through palms.
  // Mood: Unhurried, intimate, inviting — not staged, feels lived-in.
  about:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=88",

  // ── ROOMS & FACILITIES ───────────────────────────────────────
  facilities: {
    // Bedroom: Warm cream tones, shadow from wooden louvers across bed
    bedroom:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=85",
    // Bathroom: Rain shower, clean white ceramic, warm ambient light
    bathroom:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=85",
    // Pool: Crisp aquamarine water, sun loungers, tropical green border
    pool:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1000&q=85",
    // BBQ: Warm evening light, outdoor table setting, garden lanterns
    bbq:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85",
    // Kitchen: Natural daylight, clean lines, equipped worktops
    kitchen:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=85",
    // Garden: Lush tropical palms, dappled morning light, texture-rich path
    garden:
      "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1000&q=85",
  },

  // ── GALLERY ──────────────────────────────────────────────────
  // Art direction: Sequenced like an architectural editorial spread.
  // Rule: No two consecutive images share the same mood or aspect ratio.
  gallery: {
    // G01 — Villa exterior + pool (hero anchor, wide)
    exteriorPool:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=88",
    // G02 — Bedroom interior, warm morning backlight
    bedroom1:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=85",
    // G03 — En-suite bathroom, rain shower close-up
    bathroom:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=85",
    // G04 — Tropical garden path, coconut palms at noon
    garden:
      "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1000&q=85",
    // G05 — Kitchen worktop, natural light
    kitchen:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=85",
    // G06 — Pool at dusk, ambient lighting
    poolEvening:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1000&q=85",
    // G07 — Second bedroom suite, airy cream tones
    bedroom2:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85",
    // G08 — Living/lounge space, architectural light
    living:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
  },

  // ── NEARBY PLACES ────────────────────────────────────────────
  nearby: {
    // Turtle lagoon — shallow aqua water, natural reef
    turtleBeach:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=900&q=85",
    // Mihiripanne — golden sand, palm fringe, calm morning water
    mihiripanne:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
    // Thalpe rock pools — dramatic black coral rock, turquoise sea
    thalpe:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85",
    // Yatagala Temple — ancient rock, tropical flora, serene
    yatagala:
      "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=900&q=85",
    // Galle Fort — colonial ramparts, lighthouse, golden light
    gallefort:
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=900&q=85",
    // Koggala lake — mist over calm water, fishing stilts
    koggala:
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=900&q=85",
  },
};

// ─────────────────────────────────────────────────────────────────
// IMAGE TREATMENT SPECS — How every image should be displayed
// ─────────────────────────────────────────────────────────────────
export const IMAGE_TREATMENT = {
  // CSS filter applied to all villa images for warm cinematic grade
  cinematicFilter:
    "brightness(0.97) contrast(1.04) saturate(0.92)",

  // Warm tonal overlay rgba (applied as ::after pseudo or div)
  warmOverlay:
    "linear-gradient(135deg, rgba(197,145,82,0.06) 0%, rgba(197,145,82,0.00) 100%)",

  // Hero overlay: reading legibility
  heroOverlay:
    "linear-gradient(to right, rgba(11,15,13,0.92) 0%, rgba(11,15,13,0.70) 45%, rgba(11,15,13,0.10) 100%)",

  // Card bottom fade: title over image
  cardOverlay:
    "linear-gradient(to top, rgba(11,15,13,0.80) 0%, rgba(11,15,13,0.30) 50%, transparent 100%)",

  // Hover scale — ultra-slow zoom, 0.6s
  hoverTransition: "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)",
  hoverScale: "scale(1.06)",

  // Reveal animation — all images fade up on scroll
  revealProps: {
    initial: { opacity: 0, scale: 0.975 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
} as const;
