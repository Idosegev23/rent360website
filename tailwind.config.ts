import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Clean neutral scale (Zinc-ish, warmer)
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
        // Subtle warm tint for backgrounds
        cream: {
          DEFAULT: '#FAF8F4',
          50: '#FDFCFA',
          100: '#FAF8F4',
          200: '#F3EFE7',
        },
        // Brand orange — unchanged
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
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(17,17,19,0.04), 0 8px 24px -12px rgba(17,17,19,0.08)',
        card: '0 1px 3px rgba(17,17,19,0.05), 0 20px 40px -20px rgba(17,17,19,0.12)',
        lift: '0 4px 12px rgba(17,17,19,0.06), 0 30px 60px -25px rgba(17,17,19,0.20)',
      },
      borderRadius: {
        '4xl': '2rem',
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
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        ticker: 'ticker 40s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
