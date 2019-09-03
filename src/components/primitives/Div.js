import styled from 'styled-components'

import {
  alignSelf,
  layout,
  space,
  background,
  border,
  color,
  compose
} from 'styled-system'

const Div = styled('div')(
  compose(
    layout,
    background,
    border,
    space,
    color,
    alignSelf
  )
)

export default Div
