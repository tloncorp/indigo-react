import * as React from "react";
import { iconIndex } from "./iconIndex";
import classNames from "classnames";

export type IconIndex = typeof iconIndex;

export type IconProps = React.SVGProps<SVGSVGElement> & {
  icon: keyof IconIndex;
};

export const Icon = ({ icon, className, ...props }: IconProps) => {
  const InnerIcon = iconIndex[icon] || iconIndex.NullIcon;

  return (
    <svg
      className={classNames("icon-svg flex-none w-4 h-4", className)}
      {...props}
      viewBox={"0 0 16 16"}
    >
      <InnerIcon />
    </svg>
  );
};

Icon.displayName = "Icon";
