import * as React from "react";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { ResponsiveValue, ThemeValue, RequiredTheme } from "styled-system";
import { AllSystemProps, allSystemStyle } from "../systemHelpers";

export type ColProps = AllSystemProps & {
  gy?: ResponsiveValue<ThemeValue<"space", RequiredTheme>>;
};

const style = ({ gy }: ColProps) =>
  css({
    display: "flex",
    flexDirection: "column",
    "& > *": typeof gy === "undefined" ? {} : { marginTop: gy },
    "& :first-child": typeof gy === "undefined" ? {} : { marginTop: 0 },
  } as SystemStyleObject);

export const Col = styled.div<React.PropsWithChildren<ColProps>>(
  style,
  ...allSystemStyle
);

Col.displayName = "Col";
