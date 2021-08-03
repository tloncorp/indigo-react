import classnames from "classnames";
import React, { FunctionComponent, HTMLAttributes } from "react";

export type FourUpProps = HTMLAttributes<HTMLDivElement>;

export const FourUp: FunctionComponent<FourUpProps> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={classnames("grid grid-flow-col grid-cols-4", className)}
    {...props}
  >
    {children &&
      Array.isArray(children) &&
      children.map((child) => <div className="flex flex-col">{child}</div>)}
  </div>
);

FourUp.displayName = "FourUp";
