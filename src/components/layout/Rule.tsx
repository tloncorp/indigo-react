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
  SpaceProps & {
    vertical?: boolean;
  };

export default styled.div<Props>`
  box-sizing: border-box;

  height: ${p => {
    if (p.vertical) return 'auto';
    return '0px';
  }};

  width: ${p => {
    if (p.vertical) return '0px';
    return '100%';
  }};

  border-color: ${p => {
    return p.theme.colors.lightGray;
  }};

  border-width: 0px;

  border-style: solid;

  border-top-width: ${p => {
    if (p.vertical) return '0px';
    return '1px';
  }};

  border-left-width: ${p => {
    if (p.vertical) return '1px';
    return '0px';
  }};

  ${compose(border, flexbox, layout, position, space)}
`;
