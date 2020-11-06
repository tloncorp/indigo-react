import * as React from "react";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { ResponsiveValue, ThemeValue, RequiredTheme } from "styled-system";
import { AllSystemProps, allSystemStyle } from "../systemHelpers";

export type RowProps = AllSystemProps & {
  gapX?: ResponsiveValue<ThemeValue<"space", RequiredTheme>>;
};

// Some browsers do not honour minimum height for nested flex children
// so we disable flexShrink by default
const flexChild = { flexShrink: 0 };

const style = ({ gapX }: RowProps) =>
  css({
    display: "flex",
    "& > *": typeof gapX === "undefined" ? flexChild : { ...flexChild, marginRight: gapX },
    "& > :last-child": typeof gapX === "undefined" ? {} : { marginRight: 0 },
  } as SystemStyleObject);

export const Row = styled.div<React.PropsWithChildren<RowProps>>(
  style,
  ...allSystemStyle
);

Row.displayName = "Row";
