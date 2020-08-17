import { Form as FormikForm } from "formik";
import styled from "styled-components";
import { compose } from "styled-system";
import { structureStyle, StructureProps } from "./systemHelpers";

type FormProps = StructureProps;

export const Form = styled(FormikForm)<React.PropsWithChildren<FormProps>>`
  ${compose(...structureStyle)}
`;

Form.displayName = "Form";
