import * as React from "react";
import {
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';

import Row from '../../core/src/Row';
import Col from '../../core/src/Col';

type Props =
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps & {
    children?: JSX.Element | JSX.Element[] | string | (string | JSX.Element)[];
  };

const C = ({ children, ...props }:Props) => (
  <Col width={["100%", "100%", "50%"]} {...props}>
    {children || <div />}
  </Col>
);

const TwoUp = ({ children, ...props }:Props) => (
  <Row flexDirection={["column", "row", "row"]} flexWrap='wrap' {...props}>
    <C mb={['7','7','0']}>{children[0]}</C>
    <C mb={['0','0','0']}>{children[1]}</C>
  </Row>
);

export default TwoUp;
