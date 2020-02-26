import baseStyled, { ThemedStyledInterface } from 'styled-components';

// DEV PURPOSES ONLY
const theme = {
  // color, background-color, border-color
  colors: {
    util: '#FFFF00',
    black: '#000000',
    gray8: '#111111',
    gray7: '#333333',
    gray6: '#555555',
    gray5: '#777777',
    gray4: '#999999',
    gray3: '#AAAAAA',
    gray2: '#CCCCCC',
    gray1: '#EEEEEE',
    gray0: '#F4F4F4',
    white: '#FFFFFF',
    // Red
    red4: '#550400',
    red3: '#AA160D',
    red2: '#FF4136',
    red1: '#FF9D97',
    red0: '#FFD0CD',
    // Yellow
    yellow4: '#FF8700',
    yellow3: '#FFB700',
    yellow2: '#FFD700',
    yellow1: '#FBF1A9',
    yellow0: '#FFFCEB',
    // Green
    green4: '#033827',
    green3: '#0B714D',
    green2: '#19A974',
    green1: '#9EEBCF',
    green0: '#E8FDF5',
    // Blue
    blue4: '#001B44',
    blue3: '#00449E',
    blue2: '#357EDD',
    blue1: '#96CCFF',
    blue0: '#CDECFF',
  },
  // font-family
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
  ],
  // 	font-weight
  fontWeights: {
    thin: 300,
    regular: 400,
    bold: 500,
  },
  // line-height
  lineHeights: {
    short: 1.333334,
    regular: 1.5,
    tall: 1.666667,
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
    448, // 13
    736, // 14
  ],
  // z-index
  zIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  breakpoints: ['768px', '1024px', '1440px'],
  cssReset: `
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      box-sizing: border-box;
      font-weight: normal;
    }
    body {
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
  `,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
