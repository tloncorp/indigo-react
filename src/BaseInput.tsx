import styled from "styled-components";
import { compose } from "styled-system";
import { allSystemStyle, AllSystemProps } from "./system/unions";

export type BaseInputProps = AllSystemProps;

export const BaseInput = styled.input<React.PropsWithChildren<BaseInputProps>>(
  compose(...allSystemStyle)
);

BaseInput.displayName = "BaseInput";
