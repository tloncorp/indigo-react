import * as React from "react";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { ResponsiveValue, ThemeValue, RequiredTheme } from "styled-system";
import { AllSystemProps, allSystemStyle } from "../systemHelpers";

export type RowProps = AllSystemProps & {
  gapX?: ResponsiveValue<ThemeValue<"space", RequiredTheme>>;
};

const style = ({ gapX }: RowProps) =>
  css({
    display: "flex",
    "& > *": typeof gapX === "undefined" ? {} : { marginRight: gapX },
    "& > :last-child": typeof gapX === "undefined" ? {} : { marginRight: 0 },
  } as SystemStyleObject);

export const Row = styled.div<React.PropsWithChildren<RowProps>>(
  style,
  ...allSystemStyle
);

Row.displayName = "Row";
