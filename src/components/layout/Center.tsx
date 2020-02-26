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
  SpaceProps & {};

const Center = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  ${compose(border, color, flexbox, layout, position, space)}
`;

Center.defaultProps = {
  margin: 0,
  minWidth: 0,
};

export default Center;
export {Props};
