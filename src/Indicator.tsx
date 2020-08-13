import * as React from "react";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from "styled-system";

import { indicator } from "./tokens";

export type IndicatorProps = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps & {
    disabled: boolean;
    selected: boolean;
    hasError: boolean;
  };

const stateStyle = (
  disabled: boolean,
  hasError: boolean,
  selected: boolean
) => {
  if (selected && disabled && hasError) return indicator.state.offDisabledError;
  if (selected && disabled) return indicator.state.onDisabled;
  if (selected && hasError) return indicator.state.onError;
  if (disabled && hasError) return indicator.state.onDisabledError;
  if (selected) return indicator.state.on;
  if (disabled) return indicator.state.offDisabled;
  if (hasError) return indicator.state.offError;
  return indicator.state.off;
};

const style = ({
  disabled = false,
  hasError = false,
  selected = false,
}: IndicatorProps) =>
  css({
    width: 3,
    border: "1px solid",
    height: 3,
    borderRadius: 2,
    ...stateStyle(disabled, hasError, selected),
  } as SystemStyleObject);

const styleProps = [border, color, flexbox, layout, position, space];

export const Indicator = styled.div<React.PropsWithChildren<IndicatorProps>>(
  style,
  ...styleProps
);

Indicator.displayName = "Indicator";
