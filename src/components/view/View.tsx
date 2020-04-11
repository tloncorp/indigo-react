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
  min-width: ${p => p.theme.space[12]}px;
  height: 100%;
  display: ${(p: Props) => (p.sideBarOpen ? 'block' : 'none')};
  max-height: calc(100vh - 48px);
  overflow-y: scroll;

  @media only screen and (max-width: ${p => p.theme.breakpoints[0]}) {
    width: 100%;
    border-right-width: 0px;
    border-right-style: none;
  }
`;

const Main = styled.div<Props>`
  display: flex;
  flex-direction: column;
  flex: 1;
  @media only screen and (max-width: ${p => p.theme.breakpoints[0]}) {
    display: ${p => (p.sideBarOpen ? 'flex' : 'none')};
  }
`;

const View = (props: Props) => {
  return (
    <Row width="100%" height="100%">
      {typeof props.sideBarContents !== 'undefined' ? (
        <SideBar sideBarOpen={props.sideBarOpen}>{props.sideBarContents}</SideBar>
      ) : null}
      <Main>{props.children}</Main>
    </Row>
  );
};

export default View;
