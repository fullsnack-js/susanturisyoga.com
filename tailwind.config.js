const { theme } = require('@sanity/demo/tailwind')
const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './intro-template/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    ...theme,
    colors: { ...colors, 'brand': {
      DEFAULT: '#3F6374',
      50: '#EFF4F6',
      100: '#E2EBEF',
      200: '#C7D8E1',
      300: '#ADC6D2',
      400: '#92B4C4',
      500: '#78A2B6',
      600: '#5D90A7',
      700: '#4D7A8E',
      800: '#3F6374',
      900: '#2B4450'
    },
    // {  DEFAULT: '#F8F7F7',  50: '#FFFFFF',  100: '#F8F7F7',  200: '#DDD9D9',  300: '#C3BBBB',  400: '#A99E9E',  500: '#8E8080',  600: '#726565',  700: '#544A4A',  800: '#363030',  900: '#181616',  950: '#090808'}, 
  },
    // Overriding fontFamily to use @next/font loaded families
    fontFamily: {
      mono: 'var(--font-mono)',
      sans: 'var(--font-sans)',
      serif: 'var(--font-serif)',
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
