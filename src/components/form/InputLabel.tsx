import styled from 'styled-components';
import theme from '../../theme';
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  compose,
} from 'styled-system';

type Props = ColorProps & LayoutProps & SpaceProps & TypographyProps & {};

const InputLabel = styled.label<Props>`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes[0]}px;
  line-height: ${theme.lineHeights.short};
  width: 100%;
  display: block;
  pointer-events: none;
  ${compose(color, layout, space, typography)}
`;

export default InputLabel;
