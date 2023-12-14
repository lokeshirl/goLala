/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(239, 79, 95)",
        secondary: "rgb(38, 126, 62)",
      },
    },
  },
  plugins: [],
};
