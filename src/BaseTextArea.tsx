import styled from "styled-components";
import { compose } from "styled-system";
import { allSystemStyle, AllSystemProps } from "./systemHelpers";

export type BaseTextAreaProps = AllSystemProps;

const styleProps = compose(...allSystemStyle);

export const BaseTextArea = styled.textarea<
  React.PropsWithChildren<BaseTextAreaProps>
>(styleProps);

BaseTextArea.displayName = "BaseTextArea";
