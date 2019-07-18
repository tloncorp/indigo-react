import styled from 'styled-components'
import {
  color,
  display,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  maxWidth,
  opacity,
  space,
  textAlign
} from 'styled-system'

const StyledA = styled.a`
  text-decoration: none;
  cursor: pointer;
  ${space};
  ${color};
  ${fontSize};
  ${fontWeight};
  ${textAlign};
  ${fontFamily};
  ${maxWidth};
  ${lineHeight};
  ${display};
  ${opacity};
`
StyledA.displayName = 'StyledA'

export default StyledA
