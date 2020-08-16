import * as React from "react";
// import styled from "styled-components";
// import css, { SystemStyleObject } from "@styled-system/css";
import { Icon } from "./Icon";
import { Inline } from "./Inline";
import { Label } from "./Label";
import { CommonStyleProps } from "./systemHelpers";

export type ErrorLabelProps = CommonStyleProps & {
  hasError?: boolean;
};

// const style = () => css({
//     color: "red",
//     alignItems: "center",
//     lineHeight: "short",
//     fontSize: 0,
//     pointerEvents: "none",
//     userSelect: "none",
//     width: "100%",
//   } as SystemStyleObject);

// export const ErrorLabelText = styled.div<
//   React.PropsWithChildren<ErrorLabelProps>
// >(style, ...commonStyle);

// ErrorLabelText.displayName = "ErrorLabelText";

export const ErrorLabel = ({
  hasError,
  children,
  ...props
}: ErrorLabelProps & React.HTMLAttributes<HTMLDivElement>) => (
  <Inline display={hasError ? "flex" : "none"} {...props}>
    <Icon
      mr="2"
      backgroundColor="red"
      color="white"
      icon="ExclaimationMarkBold"
      borderRadius="999px"
    />
    <Label color="red">{children}</Label>
  </Inline>
);

ErrorLabel.displayName = "ErrorLabel";
