import * as React from "react";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { toggleSwitch } from "./systemTokens";
import { StructuralProps, structureStyle } from "./systemHelpers";

export type ToggleSwitchProps = StructuralProps & {
  selected?: boolean;
  hasError?: boolean;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const stateStyle = (
  selected: boolean,
  hasError: boolean,
  disabled: boolean
) => {
  if (selected && disabled) return toggleSwitch.states.selectedDisabled;
  if (hasError && selected) return toggleSwitch.states.hasErrorSelected;
  if (hasError) return toggleSwitch.states.hasError;
  if (disabled) return toggleSwitch.states.disabled;
  if (selected) return toggleSwitch.states.selected;
  return toggleSwitch.states.default;
};

const style = ({
  selected = false,
  hasError = false,
  disabled = false,
}: ToggleSwitchProps) =>
  css({
    position: "relative",
    width: "24px",
    flexShrink: "0",
    height: "16px",
    border: "1px solid",
    borderRadius: "999px",
    cursor: "pointer",
    ...stateStyle(selected, hasError, disabled),
  } as SystemStyleObject);

export const ToggleSwitch = styled.div<
  React.PropsWithChildren<ToggleSwitchProps>
>(style, ...structureStyle);

ToggleSwitch.displayName = "ToggleSwitch";
