import classNames from "classnames";
import * as React from "react";
import { Icon, Label } from "./index";

export type ErrorLabelProps = React.HTMLAttributes<HTMLDivElement> & {
  hasError?: boolean;
};

export const ErrorLabel = ({
  hasError,
  className,
  children,
  ...props
}: ErrorLabelProps & React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={classNames(hasError ? "flex" : "hidden", className)}
    {...props}
  >
    <Icon
      mr="2"
      backgroundColor="red"
      color="white"
      icon="ExclaimationMarkBold"
      borderRadius="999px"
    />
    <Label color="red">{children}</Label>
  </div>
);

ErrorLabel.displayName = "ErrorLabel";
