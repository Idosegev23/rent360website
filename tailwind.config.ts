import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Editorial neutral scale (Zinc, slightly warm)
        ink: {
          DEFAULT: '#0A0A0B',
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
          950: '#0A0A0B',
        },
        // Cream — used very sparingly as accent strip
        cream: {
          DEFAULT: '#FBF8F3',
          50: '#FDFBF7',
          100: '#FBF8F3',
          200: '#F4EEE2',
        },
        // Brand orange — kept exactly as-is
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
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      boxShadow: {
        // Restrained — only 2 levels
        line: '0 0 0 1px rgba(10,10,11,0.06)',
        lift: '0 1px 2px rgba(10,10,11,0.04), 0 12px 32px -16px rgba(10,10,11,0.16)',
      },
      borderRadius: {
        // Sharper defaults — most things stay rounded-md or rounded-lg
        '4xl': '2rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.2, 0, 0, 1) forwards',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
