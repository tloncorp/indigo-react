import baseStyled, {ThemedStyledInterface} from 'styled-components';

// DEV PURPOSES ONLY
const theme = {
  // color, background-color, border-color
  colors: {
    util: '#FFFF00',
    white: '#000000',
    gray1: '#111111',
    gray2: '#333333',
    gray3: '#555555',
    gray4: '#777777',
    gray5: '#999999',
    gray6: '#AAAAAA',
    gray7: '#CCCCCC',
    gray8: '#EEEEEE',
    gray9: '#F4F4F4',
    black: '#FFFFFF',
    // Red
    red1: '#550400',
    red2: '#AA160D',
    red3: '#FF4136',
    red4: '#FF9D97',
    red5: '#FFD0CD',
    // Yellow
    yellow5: '#553700',
    yellow4: '#FFB700',
    yellow3: '#FFD700',
    yellow2: '#FBF1A9',
    yellow1: '#FFFCEB',
    // Green
    green5: '#033827',
    green4: '#0B714D',
    green3: '#19A974',
    green2: '#9EEBCF',
    green1: '#E8FDF5',
    // Blue
    blue5: '#001B44',
    blue4: '#00449E',
    blue3: '#357EDD',
    blue2: '#96CCFF',
    blue1: '#CDECFF',
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
