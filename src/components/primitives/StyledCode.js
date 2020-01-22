import styled from 'styled-components'

import {
  color,
  layout,
  opacity,
  space,
  typography,
  compose
} from 'styled-system'

const StyledCode = styled.code`
  ${compose(color, layout, opacity, space, typography)}
`

export default StyledCode

StyledCode.defaultProps = {
  fontFamily: 'mono',
  bg: 'grayLight',
  fontSize: 2,
  lineHeight: 'regular'
}
