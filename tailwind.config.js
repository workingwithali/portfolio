/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00FF00", // Bright green, hacker theme primary color
        accent: {
          DEFAULT: "#008000", // Darker green for accents
          hover: "#00CC00", // Slightly brighter green for hover states
        },
        black: "#000000", // Terminal black background
        gray: {
          800: "#333333", // Dark gray for project cards
        },
      },
      fontFamily: {
        mono: ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'], // Add monospaced fonts
      },
      animation: {
        blink: 'blink 1s step-start infinite', // Adding a blink animation for cursor effect
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
