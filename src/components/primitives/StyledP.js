import styled from 'styled-components'

import {
  border,
  color,
  display,
  fontFamily,
  fontSize,
  fontWeight,
  height,
  lineHeight,
  maxWidth,
  opacity,
  space,
  width,
  typography,
  compose
} from 'styled-system'

const StyledP = styled.p`
  ${compose(
    border,
    color,
    display,
    typography,
    opacity,
    space
  )}
`

export default StyledP
