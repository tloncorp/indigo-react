import {Colors} from './colors';

const textColor = (colors: Colors) => ({
  default: {
    hover: colors.black,
    active: colors.black,
    focus: colors.black,
    default: colors.black,
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
    hover: colors.gray5,
    active: colors.gray5,
    focus: colors.gray5,
    default: colors.gray5,
  },
});

export default textColor;
