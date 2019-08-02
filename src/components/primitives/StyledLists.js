import styled from 'styled-components'

import { border, layout, space, typography, compose } from 'styled-system'

export const StyledUl = styled.ul`
  ${compose(
    space,
    layout
  )}
`

export const StyledOl = styled.ol`
  ${compose(
    space,
    layout
  )}
`

export const StyledLi = styled.li`
  list-style: none;
  ${compose(
    space,
    layout,
    border,
    typography
  )}
`
