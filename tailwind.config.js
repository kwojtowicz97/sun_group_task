/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class',
  theme: {
    extend: {
      screens: {
        xl: '1340px',
        md: '820px'
      },
      colors: {
        'primary-black': '#190F14',
        'font-black': '#242221'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
