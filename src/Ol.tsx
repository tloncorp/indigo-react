import styled from "styled-components";
import { compose } from "styled-system";
import { listStyle, ListProps } from "./system/unions";

export type OlProps = ListProps;

export const Ol = styled.ol<React.PropsWithChildren<OlProps>>(
  compose(...listStyle)
);

Ol.defaultProps = {
  listStyle: 'decimal'
}

Ol.displayName = "Ol";
