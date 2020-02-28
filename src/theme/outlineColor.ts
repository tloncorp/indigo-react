import {Colors} from './colors';

const outlineColor = (colors: Colors) => ({
  default: {
    hover: colors.none,
    active: colors.gray0,
    focus: colors.gray0,
    default: colors.none,
  },
  red: {
    hover: colors.none,
    active: colors.red0,
    focus: colors.red0,
    default: colors.none,
  },
  blue: {
    hover: colors.none,
    active: colors.blue0,
    focus: colors.blue0,
    default: colors.none,
  },
  green: {
    hover: colors.none,
    active: colors.green0,
    focus: colors.green0,
    default: colors.none,
  },
  disabled: {
    hover: colors.none,
    active: colors.none,
    focus: colors.none,
    default: colors.none,
  },
});

export default outlineColor;
