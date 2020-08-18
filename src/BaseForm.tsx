import styled from "styled-components";
import { compose } from "styled-system";
import { allSystemStyle, AllSystemProps } from "./systemHelpers";

export type BaseFormProps = AllSystemProps;

const styleProps = compose(...allSystemStyle);

export const BaseForm = styled.textarea<React.PropsWithChildren<BaseFormProps>>(
  styleProps
);

BaseForm.displayName = "BaseForm";
