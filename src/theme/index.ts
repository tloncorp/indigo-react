import dark from './themes/dark';
import light from './themes/light';
import inverted from './themes/inverted';
import paperLight from './themes/paperLight';
import paperDark from './themes/paperDark';
import baseStyled, {ThemedStyledInterface} from 'styled-components';

export type Theme = typeof light;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export {dark, light, inverted, paperLight, paperDark};
