import styled from 'styled-components'
import {
  color,
  display,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  maxWidth,
  space,
  textAlign
} from 'styled-system'

const StyledSpan = styled.span`
  text-decoration: ${p => (p.underline ? 'underline' : 'none')};
  ${space};
  ${color};
  ${fontSize};
  ${fontWeight};
  ${textAlign};
  ${fontFamily};
  ${maxWidth};
  ${lineHeight};
  ${display};
`
StyledSpan.displayName = 'StyledSpan'

export default StyledSpan
