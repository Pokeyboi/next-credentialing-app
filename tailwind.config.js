/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // Remove if you do not use a components folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",      // Deep readable blue
        secondary: "#f59e42",    // Accessible orange
        accent: "#2563eb",       // Brighter blue for accents
        panel: "#ffffff",        // White background for best readability
        gold: "#fbbf24",         // Accessible gold
        dark: "#18181b",         // Near-black for text
        error: "#dc2626",        // Accessible red
        success: "#16a34a",      // Accessible green
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        arcade: ['"Press Start 2P"', 'cursive'], // For special use, not body text
      },
      boxShadow: {
        readable: "0 4px 24px 0 rgba(30,64,175,0.06)",
        panel: "0 2px 16px 0 rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [],
};
