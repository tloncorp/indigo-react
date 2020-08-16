import { Form as FormikForm } from "formik";
import styled from "styled-components";
import { compose } from "styled-system";
import { structureStyle, StructuralProps } from "./systemHelpers";

type FormProps = StructuralProps;

export const Form = styled(FormikForm)<React.PropsWithChildren<FormProps>>`
  ${compose(...structureStyle)}
`;

Form.displayName = "Form";
