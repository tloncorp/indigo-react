import * as React from "react";
import styled from "styled-components";
import { Row } from "../core/index";

import { LayoutProps, PositionProps, SpaceProps } from "styled-system";

type Props = LayoutProps &
  PositionProps &
  SpaceProps & {
    children: JSX.Element | JSX.Element[];
  };

const Cap = styled.div`
  width: 16px;
  min-width: 16px;
  padding: 8px 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${p => p.theme.colors.gray};
  line-height: 1.2;
`;

const End = styled.div`
  width: 100%;
  padding: 8px 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${p => p.theme.colors.gray};
  line-height: 1.2;
`;

const TabGroup = ({ children, ...props }: Props) => (
  <Row width="100%" {...props}>
    <Cap>{` `}</Cap>
    {children}
    <End>{` `}</End>
  </Row>
);

export default TabGroup;
