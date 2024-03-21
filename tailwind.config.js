/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        mentor: {
          DEFAULT: '#d6e2f0',
          'white': '#ffffff',
          'dblue': '#1f3251'
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
