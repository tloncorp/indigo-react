import * as React from "react";
import { Icon, Inline, Label } from "../index";
import { CommonStyleProps } from "../systemHelpers";

export type ErrorLabelProps = CommonStyleProps & {
  hasError?: boolean;
};

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
