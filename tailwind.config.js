/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "side-blue": "#0d47a1",
        "theme-color": "#f6fff8",
        'custom-blue': '#e3f2fd',
        "pale-blue":'#e3f2fd'
      },
      height: {
        "88": "22rem",
      },
      fontSize: {
        "xxs": "10px", // Changed from text to fontSize
      },
      fontFamily: {
        sans: ['Mona Sans', 'sans-serif'], // Use Mona Sans as your default sans font
      },
    },
  },
  plugins: [],
};
