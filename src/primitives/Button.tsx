import styled from "styled-components";

import {
  border, BorderProps,
  color, ColorProps,
  flexbox, FlexboxProps,
  layout, LayoutProps,
  space, SpaceProps,
  typography, TypographyProps,
  compose
} from "styled-system";

interface Props extends BorderProps, ColorProps, FlexboxProps, LayoutProps, SpaceProps, TypographyProps {}

const Button = styled.button<Props>`
  ${compose(space, layout, color, border, flexbox, typography)};
  border: 0;
  outline: none;
  cursor: pointer;
  &:disabled {
    background-color: #b1b2b3;
    cursor: not-allowed;
  }
`;

Button.defaultProps = {
  // color: "white",
  // backgroundColor: "black",
  // fontSize: 2,
  // lineHeight: "regular",
  // py: 3,
  // px: 4,
  // fontFamily: "inherit",
  // display: "flex",
  // justifyContent: "space-between",
  // alignItems: "center",
  // width: "50%"
};

export default Button;
