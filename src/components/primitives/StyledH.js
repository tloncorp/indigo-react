import styled from 'styled-components'

import {
  borders,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  maxWidth,
  opacity,
  space,
  textAlign,
  width
} from 'styled-system'

export const StyledH1 = styled.h1`
  ${color};
  ${fontFamily};
  ${fontSize};
  ${fontWeight};
  ${lineHeight};
  ${maxWidth};
  ${space};
  ${textAlign};
`
StyledH1.displayName = 'StyledH1'

export const StyledH2 = styled.h2`
  ${space};
  ${color};
  ${fontSize};
  ${fontWeight};
  ${textAlign};
  ${maxWidth};
  ${lineHeight};
  ${width};
`
StyledH2.displayName = 'StyledH2'

export const StyledH3 = styled.h3`
  ${space};
  ${color};
  ${fontSize};
  ${fontWeight};
  ${textAlign};
  ${opacity}
  ${fontFamily};
  ${borders};
  ${lineHeight};
  ${opacity};
`
StyledH3.displayName = 'StyledH3'

export const StyledH4 = styled.h4`
  ${space};
  ${color};
  ${fontSize};
  ${fontWeight};
  ${opacity};
`

StyledH4.displayName = 'StyledH4'

export const StyledH5 = styled.h5`
  ${space};
  ${color};
  ${fontSize};
  ${fontWeight};
`

StyledH5.displayName = 'StyledH5'

export const StyledH6 = styled.h6`
  ${space};
  ${color};
  ${fontSize};
  ${fontWeight};
`

StyledH6.displayName = 'StyledH6'
