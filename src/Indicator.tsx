import * as React from "react";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";

import { indicator } from "./system/tokens";
import { commonStyle, CommonStyleProps } from "./system/unions";

export type IndicatorProps = CommonStyleProps & {
  disabled?: boolean;
  selected?: boolean;
  hasError?: boolean;
};

const stateStyle = (
  disabled: boolean,
  hasError: boolean,
  selected: boolean
) => {
  if (selected && disabled) return indicator.state.onDisabled;
  if (selected && hasError) return indicator.state.onError;
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
    cursor: "pointer",
    "& > *": {
      transform: "translate(-1px,-1px)",
    },
    ...stateStyle(disabled, hasError, selected),
  } as SystemStyleObject);

export const Indicator = styled.div<React.PropsWithChildren<IndicatorProps>>(
  style,
  ...commonStyle
);

Indicator.displayName = "Indicator";
