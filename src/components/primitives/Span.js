import styled from 'styled-components'
import {
  display,
  space,
  compose,
  typography,
  color,
  border,
  shadow
} from 'styled-system'

const Span = styled.span`
  text-decoration: ${p => (p.underline ? 'underline' : 'none')};
  ${compose(
    space,
    color,
    typography,
    display,
    shadow,
    border
  )}
`

export default Span
