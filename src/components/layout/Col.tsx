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
  };

const Col = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: ${p => (p.expand ? '100%' : 'auto')};
  ${compose(border, color, flexbox, layout, position, space)}
`;

Col.defaultProps = {
  // margin: 0,
  minWidth: 0,
};

export default Col;
export {Props};
