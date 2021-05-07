import styled from "styled-components";
import { compose } from "styled-system";
import { listStyle, ListProps } from "./system/unions";

export type UlProps = ListProps;

export const Ul = styled.ul<React.PropsWithChildren<UlProps>>(
  compose(...listStyle)
);

Ul.defaultProps = {
  listStyle: 'disc'
}

Ul.displayName = "Ul";
