/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#020617",
        secondary: "#64748b",
      },
      screens: {
        "2xl": "1220px",
      },
    },
  },
  plugins: [],
};
