/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    screens: {
      bp320: { max: "320px" },
      bp375: { max: "375px" },
      bp414: { max: "414px" },
      bp568: { max: "568px" },
      bp667: { max: "667px" },
      bp736: { max: "736px" },
      bp768: { max: "768px" },
      bp812: { max: "812px" },
      bp834: { max: "834px" },
      bp992: { max: "992px" },
      bp1024: { max: "1024px" },
      bp1400: { max: "1400px" },
    },
    extend: {
      animation: {
        fadeInY: "fadeInY 400ms ease-in",
        fadeInX: "fadeInX 400ms ease-in",
        fadeQView: "fadeQView 400ms ease-in",
      },
      keyframes: {
        fadeInY: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeQView: {
          "0%": { transform: "translateY(-50px)" },
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
