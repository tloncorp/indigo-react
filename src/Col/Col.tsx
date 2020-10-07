import * as React from "react";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { ResponsiveValue, ThemeValue, RequiredTheme } from "styled-system";
import { AllSystemProps, allSystemStyle } from "../systemHelpers";

export type ColProps = AllSystemProps & {
  gapY?: ResponsiveValue<ThemeValue<"space", RequiredTheme>>;
};

const style = ({ gapY }: ColProps) =>
  css({
    display: "flex",
    flexDirection: "column",
    "& > *": typeof gapY === "undefined" ? {} : { marginTop: gapY },
    "& > :first-child": typeof gapY === "undefined" ? {} : { marginTop: 0 },
  } as SystemStyleObject);

export const Col = styled.div<React.PropsWithChildren<ColProps>>(
  style,
  ...allSystemStyle
);

Col.displayName = "Col";
