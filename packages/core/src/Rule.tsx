import styled from 'styled-components';

import {
  border,
  flexbox,
  layout,
  position,
  space,
  compose,
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';

type Props = BorderProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps & {
    vertical?: boolean;
  };

/**
 * Return the application / root component instance.
 */
const Rule = styled.div<Props>`
  box-sizing: border-box;

  height: ${p => {
    if (p.vertical) return 'auto';
    return '0px';
  }};

  width: ${p => {
    if (p.vertical) return '0px';
    return '100%';
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

Rule.defaultProps = {
  borderColor: 'gray1',
  vertical: false,
};

export default Rule;
export {Props};
