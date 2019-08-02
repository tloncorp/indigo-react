import styled from 'styled-components'

import {
  alignSelf,
  display,
  opacity,
  position,
  space,
  layout,
  background,
  border,
  compose
} from 'styled-system'

const StyledDiv = styled('div')(
  compose(
    layout,
    background,
    display,
    border,
    space,
    alignSelf,
    position,
    opacity
  )
)

export default StyledDiv
