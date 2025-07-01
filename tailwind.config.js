/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00FFB2",       // Neon green
        secondary: "#FF00C8",     // Neon pink
        accent: "#00C8FF",        // Neon blue
        dark: "#22223B",          // Deep background
        panel: "#27293D",         // Card backgrounds
        gold: "#FFD700",          // For text-gold, border-gold, etc.
      },
      fontFamily: {
        arcade: ['"Press Start 2P"', 'cursive'],
        display: ['"Orbitron"', 'sans-serif'],
      },
      boxShadow: {
        neon: "0 0 8px 2px #00FFB2, 0 0 16px 4px #00C8FF",
        panel: "0 2px 24px 0 rgba(0, 200, 255, 0.2)",
      },
      backgroundImage: {
        'game-grid': "repeating-linear-gradient(45deg, #27293D 0 2px, transparent 2px 40px)",
        'retro-dots': "radial-gradient(#FF00C8 1px, transparent 1px), radial-gradient(#00FFB2 1px, transparent 1px)",
      },
      animation: {
        pulseGlow: "pulseGlow 2s infinite alternate",
      },
      keyframes: {
        pulseGlow: {
          "0%": { boxShadow: "0 0 8px #00FFB2, 0 0 16px #00C8FF" },
          "100%": { boxShadow: "0 0 24px #FF00C8, 0 0 32px #FFD700" },
        },
      },
    },
  },
  plugins: [],
};
