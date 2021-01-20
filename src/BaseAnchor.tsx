import styled from "styled-components";
import { compose } from "styled-system";
import { allSystemStyle, AllSystemProps } from "./system/unions";

export type BaseAnchorProps = AllSystemProps;

export const BaseAnchor = styled.a<React.PropsWithChildren<BaseAnchorProps>>(
  compose(...allSystemStyle)
);

BaseAnchor.displayName = "BaseAnchor";
