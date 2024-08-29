/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#FFFFFF"
      },
      fontFamily: {
        robotothin: ["Roboto-Thin", "sans-serif"],
        robotolight: ["Roboto-Light", "sans-serif"],
        roboto: ["Roboto-Regular", "sans-serif"],
        robotomedium: ["Roboto-Medium", "sans-serif"],
        robotobold: ["Roboto-Bold", "sans-serif"],
        robotoblack: ["Roboto-Black", "sans-serif"]
      },
    },
  },
  plugins: [],
}

