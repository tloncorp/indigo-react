import {Colors} from './colors';

const borderColor = (colors: Colors) => ({
  default: {
    hover: colors.gray2,
    active: colors.gray2,
    focus: colors.gray2,
    default: colors.gray2,
  },
  red: {
    hover: colors.red2,
    active: colors.red2,
    focus: colors.red2,
    default: colors.red2,
  },
  blue: {
    hover: colors.blue2,
    active: colors.blue2,
    focus: colors.blue2,
    default: colors.blue2,
  },
  green: {
    hover: colors.green2,
    active: colors.green2,
    focus: colors.green2,
    default: colors.green2,
  },
  disabled: {
    hover: colors.gray3,
    active: colors.gray3,
    focus: colors.gray3,
    default: colors.gray3,
  },
});

export default borderColor;
