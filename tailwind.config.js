/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Add other folders as needed
  ],
  theme: {
    extend: {
      colors: {
        // High-contrast dark theme background and text
        "primary-bg": "#18181a",
        "panel-bg": "#232334",
        "neon-accent": "#00ffd0",
        "neon-accent-secondary": "#00ffb2",
        "yellow-neon": "#FFD700",
        "blue-neon": "#003fff",
        "text-main": "#f8fafc",
        "error": "#ff2060",
        "success": "#00ff90",
      },
      fontFamily: {
        arcade: ['"Press Start 2P"', "Orbitron", "Segoe UI", "sans-serif"],
        display: ["Orbitron", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 8px #00FFB2, 0 0 16px #00C8FF",
        "neon-lg": "0 0 24px #FF00C8, 0 0 32px #FFD700",
        panel: "0 4px 24px 0 #003fff40",
      },
      borderRadius: {
        "3xl": "1.5rem",
      },
      keyframes: {
        bgMove: {
          "0%": { backgroundPosition: "0 0, 0 0" },
          "100%": { backgroundPosition: "100px 100px, 50px 50px" },
        },
        pulseGlow: {
          "0%": { boxShadow: "0 0 8px #00FFB2, 0 0 16px #00C8FF" },
          "100%": { boxShadow: "0 0 24px #FF00C8, 0 0 32px #FFD700" },
        },
      },
      animation: {
        bgMove: "bgMove 10s linear infinite",
        pulseGlow: "pulseGlow 2s infinite alternate",
      },
    },
  },
  plugins: [],
};
