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
  SpaceProps & { expand?: boolean };

const Center = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${p => (p.expand ? "100%" : "auto")};
  ${compose(flexbox, layout, position, space)}
`;

Center.defaultProps = {
  margin: 0,
  minWidth: 0
};

export default Center;
export { Props };
