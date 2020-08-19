import * as React from "react";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { ResponsiveValue, ThemeValue, RequiredTheme } from "styled-system";
import { AllSystemProps, allSystemStyle } from "../systemHelpers";

export type ColProps = AllSystemProps & {
  pitch?: ResponsiveValue<ThemeValue<"space", RequiredTheme>>;
};

const style = ({ pitch }: ColProps) =>
  css({
    display: "flex",
    flexDirection: "column",
    "& > *": typeof pitch === "undefined" ? {} : { marginTop: pitch },
    "& :first-child": typeof pitch === "undefined" ? {} : { marginTop: 0 },
  } as SystemStyleObject);

export const Col = styled.div<React.PropsWithChildren<ColProps>>(
  style,
  ...allSystemStyle
);

Col.displayName = "Col";
