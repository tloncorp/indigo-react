import styled from 'styled-components'
import {
  flexbox, FlexProps,
  layout, LayoutProps,
  space, SpaceProps,
  typography, TypographyProps,
  compose
} from 'styled-system'

interface Props extends FlexProps, LayoutProps, SpaceProps, TypographyProps {}

const Flex = styled.div<Props>`
  display: flex;
  ${compose(flexbox, typography, space, layout)}
`;
export default Flex;
