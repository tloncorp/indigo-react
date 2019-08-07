import styled from 'styled-components'

import {
  alignSelf,
  layout,
  opacity,
  position,
  space,
  background,
  border,
  compose
} from 'styled-system'

const StyledDiv = styled('div')(
  compose(
    layout,
    background,
    border,
    space,
    alignSelf,
    position,
    opacity
  )
)

export default StyledDiv
