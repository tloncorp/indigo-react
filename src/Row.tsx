import * as React from "react";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { ResponsiveValue, ThemeValue, RequiredTheme } from "styled-system";
import { AllSystemProps, allSystemStyle } from "./systemHelpers";

export type RowProps = AllSystemProps & {
  pitch?: ResponsiveValue<ThemeValue<"space", RequiredTheme>>;
};

const style = ({ pitch }: RowProps) =>
  css({
    display: "flex",
    "& > *": typeof pitch === "undefined" ? {} : { marginLeft: pitch },
    "& :first-child": typeof pitch === "undefined" ? {} : { marginLeft: 0 },
  } as SystemStyleObject);

export const Row = styled.div<React.PropsWithChildren<RowProps>>(
  style,
  ...allSystemStyle
);

Row.displayName = "Row";
