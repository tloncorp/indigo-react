import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  color,
  layout,
  opacity,
  space,
  compose,
  typography,
  position
} from 'styled-system'

const StyledLink = styled(Link)`
  color: black;
  text-decoration: ${p => (p.underline ? 'underline' : 'none')};

  ${compose(
    color,
    layout,
    typography,
    space,
    opacity,
    position
  )}
`
export default StyledLink
