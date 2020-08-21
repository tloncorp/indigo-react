import { Form as FormikForm } from "formik";
import styled from "styled-components";
// import { compose } from "styled-system";
import { structureStyle, StructureProps } from "../systemHelpers";

export type ManagedFormProps = StructureProps;

export const ManagedForm = styled(FormikForm)<
  React.PropsWithChildren<ManagedFormProps>
>({}, ...structureStyle);

ManagedForm.displayName = "ManagedForm";
