/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    spacing: {},
    extend: {
      margin: {
        "4px": "4px",
        "8px": "8px",
        "12px": "12px",
        "16px": "16px",
        "24px": "24px",
      },
      padding: {
        "4px": "4px",
        "8px": "8px",
        "12px": "12px",
        "16px": "16px",
        "20px": "20px",
        "25px": "25px",
        "38px": "38px",
      },
      height: {
        "24px": "24px",
        "18px": "18px",
        "32px": "32px",
        "44px": "44px",
        "75px": "75px",
        "80px": "80px",
        "92px": "92px",
        "100vh": "100vh",
        "100dvh": "100dvh",
      },
      width: {
        "24px": "24px",
        "32px": "32px",
        "44px": "44px",
        "468px": "468px",
        "383px": "383px",
      },
    },
  },
  plugins: [],
};
