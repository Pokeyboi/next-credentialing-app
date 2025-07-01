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
        // Eye-friendly gray/black backgrounds
        background: "#23272f",
        panel: "#292c36",
        // Readable blue for text
        readableBlue: "#50b6ff", // Soft, readable blue
        // Other theme colors
        gold: "#FFD700",
        accent: "#00C8FF",
        primary: "#00FFB2",
        secondary: "#FF00C8",
        dark: "#22223B",
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
        'game-grid': "repeating-linear-gradient(45deg, #23272f 0 2px, transparent 2px 40px)",
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
