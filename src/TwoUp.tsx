import * as React from "react";
import { ResponsiveValue, ThemeValue, RequiredTheme } from "styled-system";
import { AllSystemProps } from "./system/unions";
import { Col } from "./Col";
import { Box } from "./Box";

export type TwoUpProps = AllSystemProps &
  React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNodeArray;
    gapX: ResponsiveValue<ThemeValue<"space", RequiredTheme>>;
    gapY: ResponsiveValue<ThemeValue<"space", RequiredTheme>>;
    gap: ResponsiveValue<ThemeValue<"space", RequiredTheme>>;
  };

const cells = [
  {
    gridColumn: ["1 / 2", "1 / 2"],
    gridRow: ["1 / 2", "1 / 2"],
  },
  {
    gridColumn: ["1 / 2", "2 / 3"],
    gridRow: ["2 / 3", "1 / 2"],
  },
];

export const TwoUp = ({
  children,
  gap = 0,
  gapX,
  gapY,
  ...props
}: TwoUpProps) => {
  const twoChildren = children.slice(0, 2) as React.ReactNodeArray;

  return (
    // @ts-ignore
    <Box
      display="grid"
      gridColumnGap={gapX || gap}
      gridRowGap={gapY || gap}
      gridTemplateColumns={["1fr", "repeat(2, 1fr)"]}
      gridTemplateRows={["repeat(2, 1fr)", "1fr"]}
      {...props}
    >
      {twoChildren.map((child, index) => (
        <Col {...cells[index]}>{child}</Col>
      ))}
    </Box>
  );
};

TwoUp.displayName = "TwoUp";
