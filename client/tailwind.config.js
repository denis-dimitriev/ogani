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
        fadeIn: "fadeIn 500ms ease-in",
      },
      keyframes: {
        fadeIn: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
