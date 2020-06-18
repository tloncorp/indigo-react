import styled from "styled-components";
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  compose
} from "styled-system";

type Props = LayoutProps & ColorProps & SpaceProps & TypographyProps;

const ErrorMessage = styled.p<Props>`
  ${compose(color, layout, space, typography)}
`;

ErrorMessage.defaultProps = {
  color: "caution",
  fontSize: 0,
  lineHeight: "short",
  marginTop: 1,
  minHeight: 4
};

export default ErrorMessage;
