const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        primary: "var(--primary)",
        gray: "var(--gray)",
        "light-gray": "var(--light-gray)",
      },
      fontFamily: {
        Genos: ["Genos", ...fontFamily.sans],
        "Lexend-Zetta": ["Lexend Zetta", ...fontFamily.sans],
        Lexend: ["Lexend", ...fontFamily.sans],
      },
      keyframes: {
        noise: {
          "0%": {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "100% 100%",
          },
        },
        textApparition: {
          "0%": {
            opacity: "0",
            letterSpacing: "-20px",
          },
          to: {
            opacity: "100",
            letterSpacing: "7px",
          },
        },
        navbarIn: {
          from: {
            flexDirection: "column",
            width: "70%",
            height: "4rem",
            transform: "translateY(0)",
            border: "1px solid gray",
            borderRadius: "8px",
          },
          "10%": {
            flexDirection: "column",
          },
          "99%": {
            border: "1px solid gray",
            borderRadius: "8px",
          },
          to: {
            flexDirection: "column",
            height: "50%",
            width: "100vw",
            transform: "translateY(-2rem)",
            border: "none",
            borderRadius: "0px",
          },
        },
        navbarOut: {
          from: {
            flexDirection: "column",
            width: "100vw",
            height: "50%",
            transform: "translateY(-2rem)",
            border: "1px solid gray",
            borderRadius: "0",
          },
          "90%": {
            flexDirection: "column",
            width: "70%",
            height: "58px",
          },
          to: {
            flexDirection: "column",
            width: "70%",
            transform: "translateY(0)",
            borderRadius: "8px",
            height: "58px",
          },
        },
        logo: {
          "0%": {
            "-webkit-transform": "translateX(0)",
            transform: "translateX(0)",
          },
          "20%": {
            "-webkit-transform": "translate(-110%)",
            transform: "translate(-110%)",
          },
          "50%": {
            "-webkit-transform": "translate(-110%)",
            transform: "translate(-110%)",
          },
          to: {
            "-webkit-transform": "translate(0)",
            transform: "translate(0)",
          },
        },
        gradient: {
          "0%": {
            backgroundPosition: "0 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          to: {
            backgroundPosition: "0 50%",
          },
        },
        xDeplacement: {
          "0%": { transform: "translateX(0)" },
          "50%": {
            transform: "translateX(20%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "noise-animation": "noise .5s steps(10) infinite",
        logo: "logo 15s cubic-bezier(1, 0, 0, 1) infinite",
        navbarIn: "navbarIn .5s ease-in-out",
        navbarOut: "navbarOut .5s ease-in-out",
        gradient: "gradient 3s infinite",
        xDeplacement: "xDeplacement 3s infinite",
      },
    },
    plugins: [],
  },
};
