import styled from 'styled-components'
import { Flex } from 'grid-styled'

import {
  display,
  flexBasis,
  height,
  overflow,
  position,
  space
} from 'styled-system'

const StyledFlex = styled(Flex)`
  ${display};
  ${flexBasis};
  ${height};
  ${overflow};
  ${position};
  ${space};
`

export default StyledFlex
