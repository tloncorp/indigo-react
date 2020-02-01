import React from "react";
import styled from "styled-components";
import {
  layout, LayoutProps,
  space, SpaceProps,
  compose
} from 'styled-system'

interface Props extends LayoutProps, SpaceProps {
  children: any,
}

const Box = styled.div`
  ${compose(
    space,
    layout
  )}
`;

const Container = (props:Props) => (
  <Box mx={[6,7,8,"auto"]} {...props}>
    {props.children}
  </Box>
);

Container.defaultProps = {
  maxWidth: "1024px"
};

export default Container;
