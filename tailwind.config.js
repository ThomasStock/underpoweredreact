/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": {
            transform: "rotate(-1deg)",
            "animation-timing-function": "ease-in",
          },
          "50%": {
            transform: "rotate(1.5deg)",
            "animation-timing-function": "ease-out",
          },
        },
      },
      animation: {
        wiggle: "wiggle 0.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
