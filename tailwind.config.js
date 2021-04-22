module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: {
      10: "2.5rem",
      20: "5rem",
      100: "100px",
      200: "200px",
      300: "300px",
      400: "400px",
      500: "500px",
      600: "600px",
    },
    extend: {
      animation: {
        fade: "fade .5s ease-in-out",
      },
      keyframes: {
        fade: {
          from: { opacity: 0.2 },
          to: { opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
