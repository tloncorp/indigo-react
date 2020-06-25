import styled from "styled-components";

import {
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  compose
} from "styled-system";

type Props = FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps & { collapse?: boolean };

const Center = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${p => (p.collapse ? "auto" : "100%")};
  ${compose(flexbox, layout, position, space)}
`;

Center.defaultProps = {
  margin: 0,
  minWidth: 0
};

export default Center;
export { Props };
