/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BOSNET: {
          blue: "#02B0F1",
          red: "#FF0100",
          yellow: "#FEFF03",
          green: "#92D050",
        },
      },
    },
  },
  plugins: [],
};
