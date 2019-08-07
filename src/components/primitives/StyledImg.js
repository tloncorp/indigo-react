import styled from 'styled-components'

import { space, layout, compose } from 'styled-system'

const StyledImg = styled.img`
  ${compose(
    space,
    layout
  )};
`
export default StyledImg
