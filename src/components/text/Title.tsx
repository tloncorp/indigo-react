import styled from 'styled-components'

import {
  color, ColorProps,
  layout, LayoutProps,
  space, SpaceProps,
  typography, TypographyProps,
  compose
} from 'styled-system'

interface Props extends ColorProps, LayoutProps, SpaceProps, TypographyProps {}

const Title = styled.p<Props>`
  ${compose(color, layout, space, typography)}
`;

export default Title;

Title.defaultProps = {
  margin: 2,
  fontSize: 0,
  lineHeight: 'regular'
};
