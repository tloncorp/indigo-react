import * as React from "react";
import { Box } from "./Box";
import { CommonStyleProps } from "./systemHelpers";

export type AspectRatioProps = CommonStyleProps &
  React.HTMLAttributes<HTMLDivElement> & {
    aspectRatio: number;
  };

export const AspectRatio = ({
  aspectRatio = 1,
  children,
}: AspectRatioProps) => {
  const percent = `${(1 / aspectRatio) * 100}%`;

  return (
    <Box pt={percent}>
      <Box position="absolute" top={0} bottom={0} left={0} right={0}>
        {children}
      </Box>
    </Box>
  );
};

AspectRatio.displayName = "AspectRatio";
