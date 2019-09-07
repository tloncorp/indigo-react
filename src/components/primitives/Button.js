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

const Button = styled.button`
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
    background-color: #b1b2b3;
    cursor: not-allowed;
  }

  ${props => {
    if (props.error) {
      return `background: #EE892B;`;
    } else if (props.isLoading) {
      return `background: linear-gradient(to right, #000 40%, #B1B2B3 40%);`;
    }
  }}
`;

Button.defaultProps = {
  color: "white",
  backgroundColor: "black",
  fontSize: 2,
  lineHeight: "regular",
  py: 3,
  px: 4,
  fontFamily: "inherit",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "50%"
};

export default Button;
