import styled from 'styled-components'

import {
  layout, LayoutProps,
  space, SpaceProps,
  compose
} from 'styled-system'

interface Props extends LayoutProps, SpaceProps {}

const Img = styled.img<Props>`
  ${compose(space, layout)};
`
export default Img
