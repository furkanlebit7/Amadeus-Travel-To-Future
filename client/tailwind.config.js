/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: "#015FB7",
        second: "#F7A725",
        whiteBg: "#F6F6F8",
        darkContent: "#262626",
        darkBg: "#313131",
      },
    },
  },
  plugins: [],
};
