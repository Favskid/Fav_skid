/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
          // You can easily add more fonts here later
        },
      },
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: ["light", "dark"],
    },
}
  