import styled from 'styled-components'
import {
  color,
  layout,
  opacity,
  space,
  typography,
  compose
} from 'styled-system'

const StyledA = styled.a`
  text-decoration: none;
  cursor: pointer;

  ${compose(
    space,
    color,
    typography,
    layout,
    opacity
  )}
`

export default StyledA
