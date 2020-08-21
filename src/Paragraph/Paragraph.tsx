import * as React from "react";
import styled from "styled-components";
import { commonStyle, CommonStyleProps } from "../systemHelpers";

export type ParagraphProps = CommonStyleProps;

export const Paragraph = styled.p<React.PropsWithChildren<ParagraphProps>>(
  {},
  ...commonStyle
);

Paragraph.displayName = "Paragraph";
