import {
  borders,
  color,
  display,
  height,
  maxWidth,
  minHeight,
  minWidth,
  opacity,
  position,
  space,
  textAlign,
  width
} from 'styled-system'
import styled from 'styled-components'
import { Box } from 'grid-styled'

const StyledBox = styled(Box)`
  ${color};
  ${display};
  ${maxWidth};
  ${minWidth};
  ${minHeight};
  ${textAlign};
  ${space};
  ${width};
  ${height};
  ${borders};

  ${position};
  ${opacity};
`

export default StyledBox
