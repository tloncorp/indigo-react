import * as React from "react";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { allSystemStyle, AllSystemProps } from "./system/unions";

export type TableProps = AllSystemProps &
  React.HTMLAttributes<HTMLTableElement>;

const style = () =>
  css({
    borderLeft: "1px solid",
    borderTop: "1px solid",
    borderColor: "lightGray",
    borderCollapse: "separate",
  } as SystemStyleObject);

export const Table = styled.table<React.PropsWithChildren<TableProps>>(
  style,
  ...allSystemStyle
);

Table.displayName = "Table";
