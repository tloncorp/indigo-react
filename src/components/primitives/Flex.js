import styled from 'styled-components'
import { flexbox, space, layout, compose } from 'styled-system'

const Flex = styled.div`
  display: flex;
  ${compose(
    flexbox,
    space,
    layout
  )}
`
export default Flex

Flex.defaultProps = {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start'
}
