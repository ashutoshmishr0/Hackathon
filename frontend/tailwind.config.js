/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
  darkTheme: "light",
 },
  plugins: [
    require('daisyui'),
  ],
}

