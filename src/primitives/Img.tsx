import styled from 'styled-components';

import { layout, LayoutProps, space, SpaceProps, compose } from 'styled-system';

type Props = LayoutProps & SpaceProps & {};

const Img = styled.img<Props>`
  ${compose(space, layout)};
`;
export default Img;
