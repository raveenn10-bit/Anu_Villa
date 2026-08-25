import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#F9F5EC',
          200: '#F1E6D2',
          300: '#E4D1B0',
          400: '#D5B787',
          500: '#C59152', // Primary villa gold
          600: '#B07B3A',
          700: '#8E5F28',
          800: '#6D4720',
          900: '#4D3117',
        },
        stone: {
          50: '#FAF8F5',
          100: '#F3EFE8',
          200: '#E8E1D5',
          300: '#D8CEBE',
          400: '#C2B5A0',
          500: '#A89982',
        },
        sand: {
          50: '#FAF9F5',
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
        }
      },
      fontFamily: {
        editorial: ['var(--font-cormorant)', 'Playfair Display', 'Georgia', 'serif'],
        serif: ['var(--font-playfair)', 'var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['4.75rem', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        'display-xl': ['3.85rem', { lineHeight: '1.06', letterSpacing: '-0.025em' }],
        'display-lg': ['3.15rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.35rem', { lineHeight: '1.16', letterSpacing: '-0.015em' }],
      },
      boxShadow: {
        'cinema': '0 25px 60px -15px rgba(17, 23, 19, 0.12)',
        'cinema-lg': '0 35px 80px -20px rgba(17, 23, 19, 0.18)',
        'luxury': '0 10px 40px -10px rgba(197, 145, 82, 0.15)',
        'card-soft': '0 4px 24px -2px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
      }
    },
  },
  plugins: [],
};
export default config;
