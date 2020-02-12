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

const Text = styled.div<Props>`
  ${compose(color, layout, space, typography)}
`;

export default Text;

Text.defaultProps = {
  fontSize: 0,
  lineHeight: 'short',
};
