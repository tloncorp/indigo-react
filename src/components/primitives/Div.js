import styled from 'styled-components'

import {
  alignSelf,
  layout,
  space,
  background,
  border,
  compose
} from 'styled-system'

const Div = styled('div')(
  compose(
    layout,
    background,
    border,
    space,
    alignSelf
  )
)

export default Div
