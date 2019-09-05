import styled from "styled-components";

import { color, layout, space, typography, compose } from "styled-system";

const P = styled.p`
  ${compose(
    color,
    layout,
    space,
    typography
  )}
`;

export default P;

P.defaultProps = {
  fontSize: 2,
  lineHeight: "regular"
};
