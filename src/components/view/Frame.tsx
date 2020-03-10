import * as React from 'react';
import styled from 'styled-components';

import Row from '../layout/Row';
import Col from '../layout/Col';

type Props = {
  children?: JSX.Element | JSX.Element[];
  topBarContents?: JSX.Element | JSX.Element[];
};

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
    <Col width="100vw" height="100vh" px="4" pb="4">
      <Row p="2" px="4">
        {props.topBarContents}
      </Row>
      <Outline>{props.children}</Outline>
    </Col>
  );
};

export default Frame;
