import { Form as FormikForm } from "formik";
import styled from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  compose,
} from "styled-system";

type FormProps = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps;

export const Form = styled(FormikForm)<React.PropsWithChildren<FormProps>>`
  ${compose(border, color, flexbox, layout, position, space)}
`;

Form.displayName = "Form";
