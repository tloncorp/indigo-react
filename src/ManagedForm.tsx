import { Form as FormikForm } from "formik";
import styled from "styled-components";
import { compose } from "styled-system";
import { structureStyle, StructureProps } from "./systemHelpers";

type ManagedFormProps = StructureProps;

export const ManagedForm = styled(FormikForm)<
  React.PropsWithChildren<ManagedFormProps>
>`
  ${compose(...structureStyle)}
`;

ManagedForm.displayName = "ManagedForm";
