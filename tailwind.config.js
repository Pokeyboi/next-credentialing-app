/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // Remove if you do not use a components folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",      // Deep, readable blue
        secondary: "#f59e42",    // Accessible orange
        accent: "#2563eb",       // Bright blue for accents
        panel: "#ffffff",        // White panel for readability
        gold: "#fbbf24",         // Accessible gold
        dark: "#18181b",         // Dark for text
        error: "#dc2626",        // Red for errors
        success: "#16a34a",      // Green for success
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        arcade: ['"Press Start 2P"', 'cursive'], // For special/game elements
      },
      boxShadow: {
        readable: "0 4px 24px 0 rgba(30,64,175,0.06)",
        panel: "0 2px 16px 0 rgba(0,0,0,0.10)",
      },
      animation: {
        pulseGlow: "pulseGlow 2s infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 16px 0 #2563eb" },
          "50%": { boxShadow: "0 0 32px 4px #2563eb" },
        },
      },
    },
  },
  plugins: [],
};
