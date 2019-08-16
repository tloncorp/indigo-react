import styled from "styled-components";
import Span from "./Span";
import theme from "../../theme";

export const FieldSuccess = styled(Span)`
  color: ${theme.colors.green[1]};
`;

export const FieldError = styled(FieldSuccess)`
  color: ${theme.colors.red[1]};
`;

export const FieldInput = styled.input`
  color: #000;
  border: 1px solid;
  padding: ${theme.space[3]}px;
  width: 100%;
  font-size: ${theme.fontSizes[1]}px;
  line-height: ${theme.lineHeights[1]};

  ${props => {
    if (props.hasError) {
      return `border-color: ${theme.colors.red[1]}`;
    } else if (props.hasSuccess) {
      return `border-color: ${theme.colors.green[1]}`;
    } else {
      return `border-color: ${theme.colors.gray[3]}`;
    }
  }}

  background-color: ${props =>
    props.disabled ? theme.colors.gray[4] : theme.colors.white};

  &:focus {
    outline: 0;
    ${props => {
      if (props.hasError) {
        return `border-color: ${theme.colors.red[1]}`;
      } else if (props.hasSuccess) {
        return `border-color: ${theme.colors.green[1]}`;
      } else {
        return `border-color: ${theme.colors.black}`;
      }
    }}
  }


`;

// export const InlineSubmit = styled.button`
//   position: absolute;
//   top: 0;
//   right: 0;
//   font-weight: 500;
//   font-size: ${theme.fontSizes.xs};
//   border: 0;
//   color: white;
//   background: ${theme.colors.azure};

//   padding: 12px ${theme.sizes.sm};
//   border-radius: 0 4px 4px 0;
//   text-decoration: none;
//   text-align: center;
//   height: 100%;
//   cursor: pointer;
//   transition-property: background;
//   transition-duration: 0.3s;
//   transition-timing-function: ease-in-out;

//   &:focus:enabled,
//   &:hover:enabled {
//     outline: 0;
//     background: ${theme.colors.navy};
//   }
// `;
