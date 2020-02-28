import {Colors} from './colors';

const backgroundColor = (colors: Colors) => ({
  default: {
    hover: colors.gray0,
    active: colors.gray0,
    focus: colors.white,
    default: colors.white,
  },
  red: {
    hover: colors.red0,
    active: colors.red0,
    focus: colors.white,
    default: colors.white,
  },
  blue: {
    hover: colors.blue0,
    active: colors.blue0,
    focus: colors.white,
    default: colors.white,
  },
  green: {
    hover: colors.green0,
    active: colors.green0,
    focus: colors.white,
    default: colors.white,
  },
  disabled: {
    hover: colors.gray1,
    active: colors.gray1,
    focus: colors.gray1,
    default: colors.gray1,
  },
});

export default backgroundColor;
