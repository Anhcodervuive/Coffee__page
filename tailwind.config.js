/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        'light-coffee': '#C89F94'
      },
      keyframes: {
        SlideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        SlideDown: 'SlideDown 0.5s ease-in-out',
      },
      backgroundImage: {
        'slider-bg': "url('./img/slider-bg.jpg')",
      }
    },
  },
  plugins: [],
}

