import styled from 'styled-components';

import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
  compose,
} from 'styled-system';

type Props = LayoutProps & SpaceProps & FlexboxProps & {};

const Img = styled.img<Props>`
  ${compose(space, layout, flexbox)};
`;

Img.defaultProps = {
  height: 'auto',
  width: '100%',
};

export default Img;
