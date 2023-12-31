/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    screens: {
      sm: { max: "320px" },
      phone: { max: "480px" },
      tablet: { max: "760px" },
      laptop: { max: "960px" },
    },
    extend: {
      animation: {
        fadeInY: "fadeInY 500ms ease-in",
        fadeInX: "fadeInX 500ms ease-in",
      },
      keyframes: {
        fadeInY: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeInX: {
          "0%": { transform: "translateX(10%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 100 },
        },
      },
    },
  },
  plugins: [],
};
