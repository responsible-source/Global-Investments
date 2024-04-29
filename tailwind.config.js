/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screen:{
      sm: '480px',
      md: '769px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        darkBlack: '#0c0c0c',
        Green: '#01bf71',
        bgTrans: '#232a34',
        Red: '#FF0000',
        Grey: '#E8E9EB'
      },
      fontFamily:{
        Encode:['Encode Sans Expanded']
      }
    },
  },
  plugins: [],
}

