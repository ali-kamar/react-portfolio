/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "475px", // Custom screen size
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      container: {
        center: true, // Centering container classes
      },
      fontFamily: {
        amsterdam: ["New Amsterdam", 'sans-serif'], // Add your custom font here
      },
    },
  },
  plugins: [],
};
