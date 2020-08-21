import * as React from "react";
import styled from "styled-components";
import { commonStyle, CommonStyleProps } from "../systemHelpers";

export type InlineProps = CommonStyleProps;

export const Inline = styled.div<React.PropsWithChildren<InlineProps>>(
  {
    display: "inline-block",
    position: "relative",
  },
  ...commonStyle
);

Inline.displayName = "Inline";
