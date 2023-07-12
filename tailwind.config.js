/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    spacing:{
    },
    extend: {
      margin:{
        '4px':'4px',
        '24px':'24px',
        '12px':'12px'
      }, padding:{
        '4px':'4px',
        '12px':'12px',
      },
      height:{
        '32px':'32px',
      },
      width:{
        '32px':'32px',
      }
    },
  },
  plugins: [],
}

