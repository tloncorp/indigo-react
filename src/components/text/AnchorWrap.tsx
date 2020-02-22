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
const AnchorWrap = styled.a<Props>`
  text-decoration: none;
  cursor: pointer;
  &:visited {
    color: black;
  }

  ${compose(space, color, typography, layout)};
`;

export default AnchorWrap;

AnchorWrap.defaultProps = {
  color: 'black',
};
