import styled from "styled-components";

import {
  border,
  BorderProps,
  color,
  ColorProps,
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

type Props = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps & {
    collapse?: boolean;
    wrap?: boolean;
  };

const Col = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: ${p => (p.collapse ? "auto" : "100%")};
  flex-wrap: ${p => (p.wrap ? "wrap" : "nowrap")};
  ${compose(border, color, flexbox, layout, position, space)}
`;

Col.defaultProps = {
  collapse: false,
  wrap: false
};

export default Col;
export { Props };
