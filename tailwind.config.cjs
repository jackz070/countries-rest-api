/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    fontFamily: { sans: ["Nunito Sans", "sans-serif"] },
    extend: {
      colors: {
        darkPrimary: "hsl(209, 23%, 22%)",
        darkSecondary: " hsl(207, 26%, 17%)",
        lightPrimary: "hsl(0, 0%, 98%)",
        darkGray: "hsl(0, 0%, 52%)",
        lightModeText: "hsl(200, 15%, 8%)",
      },
    },
  },
  plugins: [],
};
