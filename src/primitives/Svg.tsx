import styled from 'styled-components'

import {
  layout, LayoutProps,
  space, SpaceProps,
  compose
} from 'styled-system'

type Props =
  LayoutProps &
  SpaceProps &
  {}

const Svg = styled.svg<Props>`
  ${compose(space, layout)};
`

export default Svg
