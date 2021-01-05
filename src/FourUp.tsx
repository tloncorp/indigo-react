import * as React from "react";
import { ResponsiveValue, ThemeValue, RequiredTheme } from "styled-system";
import { AllSystemProps } from "./system/unions";
import { Col } from "./Col";
import { Box } from "./Box";

export type FourUpProps = AllSystemProps &
  React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNodeArray;
    gx: ResponsiveValue<ThemeValue<"space", RequiredTheme>>;
    gy: ResponsiveValue<ThemeValue<"space", RequiredTheme>>;
    gap: ResponsiveValue<ThemeValue<"space", RequiredTheme>>;
  };

const cells = [
  {
    gridColumn: ["1 / 2", "1 / 2", "1 / 2"],
    gridRow: ["1 / 3", "1 / 2", "1 / 2"],
  },
  {
    gridColumn: ["1 / 2", "2 / 3", "2 / 3"],
    gridRow: ["2 / 3", "1 / 2", "1 / 2"],
  },
  {
    gridColumn: ["1 / 2", "1 / 2", "3 / 4"],
    gridRow: ["3 / 5", "2 / 3", "1 / 2"],
  },
  {
    gridColumn: ["1 / 2", "2 / 3", "4 / 5"],
    gridRow: ["4 / 5", "2 / 3", "1 / 2"],
  },
];

export const FourUp = ({
  children,
  gap = 0,
  gx,
  gy,
  ...props
}: FourUpProps) => {
  const fourChildren = children.slice(0, 4) as React.ReactNodeArray;

  return (
    // @ts-ignore
    <Box
      display="grid"
      gridColumnGap={gx || gap}
      gridRowGap={gy || gap}
      gridTemplateColumns={["1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
      gridTemplateRows={["repeat(4, 1fr)", "repeat(2, 1fr)", "1fr"]}
      {...props}
    >
      {fourChildren.map((child, index) => (
        <Col {...cells[index]}>{child}</Col>
      ))}
    </Box>
  );
};

FourUp.displayName = "FourUp";
