/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // 1280 ~ : none
      // 768 ~ 1279 : laptop
      laptop: { max: "1279px" },
      // 768 ~ 1024 : middle
      middle: { max: "1024px" },
      // ~ 767 : mobile
      mobile: { max: "767px" },
      // ~ 1150 : item column 2
      twocol: { max: "1150px" },
      // ~ 705 : item column 1
      onecol: { max: "705px" },
    },
    extend: {
      colors: {
        mainBlue: "#185ADB",
        lightBlue: "#B1CCFF",
      },
      fontFamily: {
        bold: ["LINESeedKR-Bd", "sans"],
        regular: ["LINESeedKR-Rg", "sans"],
        thin: ["LINESeedKR-Th", "sans"],
      },
      fontSize: {
        lgTitle: "38px",
        mdTitle: "22px",
        smTitle: "18px",
        md: "16px",
        p: "14px",
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
