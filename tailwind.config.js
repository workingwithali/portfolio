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
        hackerBg: '#000000', // Black background
        hackerGreen: '#00ff00', // Bright green text
        hackerDarkGreen: '#008000', // Darker green for buttons
        hackerHoverGreen: '#006400', // Even darker green for hover
      },
      fontFamily: {
        mono: ['"Courier New"', 'Courier', 'monospace'], // Monospaced font typical of terminals
      },
      animation: {
        'blink': 'blink 1s step-start infinite', // Adding a blink animation for cursor effect
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
