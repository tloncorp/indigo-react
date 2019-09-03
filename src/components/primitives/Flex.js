import styled from 'styled-components'
import { flexbox, space, layout, compose } from 'styled-system'

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${compose(
    flexbox,
    space,
    layout
  )}
`
export default Flex
