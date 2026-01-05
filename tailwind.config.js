/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a365d',
          light: '#2d4a7c',
          dark: '#0f2942',
        },
        gold: {
          DEFAULT: '#c6a052',
          hover: '#a8873f',
          light: '#d4b46a',
        },
        gray: {
          50: '#f7fafc',
          100: '#edf2f7',
          200: '#e2e8f0',
          300: '#cbd5e0',
          400: '#a0aec0',
          500: '#718096',
          600: '#4a5568',
          700: '#2d3748',
          800: '#1a202c',
          900: '#171923',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'h1-xs': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '700' }],
        'h1-mobile': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }],
        'h1-tablet': ['3rem', { lineHeight: '3.25rem', fontWeight: '700' }],
        'h1-desktop': ['3.75rem', { lineHeight: '4rem', fontWeight: '700' }],
        'h2-mobile': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '700' }],
        'h2-tablet': ['2.25rem', { lineHeight: '2.75rem', fontWeight: '700' }],
        'h2-desktop': ['3rem', { lineHeight: '3.5rem', fontWeight: '700' }],
        'h3-mobile': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
        'h3-tablet': ['1.75rem', { lineHeight: '2.25rem', fontWeight: '600' }],
        'h3-desktop': ['2rem', { lineHeight: '2.5rem', fontWeight: '600' }],
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
        128: '32rem',
      },
      lineHeight: {
        'body': '1.75',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};
