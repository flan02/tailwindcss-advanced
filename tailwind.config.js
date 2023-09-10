/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        miColor: "#ff6363",
        info: {
          100: "#f8f8ff",
          200: "#e6e6fa",
          300: "#b0c4de",
          400: "#778899",
          500: "#708090",
          600: "#2f4f4f",
          700: "#191970",
          800: "#000080",
          900: "#00008b",
        },
      },
    },
  },
  plugins: [],
};
