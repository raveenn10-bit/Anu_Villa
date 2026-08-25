import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─────────────────────────────────────────────────────────────
      // LUXURY COLOR PALETTE
      // ─────────────────────────────────────────────────────────────
      colors: {
        gold: {
          50:  '#FDFBF7',
          100: '#F9F5EC',
          200: '#F1E6D2',
          300: '#E4D1B0',
          400: '#D5B787',
          500: '#C59152',   // Antique Villa Gold
          600: '#B07B3A',
          700: '#8E5F28',
          800: '#6D4720',
          900: '#4D3117',
        },
        sand: {
          50:  '#FAF9F5',
          100: '#F4F1EA',
          200: '#EBE5D8',
          300: '#DDD4C0',
          400: '#C6BA9F',
        },
        noir: {
          950: '#0B0F0D',
          900: '#111713',
          850: '#18211B',
          800: '#222D26',
        },
        charcoal: {
          950: '#0F1113',
          900: '#1A1D20',
          800: '#25292E',
          700: '#383E46',
          600: '#525B67',
          500: '#717B8A',
          400: '#9CA3AF',
          300: '#C4CAD4',
        },
      },

      // ─────────────────────────────────────────────────────────────
      // LUXURY TYPOGRAPHY SYSTEM
      // Font Roles:
      //   font-display   → Cormorant Garamond  (H1, H2, Hero, Quotes)
      //   font-cinzel    → Cinzel              (Eyebrows, Labels, Nav)
      //   font-body      → DM Sans             (Body, Descriptions, UI)
      //   font-ui        → Jost                (Buttons, Captions, Tags)
      //
      // Deprecated aliases kept for backward compat:
      //   font-editorial → Cormorant Garamond
      //   font-serif     → Cormorant Garamond
      //   font-sans      → DM Sans
      // ─────────────────────────────────────────────────────────────
      fontFamily: {
        // Primary roles
        display:   ['var(--font-cormorant)', 'Georgia', 'Times New Roman', 'serif'],
        cinzel:    ['var(--font-cinzel)', 'Cinzel', 'Georgia', 'serif'],
        body:      ['var(--font-dm-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        ui:        ['var(--font-jost)', 'var(--font-dm-sans)', 'system-ui', 'sans-serif'],

        // Backward compat aliases
        editorial: ['var(--font-cormorant)', 'Georgia', 'serif'],
        serif:     ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:      ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },

      // ─────────────────────────────────────────────────────────────
      // TYPOGRAPHIC SCALE
      // Based on a 1.250 Major Third modular scale with optical tuning
      //
      // DESKTOP SCALE:
      //   Display XXL  → 96px  / Cormorant w300 ls-0.04em lh0.94  (Hero)
      //   Display XL   → 76px  / Cormorant w300 ls-0.03em lh0.96  (H1)
      //   Display LG   → 56px  / Cormorant w400 ls-0.025em lh1.04 (H2)
      //   Display MD   → 42px  / Cormorant w400 ls-0.02em lh1.1   (H3)
      //   Display SM   → 32px  / Cormorant w500 ls-0.015em lh1.15 (H4)
      //   Title        → 22px  / DM Sans  w600 ls0 lh1.3          (H5)
      //   Label        → 13px  / Cinzel   w500 ls0.22em UC         (H6 / eyebrow)
      //   Body LG      → 18px  / DM Sans  w400 ls0 lh1.78          (Lead paragraph)
      //   Body MD      → 16px  / DM Sans  w400 ls0 lh1.72          (Standard body)
      //   Body SM      → 14px  / DM Sans  w400 ls0 lh1.68          (Secondary body)
      //   Caption      → 12px  / Jost     w500 ls0.06em lh1.5      (Captions, tags)
      //   Micro        → 10px  / Jost     w600 ls0.2em UC          (Badges, labels)
      //   Quote        → 26px  / Cormorant italic w400 ls-0.01em lh1.4 (Pull quotes)
      //   Nav          → 11px  / Jost     w600 ls0.18em UC         (Navigation)
      //   Button       → 12px  / Jost     w700 ls0.2em UC          (CTA Buttons)
      //   Price        → 48px  / Cormorant w300 ls-0.02em lh1      (Rate display)
      // ─────────────────────────────────────────────────────────────
      fontSize: {
        // Display Scale (Cormorant Garamond)
        'display-xxl': ['6rem',   { lineHeight: '0.94', letterSpacing: '-0.04em' }],
        'display-xl':  ['4.75rem',{ lineHeight: '0.96', letterSpacing: '-0.03em' }],
        'display-lg':  ['3.5rem', { lineHeight: '1.04', letterSpacing: '-0.025em' }],
        'display-md':  ['2.625rem',{ lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm':  ['2rem',   { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'display-xs':  ['1.5rem', { lineHeight: '1.2',  letterSpacing: '-0.01em' }],

        // Pull quote
        'quote':       ['1.625rem',{ lineHeight: '1.45', letterSpacing: '-0.01em' }],
        'quote-sm':    ['1.25rem', { lineHeight: '1.5',  letterSpacing: '0' }],

        // Body Scale (DM Sans)
        'body-xl':     ['1.25rem', { lineHeight: '1.75', letterSpacing: '0' }],
        'body-lg':     ['1.125rem',{ lineHeight: '1.78', letterSpacing: '0' }],
        'body-md':     ['1rem',    { lineHeight: '1.72', letterSpacing: '0' }],
        'body-sm':     ['0.875rem',{ lineHeight: '1.68', letterSpacing: '0' }],
        'body-xs':     ['0.8125rem',{ lineHeight: '1.6', letterSpacing: '0.005em' }],

        // UI Label Scale (Jost / Cinzel)
        'label-lg':    ['0.875rem',{ lineHeight: '1.4', letterSpacing: '0.16em' }],
        'label-md':    ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.2em'  }],
        'label-sm':    ['0.6875rem',{ lineHeight: '1.4', letterSpacing: '0.22em' }],
        'label-xs':    ['0.625rem',{ lineHeight: '1.4', letterSpacing: '0.26em' }],

        // Navigation (Jost)
        'nav':         ['0.6875rem',{ lineHeight: '1',   letterSpacing: '0.18em' }],

        // Button (Jost)
        'btn-lg':      ['0.8125rem',{ lineHeight: '1',   letterSpacing: '0.2em' }],
        'btn-md':      ['0.75rem', { lineHeight: '1',    letterSpacing: '0.2em' }],
        'btn-sm':      ['0.6875rem',{ lineHeight: '1',   letterSpacing: '0.18em' }],

        // Price / Stat Display (Cormorant)
        'price':       ['3rem',    { lineHeight: '1',    letterSpacing: '-0.02em' }],
        'stat':        ['2.25rem', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
      },

      // ─────────────────────────────────────────────────────────────
      // LETTER SPACING TOKENS
      // ─────────────────────────────────────────────────────────────
      letterSpacing: {
        tightest:  '-0.04em',
        tighter:   '-0.03em',
        tight:     '-0.02em',
        snug:      '-0.01em',
        normal:    '0em',
        wide:      '0.06em',
        wider:     '0.12em',
        widest:    '0.18em',
        ultra:     '0.26em',
        extreme:   '0.32em',
      },

      // ─────────────────────────────────────────────────────────────
      // LINE HEIGHT TOKENS
      // ─────────────────────────────────────────────────────────────
      lineHeight: {
        none:      '1',
        cinematic: '0.94',
        editorial: '1.04',
        heading:   '1.15',
        subhead:   '1.3',
        relaxed:   '1.55',
        body:      '1.72',
        loose:     '1.78',
        airy:      '1.9',
      },

      // ─────────────────────────────────────────────────────────────
      // SHADOWS
      // ─────────────────────────────────────────────────────────────
      boxShadow: {
        'cinema':    '0 25px 60px -15px rgba(17, 23, 19, 0.12)',
        'cinema-lg': '0 35px 80px -20px rgba(17, 23, 19, 0.18)',
        'luxury':    '0 10px 40px -10px rgba(197, 145, 82, 0.15)',
        'card-soft': '0 4px 24px -2px rgba(0, 0, 0, 0.04)',
        '2xs':       '0 1px 2px 0 rgba(0,0,0,0.04)',
        'xs':        '0 1px 4px 0 rgba(0,0,0,0.06)',
      },

      // ─────────────────────────────────────────────────────────────
      // ANIMATIONS
      // ─────────────────────────────────────────────────────────────
      animation: {
        'float-slow':  'float 6s ease-in-out infinite',
        'pulse-glow':  'pulseGlow 3s ease-in-out infinite',
        'fade-up':     'fadeUp 0.7s ease forwards',
        'fade-in':     'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%':      { opacity: '1',   transform: 'scale(1.04)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
