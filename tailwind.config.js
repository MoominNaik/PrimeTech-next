const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
    './pages/**/*.{js,jsx,ts,tsx,mdx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', ...defaultTheme.fontFamily.sans],
        bebas: ['"Bebas Neue"', 'cursive'],
        oswald: ['Oswald', 'sans-serif'],
      },
      keyframes: {
        fadeInUp40: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        textSlideIn: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        listFadeIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp40: 'fadeInUp40 1.2s ease-out forwards',
        textSlideIn: 'textSlideIn 1.2s ease-in-out forwards',
        slideInRight: 'slideInRight 1.2s ease-out forwards',
        listFadeIn: 'listFadeIn 1s ease-in-out forwards',
        slideInDown: 'slideInDown 1.2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};