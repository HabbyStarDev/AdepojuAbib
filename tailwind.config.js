/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        // Pastel gradient colors
        "pastel-blue": "#a7c7e7",
        "pastel-purple": "#c7a7e7",
        "pastel-green": "#a7e7c7",
        "pastel-pink": "#e7a7c7",
        "pastel-yellow": "#e7e7a7",
        "pastel-cyan": "#a7e7e7",

        // Glass morphism colors
        "glass-light": "rgba(255, 255, 255, 0.1)",
        "glass-medium": "rgba(255, 255, 255, 0.2)",
        "glass-dark": "rgba(0, 0, 0, 0.1)",

        // Dark mode colors
        "dark-bg": "#0f0f23",
        "dark-surface": "rgba(255, 255, 255, 0.05)",
        "dark-border": "rgba(255, 255, 255, 0.1)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "bounce-slow": "bounce 2s infinite",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
