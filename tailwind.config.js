/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        sign: ["sign","sans-serif"],
        base: ["base","sans-serif"],
        outliner: ["outliner","sans-serif"],
        lato: ["lato"]
      },
      keyframes:{
        burst: {
          '0%': { transform: 'scale(0)', opacity: 0 },
          '25%': { transform: 'scale(0.5)', opacity: 0.5 },
          '50%': { transform: 'scale(1.2)', opacity: 1 },
          '75%': { transform: 'scale(1.4)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        }
      },
      animation: {
        burst: 'burst .5s ease-out forwards',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}