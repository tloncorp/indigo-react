import * as React from "react";
import styled from "styled-components";
import { ResponsiveValue, ThemeValue, RequiredTheme } from "styled-system";
import { AllSystemProps } from "../systemHelpers";
import css, { SystemStyleObject } from "@styled-system/css";

import { Row } from "../Row/Row";
import { Col } from "../Col/Col";

type TwoUpChildProps = {
  xPitch: ResponsiveValue<ThemeValue<"space", RequiredTheme>>;
  yPitch: ResponsiveValue<ThemeValue<"space", RequiredTheme>>;
  index: number;
};

export type TwoUpProps = AllSystemProps &
  React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNodeArray;
    xPitch: ResponsiveValue<ThemeValue<"space", RequiredTheme>>;
    yPitch: ResponsiveValue<ThemeValue<"space", RequiredTheme>>;
  };

export type RowProps = AllSystemProps & {
  pitch?: ResponsiveValue<ThemeValue<"space", RequiredTheme>>;
};

const style = ({ xPitch = 0, yPitch = 0, index }: TwoUpChildProps) =>
  css({
    mb: index === 0 ? [yPitch, yPitch, 0] : 0,
    pr: index === 0 ? [0, 0, xPitch] : 0,
    pl: index === 1 ? [0, 0, xPitch] : 0,
    width: ["100%", "100%", "50%"],
  } as SystemStyleObject);

const Child = styled(Col)(style);

export const TwoUp = ({ children, xPitch, yPitch, ...props }: TwoUpProps) => (
  <Row flexDirection={["column", "column", "row"]} flexWrap="wrap" {...props}>
    <Child xPitch={xPitch} yPitch={yPitch} index={0} children={children[0]} />
    <Child xPitch={xPitch} yPitch={yPitch} index={1} children={children[1]} />
  </Row>
);

TwoUp.displayName = "TwoUp";
