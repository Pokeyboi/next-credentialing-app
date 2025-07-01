/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00FFB2",
        secondary: "#FF00C8",
        accent: "#00C8FF",
        gold: "#FFD700",
        blueNeon: "#003fff",
        dark: "#18181a",
        panel: "#232334",
        error: "#ff2060",
        success: "#00ff90",
        // Optionally, keep these if you use them:
        // "primary-bg": "#18181a",
        // "panel-bg": "#232334",
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
      backgroundImage: {
        'game-grid': "repeating-linear-gradient(45deg, #232334 0 2px, transparent 2px 40px)",
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
