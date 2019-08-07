import { color, space, flexbox, layout } from 'styled-system'
import styled from 'styled-components'

const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0
  },
  space,
  color,
  layout,
  flexbox
)

export default Box
