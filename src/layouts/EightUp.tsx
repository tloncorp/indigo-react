import * as React from "react";
import {
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps
} from "styled-system";

import { Row, Col } from "../core/index";

type Props = FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps & {
    children: JSX.Element[] | (string | JSX.Element)[];
  };

type InnerProps = FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps & {
    children: JSX.Element | string;
  };

const C = ({ children, ...props }: InnerProps) => (
  <Col width={["50%", "25%", "12.5%"]} {...props}>
    {children || <div />}
  </Col>
);

const EightUp = ({ children, ...props }: Props) => (
  <Row flexDirection={["row", "row", "row"]} flexWrap="wrap" {...props}>
    <C mb={["8", "8", "0"]}>{children[0]}</C>
    <C mb={["8", "8", "0"]}>{children[1]}</C>
    <C mb={["8", "8", "0"]}>{children[2]}</C>
    <C mb={["8", "8", "0"]}>{children[3]}</C>
    <C mb={["8", "0", "0"]}>{children[4]}</C>
    <C mb={["8", "0", "0"]}>{children[5]}</C>
    <C mb={["0", "0", "0"]}>{children[6]}</C>
    <C mb={["0", "0", "0"]}>{children[7]}</C>
  </Row>
);

export default EightUp;
