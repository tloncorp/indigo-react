import styled from "styled-components";
import { structureStyle, StructureProps } from "./system/unions";

export type CenterProps = StructureProps;

export const Center = styled.div<React.PropsWithChildren<StructureProps>>(
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ...structureStyle
);

Center.displayName = "Center";
