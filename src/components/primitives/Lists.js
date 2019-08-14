import styled from 'styled-components'

import { border, layout, space, typography, compose } from 'styled-system'

export const Ul = styled.ul`
  ${compose(
    space,
    layout
  )}
`

export const Ol = styled.ol`
  ${compose(
    space,
    layout
  )}
`

export const Li = styled.li`
  list-style: none;
  ${compose(
    space,
    layout,
    border,
    typography
  )}
`
