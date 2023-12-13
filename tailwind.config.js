/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // 768 ~ 1279 : laptop
      laptop: { max: "1279px" },
      // 768 ~ 1024 : middle
      middle: { max: "1024px" },
      // ~ 767 : mobile
      mobile: { max: "767px" },
    },
    extend: {
      colors: {
        mainBlue: "#185ADB",
        lightBlue: "#B1CCFF",
      },
      fontFamily: {
        bold: ["Cafe24Ssurround", "sans"],
        regular: ["Cafe24Dongdong", "sans"],
      },
      fontSize: {
        lgTitle: "28px",
        smTitle: "20px",
        md: "18px",
        p: "16px",
        sm: "12px",
      },
      keyframes: {
        customShake: {
          "0%": {
            transform: "translate(1px, 0px)",
          },
          "20%": {
            transform: "translate(-1px, 0px)",
          },
          "40%": {
            transform: "translate(1px, 0px)",
          },
          "60%": {
            transform: "translate(-2px, 0px)",
          },
          "80%": {
            transform: "translate(-1px, 0px)",
          },
          "100%": {
            transform: "translate(1px, 0px)",
          },
        },
      },
    },
  },
};