/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "side-blue": "#022F40",
        "theme-color": "#DBF8FF",
        'custom-blue': '#e3f2fd',
        "pale-blue":'#DBF8FF',
        "rec_bac":'#F0FCFF'
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
