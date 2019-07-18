import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  color,
  display,
  fontFamily,
  fontSize,
  fontWeight,
  height,
  lineHeight,
  maxWidth,
  opacity,
  position,
  space,
  textAlign,
  top,
  width
} from 'styled-system'

const StyledLink = styled(Link)`
  color: black;
  text-decoration: ${p => (p.underline ? 'underline' : 'none')};
  ${color};
  ${display};
  ${fontFamily};
  ${fontSize};
  ${fontWeight};
  ${height};
  ${lineHeight};
  ${maxWidth};
  ${position};
  ${space};
  ${textAlign};
  ${top};
  ${width};
  ${opacity};
`
export default StyledLink
