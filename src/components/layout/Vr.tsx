import styled from 'styled-components';

import {
  border,
  flexbox,
  layout,
  position,
  space,
  compose,
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';

type Props = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps & {};

export default styled.div<Props>`
  box-sizing: border-box;

  width: 0px;
  height: 100%

  border-left-color: ${p => {
    if (p.theme.dark) return p.theme.colors.grayDark;
    return p.theme.colors.grayLight;
  }};
  border-left-width: 1px;
  border-left-style: solid;

  ${compose(border, flexbox, layout, position, space)}
`;
