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
        whiteGray: "#F8F8F8",
        lightGray: "#E8E8E8",
        deepGray: "#A0A4A8",
        darkGray: "#3C3C43",
        fontGray: "#666",
        pointRed: "#E93C3C",
        bgGray: "#DBDDE0",
        gray: "#52575C",
        kGreen: "#1AB759",
        kYellow: "#F6A609",
        kOrange: "#F5860A",
        kPink: "#F57F7A",
        kPurple: "#D174F5",
        kBlue: "#0A8BF5",
        pointGreen: "#017219",
        mainBlue: "#1A57CB",
        subBlue: "#277FFF",
      },
      fontFamily: {
        bold: ["Cafe24Ssurround", "sans"],
        regular: ["Cafe24Dongdong", "sans"],
      },
      fontSize: {
        lgTitle: "28px",
        mdTitle: "24px",
        smTitle: "20px",
        md: "18px",
        p: "16px",
        s: "14px",
        sm: "12px",
        xs: "10px",
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
