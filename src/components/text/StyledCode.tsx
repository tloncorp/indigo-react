import styled from 'styled-components';

import {
  space,
  SpaceProps,
  typography,
  TypographyProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  opacity,
  OpacityProps,
  compose,
} from 'styled-system';

type Props = ColorProps &
  LayoutProps &
  SpaceProps &
  TypographyProps &
  OpacityProps & {};

const StyledCode = styled.code<Props>`
  ${compose(color, layout, opacity, space, typography)}
`;

export default StyledCode;

StyledCode.defaultProps = {
  fontFamily: 'mono',
  bg: 'grayLight',
  fontSize: 2,
  lineHeight: 'regular',
};
