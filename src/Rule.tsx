import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from "styled-system";

type RuleProps = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps & {
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

const styleProps = [border, color, flexbox, layout, position, space];

const Rule = styled.div<React.PropsWithChildren<RuleProps>>(
  style,
  ...styleProps
);

Rule.displayName = "Rule";
export default Rule;
