import styled from 'styled-components'
import theme from "../../theme";
import {
  space, SpaceProps,
} from 'styled-system'

interface Props extends SpaceProps {}

export default styled.div<Props>`
  box-sizing: border-box;
  min-width: 0;
  padding: ${theme.space[2]}px
  ${space}
`;
