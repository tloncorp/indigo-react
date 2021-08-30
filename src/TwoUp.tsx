import classnames from "classnames";
import React, { FunctionComponent, HTMLAttributes } from "react";

export type TwoUpProps = HTMLAttributes<HTMLDivElement>;

export const TwoUp: FunctionComponent<TwoUpProps> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={classnames("grid grid-flow-col grid-cols-2", className)}
    {...props}
  >
    {children &&
      Array.isArray(children) &&
      children.map((child) => <div className="flex flex-col">{child}</div>)}
  </div>
);

TwoUp.displayName = "TwoUp";
