/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      backgroundImage:{
        'bgi':"url('./assets/bg2.jpg')",
      },
      fontFamily:{
        majime:['majime','san-serif']
      }
    },
  },
  plugins: [],
}

