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

export type BaseAnchorProps = BorderProps &
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

const BaseAnchor = styled.a<React.PropsWithChildren<BaseAnchorProps>>(
  styleProps
);

BaseAnchor.displayName = "BaseAnchor";
export default BaseAnchor;
