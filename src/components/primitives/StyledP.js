import styled from 'styled-components'

import {
  border,
  color,
  layout,
  opacity,
  space,
  typography,
  compose
} from 'styled-system'

const StyledP = styled.p`
  ${compose(
    border,
    color,
    layout,
    typography,
    opacity,
    space
  )}
`

export default StyledP
