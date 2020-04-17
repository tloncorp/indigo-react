import dark from './dark';
import light from './light';
import darkAlt from './darkAlt';
import baseStyled, {ThemedStyledInterface} from 'styled-components';

export type Theme = typeof light;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

export {dark, light, darkAlt};
