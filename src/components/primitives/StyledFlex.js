import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { layout, overflow, position, space, compose } from 'styled-system'

const StyledFlex = styled(Flex)`
  ${compose(
    laout,
    space,
    overflow,
    position
  )}
`

export default StyledFlex
