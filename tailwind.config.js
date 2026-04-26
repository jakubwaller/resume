// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme');

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'InterVariable', ...defaultTheme.fontFamily.sans],
        display: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        yellow: '#efc603',
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
        ink: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
      },
      backgroundImage: {
        'mesh-warm':
          'radial-gradient(at 18% 12%, rgba(249,115,22,0.18) 0px, transparent 55%), radial-gradient(at 82% 24%, rgba(16,185,129,0.14) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(168,85,247,0.12) 0px, transparent 55%)',
        'grid-zinc':
          'linear-gradient(to right, rgba(244,244,245,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(244,244,245,0.05) 1px, transparent 1px)',
        'noise-soft':
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.045 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      backgroundSize: {
        grid: '36px 36px',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(249,115,22,0.35), 0 10px 40px -10px rgba(249,115,22,0.45)',
        'glow-emerald': '0 0 0 1px rgba(16,185,129,0.30), 0 10px 40px -12px rgba(16,185,129,0.35)',
        bento:
          '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 0 0 1px rgba(255,255,255,0.06), 0 20px 50px -20px rgba(0,0,0,0.6)',
      },
      keyframes: {
        typing: {
          '0%, 100%': {width: '0%'},
          '30%, 70%': {width: '100%'},
        },
        blink: {
          '0%': {opacity: 0},
        },
        'rotate-loader': {
          '0%': {transform: 'rotate(0deg)', strokeDashoffset: '360%'},
          '100%': {transform: 'rotate(360deg)', strokeDashoffset: '-360%'},
        },
        'gradient-shift': {
          '0%, 100%': {backgroundPosition: '0% 50%'},
          '50%': {backgroundPosition: '100% 50%'},
        },
        'fade-up': {
          '0%': {opacity: 0, transform: 'translateY(12px)'},
          '100%': {opacity: 1, transform: 'translateY(0)'},
        },
        'pulse-soft': {
          '0%, 100%': {opacity: 1, transform: 'scale(1)'},
          '50%': {opacity: 0.65, transform: 'scale(1.4)'},
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'fade-up': 'fade-up 0.7s ease-out both',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
      },
      screens: {
        touch: {raw: 'only screen and (pointer: coarse)'},
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
