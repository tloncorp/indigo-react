import * as React from 'react';
import styled from 'styled-components';
import Row from '../layout/Row';

type Props = {
  children?: JSX.Element | JSX.Element[];
  sideBarContents?: JSX.Element | JSX.Element[];
  sideBarOpen?: boolean;
};

const SideBar = styled.div<Props>`
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: ${p => p.theme.colors.gray2};
  width: ${p => p.theme.space[12]}px;
  height: 100%;
  display: ${(p: Props) => (p.sideBarOpen ? 'block' : 'none')};
  overflowy: scroll;
`;

const View = (props: Props) => {
  return (
    <Row width="100%" height="100%">
      {typeof props.sideBarContents !== 'undefined' ? (
        <SideBar sideBarOpen={props.sideBarOpen}>{props.sideBarContents}</SideBar>
      ) : null}
      {props.children}
    </Row>
  );
};

export default View;
