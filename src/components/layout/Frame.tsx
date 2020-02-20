import React from 'react';
import styled from 'styled-components';
import { LayoutProps, SpaceProps } from 'styled-system';
import Box from '../../primitives/Box';
import Row from './Row';

import Pad from './Pad';

type Props = LayoutProps &
  SpaceProps & {
    children: any;
  };

const Background = styled(Box)`
  background-color: ${props => {
    console.log(props);
    if (props.theme.mode === 'dark') return props.theme.colors.black;
    return props.theme.colors.white;
  }};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Window = styled(Box)`
  height: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => {
    if (props.theme.mode === 'dark') return props.theme.colors.gray[0];
    return props.theme.colors.gray[4];
  }};
`;

const Frame = (props: Props) => {
  console.log('Frame:', props);
  return (
    <Background {...props}>
      <Row p="3" width="100%">
        <Pad>Home</Pad>
      </Row>
      <Box height="100%" px="4" pb="4">
        <Window>{props.children}</Window>
      </Box>
    </Background>
  );
};

export default Frame;
