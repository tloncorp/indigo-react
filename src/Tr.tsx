import styled from "styled-components";
import { compose } from "styled-system";
import { allSystemStyle, AllSystemProps } from "./system/unions";

export type TrProps = AllSystemProps & React.HTMLAttributes<HTMLTableRowElement>;

export const Tr = styled.tr<React.PropsWithChildren<TrProps>>(
  compose(...allSystemStyle)
);

Tr.displayName = "Tr";
