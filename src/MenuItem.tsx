import React from "react";
import {
  MenuItem as ReachMenuItem,
  MenuItemProps as ReachMenuItemProps,
} from "@reach/menu-button";
import classNames from "classnames";

export type MenuItemProps = ReachMenuItemProps &
  React.HTMLAttributes<HTMLDivElement>;

export const MenuItem = ({ className, children, ...props }: MenuItemProps) => (
  <ReachMenuItem
    className={classNames(
      "flex items-center h-6 px-4 border-l border-r border-solid border-gray-200 cursor-pointer hover:text-white hover:bg-blue-400 hover:border-blue-400",
      className
    )}
    {...props}
  >
    {children}
  </ReachMenuItem>
);
