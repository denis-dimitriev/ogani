/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    screens: {
      sm: { max: "320px" },
      phone: { max: "480px" },
      tablet: { max: "760px" },
      laptop: { max: "960px" }
    },
    extend: {}
  },
  plugins: []
};
