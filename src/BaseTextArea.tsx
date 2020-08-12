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
  space,
  SpaceProps,
  typography,
  TypographyProps,
  position,
  PositionProps,
  compose,
} from "styled-system";

export type BaseTextAreaProps = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps &
  PositionProps &
  TypographyProps;

const styleProps = compose(
  space,
  layout,
  color,
  border,
  flexbox,
  typography,
  position
);

const BaseTextArea = styled.textarea<
  React.PropsWithChildren<BaseTextAreaProps>
>(styleProps);

BaseTextArea.displayName = "BaseTextArea";
export default BaseTextArea;
