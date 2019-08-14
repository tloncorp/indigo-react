import styled from 'styled-components'

import {
  color,
  layout,
  opacity,
  space,
  typography,
  compose
} from 'styled-system'

const P = styled.p`
  ${compose(
    color,
    layout,
    opacity,
    space,
    typography
  )}
`

export default P

P.defaultProps = {
  fontSize: 2,
  lineHeight: 'regular'
}
