import styled from "styled-components";
import { structureStyle, StructuralProps } from "./systemHelpers";

export type CenterProps = StructuralProps;

export const Center = styled.div<React.PropsWithChildren<StructuralProps>>(
  {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ...structureStyle
);

Center.displayName = "Center";
