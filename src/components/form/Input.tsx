import styled from "styled-components";
import theme from "../../theme";
import xt from "../../extendedTheme"

// import {
//   Field,
//   // FieldProps,
// } from 'formik';
// export const FieldSuccess = styled(Span)`
//   color: ${theme.colors.green[1]};
// `;
//
// export const FieldError = styled(FieldSuccess)`
//   color: ${theme.colors.red[1]};
// `;

// interface Props extends FieldProps {
//   hasError: boolean,
//   hasSuccess: boolean,
// }

type Props = {
  hasError?: boolean
  hasSuccess?: boolean
  touched?: boolean
}

const Input = styled.input<Props>`
  outline: none;

  border-color: ${props => {
    console.log('Input', props)
    if (props.hasError) return theme.colors.red[2]
    // if (props.hasSuccess) return theme.colors.green[2]
    return theme.colors.gray[4]
  }};
  color: ${props => {
    if (props.hasError) return theme.colors.red[2]
    // if (props.hasSuccess) return theme.colors.green[2]
    return theme.colors.black
  }};
  border-width: 1px;
  border-style: solid;
  border-radius: ${xt.borderRadiusMinor}px;

  margin-top: ${theme.space[1]}px;
  padding-left: ${theme.space[2]}px;

  height: ${theme.sizes[7]}px;
  width: 100%;

  font-size: ${theme.fontSizes[0]}px;
  line-height: ${theme.lineHeights.regular};

  &:focus {
    border-color: ${props => {
      if (props.hasError) return theme.colors.red[2]
      // if (props.hasSuccess) return theme.colors.green[2]
      return theme.colors.black
    }};
  }
`;


// ${props => {
//   if (props.hasError) {
//     return `border-color: ${theme.colors.red[1]}`;
//   } else if (props.hasSuccess) {
//     return `border-color: ${theme.colors.green[1]}`;
//   } else {
//     return `border-color: ${theme.colors.gray[3]}`;
//   }
// }}
// background-color: ${props =>
//   props.disabled ? theme.colors.gray[4] : theme.colors.white};
// &:focus {
//   outline: 0;
//   ${props => {
//     if (props.hasError) {
//       return `border-color: ${theme.colors.red[1]}`;
//     } else if (props.hasSuccess) {
//       return `border-color: ${theme.colors.green[1]}`;
//     } else {
//       return `border-color: ${theme.colors.black}`;
//     }
//   }}

export default Input
