/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFDB00",
        },
        secondary: {
          light: "#3B4559",
          DEFAULT: "#243840",
        },
        grey: {
          light: "#E9E9E9",
          DEFAULT: "#707070",
        },
      },
      screens: {
        xs: "464px",
      },
      fontFamily: {
        sans: ["Arial"],
      },
    },
  },
  plugins: [],
}
