/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brown:{
          light:'#584328',
          DEFAULT:'#2f1400',
          dark:'#2d1401'
        }
      }
    },
  },
  plugins: [],
}