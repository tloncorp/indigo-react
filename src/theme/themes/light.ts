import colors from '../colorsLight';
import reset from '../reset';
import core from '../core';
import boxRadii from '../boxRadii';

const theme = {
  colors: {...colors, primary: colors.blue1},
  ...core,
  reset: reset,
  boxRadii: boxRadii,
};

export default theme;
