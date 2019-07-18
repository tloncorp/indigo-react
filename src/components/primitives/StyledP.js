import styled from 'styled-components'

import {
  borders,
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
  textAlign,
  width
} from 'styled-system'

const StyledP = styled.p`
  ${borders};
  ${color};
  ${display};
  ${fontFamily};
  ${fontSize};
  ${fontWeight};
  ${height};
  ${lineHeight};
  ${maxWidth};
  ${opacity};
  ${space};
  ${textAlign};
  ${width};
`

StyledP.displayName = 'StyledP'

export default StyledP
