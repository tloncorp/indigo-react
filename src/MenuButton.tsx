import * as React from "react";
import {
  MenuButton as ReachMenuButton,
  MenuButtonProps as ReachMenuButtonProps,
} from "@reach/menu-button";
import { Button, ButtonProps } from "./Button";
import classNames from "classnames";

export type MenuButtonProps = ButtonProps & ReachMenuButtonProps;

export const MenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>(
  ({ className, children, ...props }, forwardRef) => (
    <Button
      ref={forwardRef}
      as={ReachMenuButton}
      className={classNames("justify-between w-full px-2", className)}
      {...props}
    >
      {children}
    </Button>
  )
);

MenuButton.displayName = "MenuButton";
