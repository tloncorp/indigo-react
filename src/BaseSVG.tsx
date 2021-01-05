import styled from "styled-components";
import { compose } from "styled-system";
import { allSystemStyle, AllSystemProps } from "./system/unions";

export type BaseSVGProps = AllSystemProps;

export const BaseSVG = styled.svg<React.PropsWithChildren<BaseSVGProps>>(
  compose(...allSystemStyle)
);

BaseSVG.displayName = "BaseSVG";
