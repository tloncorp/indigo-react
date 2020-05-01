import colors from '../colors';
import core from '../core';

const theme = {
  colors: {
    ...colors,
    // grays
    black: '#191919',
    gray8: '#383838',
    gray7: '#474747',
    gray6: '#666666',
    gray5: '#8D8D8D',
    gray4: '#969696',
    gray3: '#999999',
    gray2: '#B8B8B8',
    gray1: '#D6D6D6',
    gray0: '#DCDCDC',
    white: '#E5E5E5',
    // util
    primary: colors.blue1,
    util: '#FFFF00',
    none: 'rgba(0,0,0,0)',
  },
  ...core,
};

export default theme;
