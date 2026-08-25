import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
          500: '#C59152', // Primary mockup gold
          600: '#B07B3A',
          700: '#8E5F28',
          800: '#6D4720',
          900: '#4D3117',
        },
        sand: {
          50: '#FAF9F5',
          100: '#F4F1EA',
          200: '#EBE5D8',
          300: '#DDD4C0',
          400: '#C6BA9F',
        },
        tropical: {
          dark: '#0e1612',
          deep: '#14201a',
          surface: '#1b2a22',
          card: '#22342b',
          green: '#1E3A2B',
          light: '#2E5944',
          accent: '#3E7B5C',
        },
        charcoal: {
          950: '#0B0D0E',
          900: '#111315',
          800: '#1C1E22',
          700: '#2A2E35',
          600: '#484E59',
          500: '#6B7280',
          400: '#9CA3AF',
          300: '#D1D5DB',
          200: '#E5E7EB',
          100: '#F3F4F6',
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 40px -10px rgba(197, 145, 82, 0.15)',
        'luxury-lg': '0 20px 50px -15px rgba(20, 35, 28, 0.12)',
        'luxury-dark': '0 20px 50px -15px rgba(0, 0, 0, 0.6)',
        'card-soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
