module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    './src/**/*.{html,js}',
     './node_modules/tw-elements/dist/js/**/*.js'

  
  

  ],
  theme: {
    extend: {
      borderRadius: {
        extraLarge: '12rem'
      },
      animation: {
        blob: "blob 12s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(8px, -10px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-10px, 10px) scale(0.7)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      }
    },
  },
  plugins: [
   
    require('tw-elements/dist/plugin')

  ],
  variants: {
    extend: {},
  },
}
