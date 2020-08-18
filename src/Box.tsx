import styled from "styled-components";
import { compose } from "styled-system";
import { allSystemStyle, AllSystemProps } from "./systemHelpers";

export type BoxProps = AllSystemProps;

export const Box = styled.div<React.PropsWithChildren<BoxProps>>(
  {
    position: "relative",
  },
  compose(...allSystemStyle)
);

Box.displayName = "Box";
