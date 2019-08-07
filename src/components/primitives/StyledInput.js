import styled from 'styled-components'
import {
  color,
  layout,
  opacity,
  space,
  typography,
  compose
} from 'styled-system'

const StyledInput = styled.input`
  ${compose(
    space,
    color,
    typography,
    layout,
    opacity
  )}
`

export default StyledInput
