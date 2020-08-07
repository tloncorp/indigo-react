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
  compose
} from "styled-system";

import { 
  button,
} from '../tokens'

type Props = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps &
  TypographyProps & {};

const BaseButton = styled.button<Props>`
  ${button.reset}
  ${compose(space, layout, color, border, flexbox, typography)};
`;

export default BaseButton;
