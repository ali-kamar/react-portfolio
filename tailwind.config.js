/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxs: "300px",
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
      width: {
        500: "550px",
        400: "400px",
        300: "300px",
        250: "250px",
      },
      height: {
        250: "200px",
        300: "300px",
        113: "113.19px",
      },
      fontFamily: {
        amsterdam: ["New Amsterdam", "sans-serif"], // Add your custom font here
      },
      fontSize: {
        16: "16px",
      },
    },
  },
  plugins: [],
};
