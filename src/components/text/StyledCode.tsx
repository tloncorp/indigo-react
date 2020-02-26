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
  compose,
} from 'styled-system';

type Props = ColorProps & LayoutProps & SpaceProps & TypographyProps & {};

const StyledCode = styled.code<Props>`
  ${compose(color, layout, space, typography)}
`;

export default StyledCode;

StyledCode.defaultProps = {
  fontFamily: 'mono',
  bg: 'gray1',
  fontSize: 2,
  padding: 2,
  lineHeight: 'regular',
};
export {Props};
