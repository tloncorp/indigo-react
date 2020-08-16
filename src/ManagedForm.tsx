import { Formik } from "formik";
import styled from "styled-components";
import { compose } from "styled-system";
import { CommonStyleProps, commonStyle } from "./systemHelpers";

export type ManagedFormProps = CommonStyleProps;

export const ManagedForm = styled(Formik)<
  React.PropsWithChildren<ManagedFormProps>
>`
  ${compose(...commonStyle)}
`;

ManagedForm.displayName = "ManagedForm";
