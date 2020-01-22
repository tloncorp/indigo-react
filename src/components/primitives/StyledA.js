import styled from 'styled-components'
import { color, layout, space, typography, compose } from 'styled-system'

const StyledA = styled.a`
  text-decoration: underline;
  cursor: pointer;

  ${compose(space, color, typography, layout)}
`;

export default StyledA;

StyledA.defaultProps = {
  color: 'black'
}
