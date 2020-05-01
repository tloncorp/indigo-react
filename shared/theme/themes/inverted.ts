import colors from '../colors';
import core from '../core';

const theme = {
  colors: {
    // Black, white, grays
    black: colors.white,
    gray8: colors.gray0,
    gray7: colors.gray1,
    gray6: colors.gray2,
    gray5: colors.gray3,
    gray4: colors.gray4,
    gray3: colors.gray5,
    gray2: colors.gray6,
    gray1: colors.gray7,
    gray0: colors.gray8,
    white: colors.black,
    // 'Red'
    red2: '#C4FFFC',
    red1: '#21D5D0',
    red0: '#001410',
    // 'Yellow'
    yellow2: '#C2E6FF',
    yellow1: '#0063FF',
    yellow0: '#000720',
    // 'Green'
    green2: '#FFCBDC',
    green1: '#FF83B3',
    green0: '#1F0018',
    // 'Blue'
    blue2: '#FFDC9F',
    blue1: '#FF9123',
    blue0: '#1E0E00',
    // Util
    primary: colors.blue1,
    util: '#FFFF00',
    none: 'rgba(0,0,0,0)',
  },
  ...core,
};

export default theme;
