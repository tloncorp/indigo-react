import colors from '../colors';
import core from '../core';

const theme = {
  colors: {
    ...colors,
    // grays
    white: '#191919',
    gray0: '#383838',
    gray1: '#474747',
    gray2: '#666666',
    gray3: '#8D8D8D',
    gray4: '#969696',
    gray5: '#999999',
    gray6: '#B8B8B8',
    gray7: '#D6D6D6',
    gray8: '#DCDCDC',
    black: '#E5E5E5',
    // util
    primary: colors.blue1,
    util: '#FFFF00',
    none: 'rgba(0,0,0,0)',
  },
  ...core,
};

export default theme;
