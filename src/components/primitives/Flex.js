import styled from "styled-components";
import { flexbox, space, typography, layout, compose } from "styled-system";

const Flex = styled.div`
  display: flex;
  ${compose(
    flexbox,
    typography,
    space,
    layout
  )}
`;
export default Flex;
