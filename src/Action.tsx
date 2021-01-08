import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { commonStyle, CommonStyleProps } from "./system/unions";
import { action, container } from "./system/tokens";

export type ActionProps = CommonStyleProps & {
  primary?: boolean;
  disabled?: boolean;
  destructive?: boolean;
};

const stateColor = (
  primary: boolean,
  destructive: boolean,
  disabled: boolean
) => {
  // if (destructive && primary && disabled)
  //   return button.state.destructivePrimaryDisabled;
  if (primary && disabled) return action.state.primaryDisabled;
  if (destructive && disabled) return action.state.destructiveDisabled;
  // if (destructive && primary) return button.state.destructivePrimary;
  if (destructive) return action.state.destructive;
  if (primary) return action.state.primary;
  if (disabled) return action.state.defaultDisabled;
  return action.state.default;
};

const style = ({
  primary = false,
  destructive = false,
  disabled = false,
}: ActionProps) =>
  css({
    width: "fit-content",
    border: "none",
    overflow: "hidden",
    height: 4,
    borderRadius: 2,
    px: 2,
    ...action.text,
    ...container.center,
    ...stateColor(primary, destructive, disabled),
  } as SystemStyleObject);

export const Action = styled.button<React.PropsWithChildren<ActionProps>>(
  style,
  ...commonStyle
);

Action.displayName = "Action";
