import styled from "styled-components";
import { compose } from "styled-system";
import { allSystemStyle, AllSystemProps } from "./system/unions";

export type LiProps = AllSystemProps;

export const Li = styled.li<React.PropsWithChildren<LiProps>>(
  compose(...allSystemStyle)
);

Li.displayName = "Li";
