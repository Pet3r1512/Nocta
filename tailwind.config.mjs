/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#D8AE7E",
        secondary: {
          DEFAULT: "#F8C794",
          light: "#FFF2D7",
          medium: "#FFE0B5",
        },
      },
    },
  },
};
