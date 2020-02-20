import styled from 'styled-components';

import { layout, LayoutProps, space, SpaceProps, compose } from 'styled-system';

type Props = LayoutProps & SpaceProps & {};

const Img = styled.img<Props>`
  ${compose(space, layout)};
`;

Img.defaultProps = {
  height: 'auto',
};

export default Img;
