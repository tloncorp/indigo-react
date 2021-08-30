import * as React from "react";
import {
  MenuList as ReachMenuList,
  MenuListProps as ReachMenuListProps,
} from "@reach/menu-button";
import classNames from "classnames";

export type MenuListProps = ReachMenuListProps &
  React.HTMLAttributes<HTMLDivElement>;

export const MenuList = ({ className, children }: MenuListProps) => (
  <ReachMenuList
    className={classNames(
      "px-0 py-2 mt-1 border-none bg-white rounded",
      className
    )}
  >
    <div className="w-full h-2 border border-solid border-gray-200 border-b-0 rounded rounded-b-none" />
    {children}
    <div className="w-full h-2 border border-solid border-gray-200 border-t-0 rounded rounded-t-none" />
  </ReachMenuList>
);
