import styled from 'styled-components'
import { color, display, space, compose, typography } from 'styled-system'

const StyledSpan = styled.span`
  text-decoration: ${p => (p.underline ? 'underline' : 'none')};
  ${compose(
    space,
    color,
    typography,
    display
  )}
`

export default StyledSpan
