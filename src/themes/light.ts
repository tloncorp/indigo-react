import baseStyled, { ThemedStyledInterface } from "styled-components";
//@ts-ignore
import tinycolor from "tinycolor2";

const levels = [
  "05",
  "10",
  "20",
  "30",
  "40",
  "50",
  "60",
  "70",
  "80",
  "90",
  "100",
];
// const base = {
//   white: "#FFF",
//   black: "#000",
//   red: "#FF3B30",
//   yellow: "#FFD60A",
//   green: "#32D74B",
//   blue: "#0A84FF",
//   purple: "#BF5AF2"
// };

const base = {
  white: "#FFF",
  black: "#262626",
  red: "#f44336",
  yellow: "#ffc107",
  green: "#4caf50",
  blue: "#2196f3",
  purple: "#673ab7",
};

// const base = {
//   white: "#FFF",
//   black: "#000",
//   red: "#FF4136",
//   yellow: "#FFD700",
//   green: "#19A974",
//   blue: "#357EDD",
// };

// @ts-ignore
const scales = levels.reduce((acc, level) => {
  // @ts-ignore
  const newCols = Object.entries(base).reduce((bcc, [name, hex]) => {
    // @ts-ignore
    const newKey = name + level;
    // @ts-ignore
    acc[newKey] = tinycolor(hex)
      .setAlpha("." + level)
      .toString();
    return acc;
  }, {});
  return { ...acc, ...newCols };
}, {});

// console.log(scales);

// const scales = {
//   white05: "rgba(255,255,255,0.05)",
//   white10: "rgba(255,255,255,0.1)",
//   white20: "rgba(255,255,255,0.2)",
//   white30: "rgba(255,255,255,0.3)",
//   white40: "rgba(255,255,255,0.4)",
//   white50: "rgba(255,255,255,0.5)",
//   white60: "rgba(255,255,255,0.6)",
//   white70: "rgba(255,255,255,0.7)",
//   white80: "rgba(255,255,255,0.8)",
//   white90: "rgba(255,255,255,0.9)",
//   white100: "rgba(255,255,255,1)",
//   black05: "rgba(0,0,0,0.05)",
//   black10: "rgba(0,0,0,0.1)",
//   black20: "rgba(0,0,0,0.2)",
//   black30: "rgba(0,0,0,0.3)",
//   black40: "rgba(0,0,0,0.4)",
//   black50: "rgba(0,0,0,0.5)",
//   black60: "rgba(0,0,0,0.6)",
//   black70: "rgba(0,0,0,0.7)",
//   black80: "rgba(0,0,0,0.8)",
//   black90: "rgba(0,0,0,0.9)",
//   black100: "rgba(0,0,0,1)",
//   red05: "#ffe5ec",
//   red10: "rgba(255,65,54,0.1)",
//   red20: "rgba(255,65,54,0.2)",
//   red30: "#fd6590",
//   red40: "rgba(255,65,54,0.4)",
//   red50: "rgba(255,65,54,0.5)",
//   red60: "rgba(255,65,54,0.6)",
//   red70: "rgba(255,65,54,0.7)",
//   red80: "rgba(255,65,54,0.8)",
//   red90: "rgba(255,65,54,0.9)",
//   red100: "rgba(255,65,54,1)",
//   yellow05: "rgba(255,199,0,0.05)",
//   yellow10: "rgba(255,199,0,0.1)",
//   yellow20: "rgba(255,199,0,0.2)",
//   yellow30: "rgba(255,199,0,0.3)",
//   yellow40: "rgba(255,199,0,0.4)",
//   yellow50: "rgba(255,199,0,0.5)",
//   yellow60: "rgba(255,199,0,0.6)",
//   yellow70: "rgba(255,199,0,0.7)",
//   yellow80: "rgba(255,199,0,0.8)",
//   yellow90: "rgba(255,199,0,0.9)",
//   yellow100: "rgba(255,199,0,1)",
//   green05: "rgba(0,159,101,0.05)",
//   green10: "rgba(0,159,101,0.1)",
//   green20: "rgba(0,159,101,0.2)",
//   green30: "rgba(0,159,101,0.3)",
//   green40: "rgba(0,159,101,0.4)",
//   green50: "rgba(0,159,101,0.5)",
//   green60: "rgba(0,159,101,0.6)",
//   green70: "rgba(0,159,101,0.7)",
//   green80: "rgba(0,159,101,0.8)",
//   green90: "rgba(0,159,101,0.9)",
//   green100: "rgba(0,159,101,1)",
//   blue05: "#e7e9fe",
//   blue10: "#e7e9fe",
//   blue20: "rgba(33,157,255,0.2)",
//   blue30: "#c1c6fc",
//   blue40: "rgba(33,157,255,0.4)",
//   blue50: "rgba(33,157,255,0.5)",
//   blue60: "rgba(33,157,255,0.6)",
//   blue70: "rgba(33,157,255,0.7)",
//   blue80: "rgba(33,157,255,0.8)",
//   blue90: "rgba(33,157,255,0.9)",
//   blue100: "rgba(33,157,255,1)",
// };

