import React from 'react'
import styled from 'styled-components'
import { layout, space, compose } from 'styled-system'

const Box = styled.div`
  ${compose(space, layout)}
`;

const Container = ({ children, maxWidth = '1024px', ...props }) => (
  <Box mx={[6, 7, 8, 'auto']} maxWidth={maxWidth} {...props}>
    {children}
  </Box>
);

export default Container;
