import styled from 'styled-components'

import {
  borders,
  bottom,
  color,
  display,
  flexWrap,
  fontSize,
  fontWeight,
  height,
  left,
  maxWidth,
  opacity,
  right,
  space,
  top,
  width
} from 'styled-system'

export const StyledUl = styled.ul`
  ${height};
  ${width};
  ${space};
  ${maxWidth};
  ${display};
  ${color};
  ${fontSize};
  ${borders};
  ${top};
  ${left};
  ${bottom};
  ${right};
`

export const StyledOl = styled.ol`
  ${height};
  ${width};
  ${space};
  ${display};
  ${flexWrap};
`

export const StyledLi = styled.li`
  list-style: none;
  ${height};
  ${space};
  ${display};
  ${borders};
  ${fontSize};
  ${fontWeight};
  ${width};
  ${opacity};
`
