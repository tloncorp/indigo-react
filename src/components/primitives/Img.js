import styled from 'styled-components'

import { space, layout, compose } from 'styled-system'

const Img = styled.img`
  ${compose(
    space,
    layout
  )};
`
export default Img
