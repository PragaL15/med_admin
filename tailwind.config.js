/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
 
  theme: {
    extend: {
      colors: {
        "side-bar": "#002D62",
        "theme-color": "#e3f2fd",
        'custom-blue': '#e3f2fd',
        "pale-blue":'#fffafa',
        "rec_bac":'#defaf3',
        "Add_details_bac":'#fffafa'
      },
      height: {
        "88": "22rem",
      },
      fontSize: {
        "xxs": "10px", 
      },
      fontFamily: {
        sans: ['Mona Sans', 'sans-serif'], 
      },
      '.input-class-drop': {
        '@apply w-full h-10 border border-gray-300 rounded-md px-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400': {},
      },
      '.input-class-inpbox':{
        '@apply w-full h-9 mt-2 border rounded p-3 text-sm':{},
      },
    
    },
  },
  plugins: [],
};
