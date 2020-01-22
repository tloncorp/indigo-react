import styled from 'styled-components'
import {
  space,
  compose,
  typography,
  color,
  border,
  shadow,
  layout
} from 'styled-system'

const Span = styled.span`
  text-decoration: ${p => (p.underline ? 'underline' : 'none')};
  ${compose(space, color, typography, shadow, border, layout)}
`;

export default Span;
