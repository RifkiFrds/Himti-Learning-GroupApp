/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#9038FF', 
        'secondary': '#0F172A', 
        'accent': '#F97316', 
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'], // Menggunakan font Poppins
      },
    },
  },
  plugins: [],
}