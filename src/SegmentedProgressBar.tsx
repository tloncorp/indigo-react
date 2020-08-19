import * as React from "react";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { CommonStyleProps, commonStyle } from "./systemHelpers";
import { sequence } from "./util";

export type ContinuousProgressBarProps = CommonStyleProps & {
  percentage?: number;
};

// const style = ({ percentage }: ContinuousProgressBarProps) =>
//   css({
//     display: "flex",
//     width: '100%',
//     height: 1,
//     position: 'relative',
//     backgroundColor: 'lightGray',
//     borderRadius: 3
//   } as SystemStyleObject);

// export const ContinuousProgressBar = styled.div<React.PropsWithChildren<ContinuousProgressBarProps>>(
//   style,
//   ...commonStyle
// );

type SegmentProps = {
  active: boolean;
};

const segmentStyle = ({ active }: SegmentProps) =>
  css({
    flexGrow: 1,
    backgroundColor: active ? "blue" : "transparent",
    content: "' '",
    height: "100%",
    borderRight: "1px solid",
    borderRightColor: "white",
  } as SystemStyleObject);

const Segment = styled.div<React.PropsWithChildren<SegmentProps>>(segmentStyle);

const backgroundStyle = () =>
  css({
    display: "flex",
    width: "100%",
    height: 1,
    backgroundColor: "lightGray",
    borderRadius: 3,
    overflow: "hidden",
    "& :last-child": {
      borderRightColor: "transparent",
    },
  } as SystemStyleObject);

const Background = styled.div<React.PropsWithChildren<{}>>(
  backgroundStyle,
  ...commonStyle
);

export type SegmentedProgressBarProps = {
  segments?: number;
  current?: number;
};

export const SegmentedProgressBar = ({
  segments = 1,
  current = 0,
  ...props
}: SegmentedProgressBarProps) => {
  return (
    <Background {...props}>
      {sequence(segments).map((_, index: number) => (
        <Segment active={index < current} />
      ))}
    </Background>
  );
};

Background.displayName = "Background";
Segment.displayName = "Segment";
SegmentedProgressBar.displayName = "SegmentedProgressBar";
