import * as React from "react";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  border,
  BorderProps,
  flexbox,
  FlexboxProps,
} from "styled-system";
import { Icon } from "./Icon";

export type ErrorLabelProps = BorderProps &
  FlexboxProps &
  ColorProps &
  LayoutProps &
  SpaceProps &
  TypographyProps & {
    hasError?: boolean;
  };

const style = ({ hasError = false }: ErrorLabelProps) =>
  css({
    color: "red",
    display: hasError ? "flex" : "none",
    alignItems: "center",
    lineHeight: "short",
    fontSize: 0,
    pointerEvents: "none",
    userSelect: "none",
    width: "100%",
  } as SystemStyleObject);

const styleProps = [border, color, flexbox, layout, space, typography];

export const ErrorLabelText = styled.div<
  React.PropsWithChildren<ErrorLabelProps>
>(style, ...styleProps);

ErrorLabelText.displayName = "ErrorLabelText";

export const ErrorLabel = ({
  hasError,
  children,
  ...props
}: ErrorLabelProps & React.HTMLAttributes<HTMLDivElement>) => (
  <ErrorLabelText hasError={hasError} {...props}>
    <Icon
      mr="2"
      backgroundColor="red"
      color="white"
      icon="ExclaimationMarkBold"
      borderRadius="999px"
    />
    {children}
  </ErrorLabelText>
);

ErrorLabel.displayName = "ErrorLabel";