const util = {
  cyan: "#00FFFF",
  magenta: "#FF00FF",
  yellow: "#FFFF00",
  black: "#000000",
};

export const light = {
  colors: {
    white: base.white,
    black: base.black,

    gray: "rgba(0,0,0,0.60)",
    lightGray: "rgba(0,0,0,0.15)",
    // @ts-ignore
    washedGray: scales.black05,
    darkRed: "#ba000d",

    red: base.red,
    // @ts-ignore
    lightRed: scales.red30,
    // @ts-ignore
    washedRed: scales.red05,
    // @ts-ignore

    yellow: base.yellow,
    // @ts-ignore
    lightYellow: scales.yellow30,
    // @ts-ignore
    washedYellow: scales.yellow10,
    // @ts-ignore

    green: base.green,
    // @ts-ignore
    lightGreen: scales.green30,
    // @ts-ignore
    washedGreen: scales.green10,
    // @ts-ignore

    darkBlue: "#0069c0",
    blue: base.blue,
    // @ts-ignore
    lightBlue: scales.blue30,
    // @ts-ignore
    washedBlue: scales.blue10,

    none: "rgba(0,0,0,0)",

    scales: scales,
    util: util,
  },
  fonts: {
    sans: `"Inter", "Inter UI", -apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', Arial, sans-serif`,
    mono: `"Source Code Pro", "Roboto mono", "Courier New", monospace`,
  },
  // font-size
  fontSizes: [
    12, // 0
    14, // 1
    16, // 2
    20, // 3
    24, // 4
    32, // 5
    48, // 6
    64, // 7
  ],
  // 	font-weight
  fontWeights: {
    thin: 300,
    regular: 400,
    medium: 500,
    bold: 600,
  },
  // line-height
  lineHeights: {
    min: 1.2,
    short: 1.33334,
    regular: 1.5,
    tall: 1.66667,
  },
  // border, border-top, border-right, border-bottom, border-left
  borders: ["none", "1px solid"],
  // margin, margin-top, margin-right, margin-bottom, margin-left, padding, padding-top, padding-right, padding-bottom, padding-left, grid-gap, grid-column-gap, grid-row-gap
  space: [
    0, // 0
    4, // 1
    8, // 2
    16, // 3
    24, // 4
    32, // 5
    48, // 6
    64, // 7
    96, // 8
  ],
  // border-radius
  radii: [
    0, // 0
    2, // 1
    4, // 2
    8, // 3
  ],
  // width, height, min-width, max-width, min-height, max-height
  sizes: [
    0, // 0
    4, // 1
    8, // 2
    16, // 3
    24, // 4
    32, // 5
    48, // 6
    64, // 7
    96, // 8
  ],
  // z-index
  zIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  breakpoints: ["768px", "1024px", "1440px", "2200px"],
};

export type Theme = typeof light;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
