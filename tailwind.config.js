const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#000000",
      gray: {
        100: "#F2F2F2",
        200: "#CCCCCC",
        300: "#B3B3B3",
        400: "#808080",
        500: "#666666",
      },
      blue: {
        100: "#E9F5FF",
        200: "#D3EBFF",
        300: "#BCE2FF",
        400: "#219DFF",
      },
      red: {
        100: "#FFF6F5",
        200: "#FFC6C3",
        300: "#FF4136",
      },
      green: {
        100: "#E6F5F0",
        200: "#B3E2D1",
        300: "#009F65",
      },
      yellow: {
        100: "#FFF9E6",
        200: "#FFEEB3",
        300: "#FFDD66",
        400: "#FFC700",
      },
    },
    fontFamily: {
      sans: `"Inter", "Inter UI", -apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', Arial, sans-serif`,
      mono: `"Source Code Pro", "Roboto mono", "Courier New", monospace`,
    },
    nightwind: {
      colors: {
        white: "#1A1A1A",
        black: "#FFFFFF",
        gray: {
          100: "#313131",
          200: "#5F5F5F",
          300: "#8D8D8D",
          400: "#A4A4A4",
          500: "#666666",
        },
        blue: {
          100: "#182631",
          200: "#153148",
          300: "#133D5F",
          400: "#219DFF",
        },
        red: {
          100: "#311E1D",
          200: "#5F2623",
          300: "#FF4136",
        },
        green: {
          100: "#182722",
          200: "#134231",
          300: "#009F65",
        },
        yellow: {
          100: "#312B18",
          200: "#5F4E13",
          300: "#A4820B",
          400: "#FFC700",
        },
      },
    },
    screens: {
      ...defaultTheme.screens,
      xl: "1440px",
      "2xl": "2200px",
    },
    extend: {
      lineHeight: {
        tight: 1.2,
        snug: 1.33334,
        relaxed: 1.66667,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("nightwind")],
};
