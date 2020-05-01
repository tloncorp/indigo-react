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
    // Red
    red2: colors.red0,
    red1: colors.red1,
    red0: colors.red2,
    // Yellow
    yellow2: colors.yellow0,
    yellow1: colors.yellow1,
    yellow0: colors.yellow2,
    // Green
    green2: colors.green0,
    green1: colors.green1,
    green0: colors.green2,
    // Blue
    blue2: colors.blue0,
    blue1: colors.blue1,
    blue0: colors.blue2,
    // Utils
    primary: colors.blue1,
    util: '#FFFF00',
    none: 'rgba(0,0,0,0)',
  },
  ...core,
};

export default theme;
