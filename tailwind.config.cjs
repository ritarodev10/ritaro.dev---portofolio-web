/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#121B22",
        "orange-neon": "#F1BF68",
        "red-neon": "#F44D5A",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        staatliches: ["Staatliches", "cursive"],
        "roboto-mono": ["Roboto Mono", "monospace"],
        noto: ["Noto Sans", "sans-serif"],
        "syne-mono": ["Syne Mono", "monospace"],
        "ubuntu-mono": ["Ubuntu Mono", "monospace"],
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        smooth: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
      animation: {
        blink: "blink 1s step-start infinite",
      },
      keyframes: {
        blink: {
          "0%,100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
