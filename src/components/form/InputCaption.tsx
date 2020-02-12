import styled from 'styled-components';
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

const InputCaption = styled.label<Props>`
  color: ${p => p.theme.colors.gray};
  font-size: ${p => p.theme.fontSizes[0]}px;
  line-height: ${p => p.theme.lineHeights.short};
  width: 100%;
  display: block;
  pointer-events: none;
  ${compose(color, layout, space, typography)}
`;

export default InputCaption;
