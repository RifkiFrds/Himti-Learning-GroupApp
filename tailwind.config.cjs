/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#9038FF', 
        'secondary': '#0c0c0cff', 
        'accent': '#F97316', 
        'button': '#f9f6f4ff'
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [
     require('@tailwindcss/typography'),
  ],
}