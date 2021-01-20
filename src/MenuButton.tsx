import * as React from "react";
import styled from "styled-components";
import {
  MenuButton as ReachMenuButton,
  MenuButtonProps as ReachMenuButtonProps,
} from "@reach/menu-button";

import css, { SystemStyleObject } from "@styled-system/css";
import { container, button } from "./system/tokens";
import { CommonStyleProps, commonStyle } from "./system/unions";

export type MenuButtonProps = ReachMenuButtonProps &
  CommonStyleProps & {
    primary?: boolean;
    disabled?: boolean;
    destructive?: boolean;
  };

const stateStyle = (
  primary: boolean,
  destructive: boolean,
  disabled: boolean
) => {
  if (destructive && primary && disabled)
    return button.state.destructivePrimaryDisabled;
  if (primary && disabled) return button.state.primaryDisabled;
  if (destructive && disabled) return button.state.destructiveDisabled;
  if (destructive && primary) return button.state.destructivePrimary;
  if (destructive) return button.state.destructive;
  if (primary) return button.state.primary;
  if (disabled) return button.state.defaultDisabled;
  return button.state.default;
};

const style = ({
  primary = false,
  destructive = false,
  disabled = false,
}: MenuButtonProps) =>
  css({
    width: "100%",
    justifyContent: "space-between",
    border: "1px solid",
    height: 5,
    borderRadius: 2,
    overflow: "hidden",
    px: 2,
    ...button.text,
    ...container.center,
    ...stateStyle(primary, destructive, disabled),
  } as SystemStyleObject);

export const MenuButton = styled(ReachMenuButton)<
  React.PropsWithChildren<MenuButtonProps>
>(style, ...commonStyle);

MenuButton.displayName = "MenuButton";

export default MenuButton;
