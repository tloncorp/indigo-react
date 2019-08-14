import styled from 'styled-components'
import {
  space,
  layout,
  color,
  border,
  position,
  shadow,
  flexbox,
  compose
} from 'styled-system'

export default styled.div`
  box-sizing: border-box;
  min-width: 0;

  ${compose(
    space,
    layout,
    color,
    border,
    position,
    shadow,
    flexbox
  )}
`
