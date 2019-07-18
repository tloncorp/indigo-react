import styled, { css } from 'styled-components'

import {
  alignSelf,
  borderColor,
  borderRadius,
  borders,
  bottom,
  color,
  display,
  flexBasis,
  flexDirection,
  fontSize,
  height,
  justifyContent,
  left,
  lineHeight,
  maxWidth,
  minHeight,
  minWidth,
  opacity,
  position,
  right,
  space,
  textAlign,
  top,
  width
} from 'styled-system'

const StyledDiv = styled.div`
  ${p =>
    p.sticky
      ? css`
          position: -webkit-sticky;
          position: sticky;
          top: -1px;
        `
      : null};
  ${alignSelf};
  ${borders};
  ${borderColor};
  ${borderRadius};
  ${bottom};
  ${color};
  ${display};
  ${flexBasis};
  ${flexDirection};
  ${fontSize};
  ${justifyContent};
  ${left};
  ${lineHeight};
  ${maxWidth};
  ${minHeight};
  ${minWidth};
  ${opacity};
  ${position};
  ${right};
  ${space};
  ${textAlign};
  ${top};
  ${width};
  ${height};
`

export default StyledDiv
