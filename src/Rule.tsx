import classNames from "classnames";
import React, { HTMLAttributes } from "react";

export type RuleProps = HTMLAttributes<HTMLHRElement> & {
  vertical?: boolean;
};

export const Rule = ({
  className,
  vertical = false,
  ...props
}: RuleProps): JSX.Element => (
  <hr
    className={classNames(
      "border-solid border-gray-200",
      vertical && "h-auto border-l",
      !vertical && "w-full border-t",
      className
    )}
    {...props}
  />
);

Rule.displayName = "Rule";
