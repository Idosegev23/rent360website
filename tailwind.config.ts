import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neutral warm ink scale
        ink: {
          DEFAULT: '#111113',
          50: '#F7F7F8',
          100: '#EEEEF0',
          200: '#D4D4D8',
          300: '#A1A1AA',
          400: '#71717A',
          500: '#52525B',
          600: '#27272A',
          700: '#18181B',
          800: '#111113',
          900: '#09090B',
        },
        // Warm off-white backgrounds
        cream: {
          DEFAULT: '#FAF6EE',
          50: '#FEFCF7',
          100: '#FAF6EE',
          200: '#F3ECDC',
          300: '#E9DEC5',
        },
        // Earthy sand — warm, tactile
        sand: {
          DEFAULT: '#E9D9B8',
          50: '#FBF5E8',
          100: '#F5E8CB',
          200: '#EDD9AC',
          300: '#E3C78B',
          400: '#D5AE68',
          500: '#BD8F49',
          600: '#986E36',
        },
        // Terracotta clay — hearth accent
        clay: {
          DEFAULT: '#C9623F',
          50: '#FBEEE9',
          100: '#F5D4C6',
          200: '#E9A896',
          300: '#DC8268',
          400: '#C9623F',
          500: '#A84D2F',
          600: '#833B23',
        },
        // Brand — refined orange
        brand: {
          DEFAULT: '#F47B20',
          50: '#FEF3EB',
          100: '#FCE1CA',
          200: '#FAC08F',
          300: '#F79F55',
          400: '#F58E3D',
          500: '#F47B20',
          600: '#D96711',
          700: '#A14C0C',
          800: '#683108',
          900: '#2F1604',
        },
        // Deep forest / moss — trust accent
        moss: {
          DEFAULT: '#3F5541',
          50: '#EFF3EF',
          100: '#D7E0D8',
          200: '#A9B9AB',
          300: '#7B937F',
          400: '#5A7560',
          500: '#3F5541',
          600: '#2D3E30',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(17,17,19,0.04), 0 8px 24px -12px rgba(17,17,19,0.08)',
        card: '0 1px 3px rgba(17,17,19,0.05), 0 20px 40px -20px rgba(17,17,19,0.12)',
        lift: '0 4px 12px rgba(17,17,19,0.06), 0 30px 60px -25px rgba(17,17,19,0.20)',
        glow: '0 0 0 1px rgba(244,123,32,0.15), 0 20px 60px -20px rgba(244,123,32,0.35)',
        warm: '0 8px 30px -12px rgba(201,98,63,0.25), 0 4px 14px -8px rgba(189,143,73,0.18)',
        inset: 'inset 0 1px 0 rgba(255,255,255,0.6), inset 0 0 0 1px rgba(17,17,19,0.04)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backgroundImage: {
        'warm-radial':
          'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(244,123,32,0.10), transparent 60%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(201,98,63,0.08), transparent 60%)',
        'sunset':
          'linear-gradient(135deg, #F47B20 0%, #C9623F 50%, #833B23 100%)',
        'golden-hour':
          'linear-gradient(180deg, #FAF6EE 0%, #F5E8CB 60%, #EDD9AC 100%)',
        'grain':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.07 0 0 0 0 0.07 0 0 0 0 0.08 0 0 0 0.45 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        'dots':
          'radial-gradient(circle at 1px 1px, rgba(17,17,19,0.08) 1px, transparent 0)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'ticker-rev': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(1deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%) skewX(-20deg)' },
          '100%': { transform: 'translateX(200%) skewX(-20deg)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: '0.6' },
          '80%, 100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        'scroll-reveal': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'draw-line': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        ticker: 'ticker 44s linear infinite',
        'ticker-rev': 'ticker-rev 52s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        shimmer: 'shimmer 2.8s linear infinite',
        shine: 'shine 2s ease-in-out',
        'gradient-pan': 'gradient-pan 8s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.2s cubic-bezier(0.24,0,0.38,1) infinite',
        'scroll-reveal': 'scroll-reveal 0.7s cubic-bezier(0.2,0.65,0.3,0.95) forwards',
        'draw-line': 'draw-line 2s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
