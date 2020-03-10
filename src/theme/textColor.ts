import {Colors} from './colors';

const textColor = (colors: Colors) => ({
  default: {
    hover: colors.black,
    active: colors.black,
    focus: colors.black,
    default: colors.black,
  },
  caution: {
    hover: colors.red1,
    active: colors.red1,
    focus: colors.red1,
    default: colors.red1,
  },
  primary: {
    hover: colors.blue1,
    active: colors.blue1,
    focus: colors.blue1,
    default: colors.blue1,
  },
  disabled: {
    hover: colors.gray5,
    active: colors.gray5,
    focus: colors.gray5,
    default: colors.gray5,
  },
});

export default textColor;
