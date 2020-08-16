import styled from "styled-components";
import { ColorProps, color } from "styled-system";
import css, { SystemStyleObject } from "@styled-system/css";
import { StructuralProps, structureStyle } from "./systemHelpers";

export type RuleProps = ColorProps &
  StructuralProps & {
    vertical?: boolean;
  };

const style = ({ vertical = false }: RuleProps) =>
  css({
    height: vertical ? "auto" : 0,
    width: vertical ? 0 : "100%",
    borderWidth: 0,
    borderStyle: "solid",
    borderTopWidth: vertical ? 0 : "1px",
    borderLeftWidth: vertical ? "1px" : 0,
    borderColor: "lightGray",
  } as SystemStyleObject);

export const Rule = styled.div<React.PropsWithChildren<RuleProps>>(
  style,
  color,
  ...structureStyle
);

Rule.displayName = "Rule";
