/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        'coffee': {
          50 : '#E8D6D0',
          200 : '#C89F94',
          400 : '#A25F4B',
          600 : '#744838'
        }
      },
      keyframes: {
        SlideDown: {
          '0%': { transform: 'translate(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeInAndSlideUp: {
          '0%': {transform: 'translate(-50%,50%)',  opacity: 0},
          '100%': { transform: 'translate(-50%,0)', opacity: 1}
        }
      },
      animation: {
        SlideDown: 'SlideDown 0.5s ease-in-out',
        fadeInAndSlideUp: 'fadeInAndSlideUp 0.5s ease-in-out'
      },
      backgroundImage: {
        'slider-bg': "url('./img/slider-bg.jpg')",
      }
    },
  },
  plugins: [],
}

