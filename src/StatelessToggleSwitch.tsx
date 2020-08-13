import * as React from "react";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { space, SpaceProps } from "styled-system";
import { Box } from "./Box";
import { Col } from "./Col";
import { toggleSwitch } from "./tokens";

export type StatelessToggleSwitchProps = {
  selected: boolean;
  hasError: boolean;
  disabled: boolean;
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
}: StatelessToggleSwitchProps) =>
  css({
    position: "relative",
    width: "24px",
    height: "16px",
    border: "1px solid",
    borderRadius: "999px",
    ...stateStyle(selected, hasError, disabled),
  } as SystemStyleObject);

export const Switch = styled.div<
  React.PropsWithChildren<SpaceProps & StatelessToggleSwitchProps>
>(style, space);

export const StatelessToggleSwitch = ({
  selected,
  disabled,
  hasError,
  onChange,
  children,
  ...props
}: StatelessToggleSwitchProps) => {
  return (
    <Box display="flex" onClick={onChange} {...props} cursor="pointer">
      <Switch
        selected={selected}
        disabled={disabled}
        hasError={hasError}
        mr="2"
      />
      <Col>{children}</Col>
    </Box>
  );
};

StatelessToggleSwitch.displayName = "StatelessToggleSwitch";
