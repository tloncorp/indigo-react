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
const Anchor = styled.a<Props>`
  text-decoration: underline;
  cursor: pointer;

  ${compose(space, color, typography, layout)}
`;

export default Anchor;

Anchor.defaultProps = {
  color: 'black',
};
