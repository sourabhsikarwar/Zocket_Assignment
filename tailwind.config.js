/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryText: "#333333",
        secondaryText: "#5f5f5f",
      }
    },
  },
  plugins: [],
};
