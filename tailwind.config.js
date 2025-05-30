/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0F0F0F',
        gray: {
          900: '#121212',
          800: '#1E1E1E',
          700: '#2D2D2D',
          600: '#383838',
          500: '#4F4F4F',
          400: '#9E9E9E',
          300: '#C4C4C4',
          200: '#E0E0E0',
          100: '#F5F5F5',
        },
      },
      boxShadow: {
        'inner-white': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.05)',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};