import * as React from 'react';
import styled from 'styled-components';

type Props = {
  children?: JSX.Element | JSX.Element[];
  topBarContents?: JSX.Element | JSX.Element[];
};

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  padding: 16px;
  padding-top: 0px;
  padding-bottom: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Outline = styled.div`
  width: 100%;
  height: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: ${p => p.theme.colors.gray2};
  border-radius: ${p => p.theme.boxRadii.mid}px;
`;

const Frame = (props: Props) => {
  return (
    <Root>
      {props.topBarContents}
      <Outline>{props.children}</Outline>
    </Root>
  );
};

export default Frame;
