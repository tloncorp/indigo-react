import styled from 'styled-components'
import {
  color,
  display,
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
    display,
    opacity
  )}
`

export default StyledA
