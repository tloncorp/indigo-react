import styled from "styled-components";
import { structureStyle, StructureProps } from "../systemHelpers";

export type CenterProps = StructureProps;

export const Center = styled.div<React.PropsWithChildren<StructureProps>>(
  {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ...structureStyle
);

Center.displayName = "Center";
