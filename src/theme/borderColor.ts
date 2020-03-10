import {Colors} from './colors';

const borderColor = (colors: Colors) => ({
  default: {
    hover: colors.gray2,
    active: colors.gray2,
    focus: colors.gray2,
    default: colors.gray2,
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
    hover: colors.gray3,
    active: colors.gray3,
    focus: colors.gray3,
    default: colors.gray3,
  },
});

export default borderColor;
