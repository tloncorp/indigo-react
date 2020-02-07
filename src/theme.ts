import baseStyled, { ThemedStyledInterface } from 'styled-components';

const theme = {
  // color, background-color, border-color
  colors: {
    black: '#000000',
    white: '#ffffff',
    gray: ['#333333', '#4d4d4d', '#7f7f7f', '#b1b1b1', '#e6e6e6', '#f9f9f9'],
    blue: ['#ecf6ff', '#b0c7ff', '#4330fc', '#190d7b'],
    red: ['#f9d6ce', '#ffa073', '#ee5432', '#c10d30'],
    green: ['#bdebcc', '#2ed196', '#2aa779', '#286e55'],
    yellow: ['#ffefc5', '#ffd972', '#fcc440', '#ee892b'],
  },
  // font-family
  fonts: {
    sans: `"Inter", "Inter UI", -apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', Arial, sans-serif`,
    mono: `"Source Code Pro", "Roboto mono", "Courier New", monospace`,
  },
  // font-size
  fontSizes: [
    16, // 0
    14, // 1
    16, // 2
    20, // 3
    24, // 4
    32, // 5
    48, // 6
  ],
  // 	font-weight
  fontWeights: {
    regular: 400,
    bold: 600,
  },
  // line-height
  lineHeights: {
    short: 1.333333,
    regular: 1.5,
    tall: 1.6,
  },
  // border, border-top, border-right, border-bottom, border-left
  borders: ['none', '1px solid'],
  // margin, margin-top, margin-right, margin-bottom, margin-left, padding, padding-top, padding-right, padding-bottom, padding-left, grid-gap, grid-column-gap, grid-row-gap
  space: [
    0, // 0
    4, // 1
    8, // 2
    12, // 3
    16, // 4
    20, // 5
    24, // 6
    32, // 7
    48, // 8
    64, // 9
    96, // 10
    160, // 11
    288, // 12
  ],
  // border-radius
  radii: [
    0, // 0
    4, // 1
    8, // 2
    12, // 3
    16, // 4
    20, // 5
    24, // 6
    32, // 7
  ],
  // width, height, min-width, max-width, min-height, max-height
  sizes: [
    0, // 0
    4, // 1
    8, // 2
    12, // 3
    16, // 4
    20, // 5
    24, // 6
    32, // 7
    48, // 8
    64, // 9
    96, // 10
    160, // 11
    288, // 12
  ],
  // z-index
  zIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  breakpoints: ['768px', '1024px', '1440px'],
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
