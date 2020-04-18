import colors from '../colorsDark';
import reset from '../reset';
import core from '../core';
import boxRadii from '../boxRadii';

const theme = {
  colors: {...colors, primary: colors.blue1},
  ...core,
  boxRadii: boxRadii,
  reset: reset,
};

export default theme;
