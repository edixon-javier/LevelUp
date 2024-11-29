/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: "opacitychange 1s ease-in-out infinite",
      },
      keyframes: {
        opacitychange: {
          "0%, 100%": { opacity: "0" },
          "80%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}

