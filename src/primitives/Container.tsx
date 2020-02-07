import React from 'react';
import styled from 'styled-components';
import { layout, LayoutProps, space, SpaceProps, compose } from 'styled-system';

type Props = LayoutProps &
  SpaceProps & {
    children: any;
  };

const Box = styled.div`
  ${compose(space, layout)}
`;

const Container = (props: Props) => (
  <Box mx={[6, 7, 8, 'auto']} {...props}>
    {props.children}
  </Box>
);

Container.defaultProps = {
  maxWidth: '800px',
};

export default Container;
