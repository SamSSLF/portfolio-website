/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto Condensed", "sans-serif"],
        blenny: ["Blenny", "serif"],
        dapifer: ["Dapifer", "serif"],
      },
      screens: {
        "3xl": "2000px",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("flowbite/plugin"),
  ],
};
