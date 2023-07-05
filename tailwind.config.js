/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/preline/dist/*.js",
    "./node_modules/flowbite/*.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("preline/plugin"),
    require("@headlessui/tailwindcss"),
    require("flowbite/plugin"),
  ],
};
