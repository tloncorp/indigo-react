import * as React from "react";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { allSystemStyle, AllSystemProps } from "./system/unions";

export type TdProps = AllSystemProps &
  React.HTMLAttributes<HTMLTableCellElement>;

const style = () =>
  css({
    p: 1,
    borderRight: "1px solid",
    borderBottom: "1px solid",
    borderRightColor: "lightGray",
    borderBottomColor: "lightGray",
  } as SystemStyleObject);

export const Td = styled.td<React.PropsWithChildren<TdProps>>(
  style,
  ...allSystemStyle
);

Td.displayName = "Td";
