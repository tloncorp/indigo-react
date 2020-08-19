import { Formik } from "formik";
import styled from "styled-components";
import { compose } from "styled-system";
import { CommonStyleProps, commonStyle } from "../systemHelpers";

export type FormControllerProps = CommonStyleProps;

export const FormController = styled(Formik)<
  React.PropsWithChildren<FormControllerProps>
>`
  ${compose(...commonStyle)}
`;

FormController.displayName = "FormController";
