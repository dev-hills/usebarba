/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sfpro: ["sfpro", "sans-serif"],
        // JakartaBold: ["Jakarta-Bold", "sans-serif"],
        // JakartaExtraBold: ["Jakarta-ExtraBold", "sans-serif"],
        // JakartaExtraLight: ["Jakarta-ExtraLight", "sans-serif"],
        // JakartaLight: ["Jakarta-Light", "sans-serif"],
        // JakartaMedium: ["Jakarta-Medium", "sans-serif"],
        // JakartaSemiBold: ["Jakarta-SemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
