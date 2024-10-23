/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,tsx,ts,jsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto_400Regular", "sans-serif"],
        RobotoMedium: ["Roboto_500Medium", "sans-serif"],
        RobotoBold: ["Roboto_700Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
