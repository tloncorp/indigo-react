import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { commonStyle, CommonStyleProps } from "./system/unions";
import { action } from "./system/tokens";

export type ActionProps = CommonStyleProps & {
  disabled?: boolean;
  destructive?: boolean;
  hideDisabled?: boolean;
};

const stateColor = (
  destructive: boolean,
  disabled: boolean,
  hideDisabled: boolean
) => {
  if (hideDisabled) {
    disabled = false;
  }
  if (destructive && disabled) return action.state.destructiveDisabled;
  if (destructive) return action.state.destructive;
  if (disabled) return action.state.defaultDisabled;
  return action.state.default;
};

const style = ({
  destructive = false,
  disabled = false,
  hideDisabled = false,
}: ActionProps) =>
  css({
    width: "auto",
    border: "none",
    overflow: "hidden",
    height: 3,
    ...action.text,
    ...stateColor(destructive, disabled, hideDisabled),
  } as SystemStyleObject);

export const Action = styled.button<React.PropsWithChildren<ActionProps>>(
  style,
  ...commonStyle
);

export const asAction = (component: React.FC) =>
  styled(component)<React.PropsWithChildren<ActionProps>>(
    style,
    ...commonStyle
  );

Action.displayName = "Action";
