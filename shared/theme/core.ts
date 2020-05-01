const core = {
  fonts: {
    sans: `"Inter", "Inter UI", -apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', Arial, sans-serif`,
    mono: `"Source Code Pro", "Roboto mono", "Courier New", monospace`,
  },
  // font-size
  fontSizes: [
    10, // 0
    11, // 1
    12, // 2
    14, // 3
    16, // 4
    20, // 5
    24, // 6
    32, // 7
    48, // 8
    64, // 9
    72, // 10
  ],
  // 	font-weight
  fontWeights: {
    thin: 300,
    regular: 400,
    bold: 600,
  },
  // line-height
  lineHeights: {
    min: 1.2,
    short: 1.333333,
    regular: 1.5,
    tall: 1.666666,
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
    448, // 13
    736, // 14
  ],
  // border-radius
  radii: [
    0, // 0
    2, // 1
    4, // 2
    6, // 3
    8, // 4
    10, // 5
    12, // 6
    16, // 7
    24, // 8
    32, // 9
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
    448, // 13
    736, // 14
  ],
  // z-index
  zIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  breakpoints: ['768px', '1024px', '1440px', '2200px'],
};

export default core;
