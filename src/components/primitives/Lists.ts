import styled from 'styled-components'

import {
  border, BorderProps,
  layout, LayoutProps,
  space, SpaceProps,
  typography, TypographyProps,
  compose
} from 'styled-system'

interface Props extends BorderProps, LayoutProps, SpaceProps, TypographyProps {}

export const Ul = styled.ul<Props>`
  ${compose(space, layout, typography)}
`

export const Ol = styled.ol<Props>`
  ${compose(space, layout, typography)}
`

export const Li = styled.li<Props>`
  list-style: none;
  ${compose(space, layout, border, typography)}
`
