import * as React from 'react';
import styled from 'styled-components';

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Outer = styled.div`
  width: 126px;
  height: 126px;
  overflow: hidden;
  background-color: ${p => p.theme.colors.white};
  margin: ${p => p.theme.space[4]}px;
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  border-style: solid;
  border-color: ${p => p.theme.colors.black};
  border-width: 1px;
`;

const Tile = ({children}: Props) => (
  <Outer>
    <Inner>{children}</Inner>
  </Outer>
);

export default Tile;
