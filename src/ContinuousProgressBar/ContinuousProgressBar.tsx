import * as React from "react";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { CommonStyleProps, commonStyle } from "../systemHelpers";

export type ContinuousProgressBarProps = CommonStyleProps & {
  percentage?: number;
};

const style = ({ percentage = 0 }: ContinuousProgressBarProps) =>
  css({
    display: "flex",
    width: "100%",
    height: 1,
    position: "relative",
    backgroundColor: "lightGray",
    borderRadius: 3,
    overflow: "hidden",
    "&::before": {
      width: percentage + "%",
      backgroundColor: "blue",
      position: "absolute",
      top: 0,
      left: 0,
      content: "' '",
      height: "100%",
      borderRight: "1px solid",
      borderRightColor: percentage < 1 ? "transparent" : "white",
      transition: "width 200ms",
    },
  } as SystemStyleObject);

export const ContinuousProgressBar = styled.div<
  React.PropsWithChildren<ContinuousProgressBarProps>
>(style, ...commonStyle);

ContinuousProgressBar.displayName = "ContinuousProgressBar";
