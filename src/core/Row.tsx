import styled from 'styled-components';

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
  compose,
} from 'styled-system';

type Props = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps & {
    expand?: boolean;
    wrap?: boolean;
  };

const Row = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  width: ${p => (p.expand ? '100%' : 'auto')};
  flex-wrap: ${p => (p.wrap ? 'wrap' : 'nowrap')};
  ${compose(border, color, flexbox, layout, position, space)}
`;

Row.defaultProps = {
  // minWidth: 0,
  expand: false,
  wrap: false,
};

export default Row;
export {Props};
