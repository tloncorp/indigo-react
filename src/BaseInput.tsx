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

export type BaseInputProps = BorderProps &
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

export const BaseInput = styled.input<React.PropsWithChildren<BaseInputProps>>(
  styleProps
);

BaseInput.displayName = "BaseInput";
