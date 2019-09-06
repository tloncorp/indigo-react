import styled from "styled-components";

import {
  flexbox,
  layout,
  space,
  color,
  border,
  compose,
  typography
} from "styled-system";

const Button = styled("button")`
  ${compose(
    space,
    layout,
    color,
    border,
    flexbox,
    typography
  )};

  border: 0;
  outline: none;
  cursor: pointer;

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }

    ${props => {
      if (props.error) {
        return `background: #EE892B;`;
      } else if (props.loading) {
        return `background: linear-gradient(to right, #000 40%, #B1B2B3 40%);`;
      }
    }}

  background: ${props => props.error && "orange"};
`;

Button.defaultProps = {
  color: "white",
  backgroundColor: "black",
  borderRadius: 0,
  fontSize: "16px",
  lineHeight: "24px",
  py: "12px",
  px: "16px",
  fontFamily: "inherit",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "12"
};

export default Button;
