import * as React from "react";
import {
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps
} from "styled-system";

import { Row, Center } from "../core/index";

type Props = FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps & {
    children?: JSX.Element | JSX.Element[] | string | (string | JSX.Element)[];
  };

const Max = ({ children, maxWidth, ...props }: Props) => (
  <Center {...props}>
    <Row expand maxWidth={maxWidth || "1440px"}>
      {children}
    </Row>
  </Center>
);

export default Max;
