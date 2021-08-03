import classNames from "classnames";
import * as React from "react";
import { Icon } from "./index";

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
      icon="ExclaimationMarkBold"
      className="mr-2 text-white bg-red-300 rounded-full"
    />
    <span className="label text-red-300">{children}</span>
  </div>
);

ErrorLabel.displayName = "ErrorLabel";
