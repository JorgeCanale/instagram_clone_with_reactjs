/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    spacing:{
    },
    extend: {
      margin:{
        '4px':'4px',
        '8px':'8px',
        '24px':'24px',
        '12px':'12px'
      }, padding:{
        '4px':'4px',
        '8px':'8px',
        '12px':'12px',
        '16px':'16px',
      },
      height:{
        '24px':'24px',
        '18px':'18px',
        '32px':'32px',
        '80px':'80px',
      },
      width:{
        '24px':'24px',
        '32px':'32px',
        '468px':'468px',
      }
    },
  },
  plugins: [],
}

