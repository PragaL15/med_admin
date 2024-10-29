/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', ],
  theme: {
    extend: {
        colors: {
            "side-blue" : "#335c67",
            "theme-color" :"#f6fff8"
        },
        height : {
          "88" : "22rem"
        }
    },
  },
  plugins: [],
}