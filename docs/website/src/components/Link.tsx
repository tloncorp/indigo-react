import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { color, layout, space, typography, compose } from "styled-system";

const Link = styled(RouterLink)`
  color: ${p => {
    if (typeof p.color !== 'undefined') return p.color;
    if (p.gray) return p.theme.colors.gray;
    return p.theme.colors.black;
  }};

  font-weight: ${p =>
    p.bold ? p.theme.fontWeights.bold : p.theme.fontWeights.regular};

  font-family: ${p => (p.mono ? p.theme.fonts.mono : p.theme.fonts.sans)};
  text-decoration: none;

  display: inline;

  &:hover {
    * color: ${p => p.theme.colors.black};
    * fill: ${p => p.theme.colors.black};
  }

  ${compose(color, layout, space, typography)};
`;

Link.defaultProps = {
  lineHeight: "short",
  fontSize: 0
};

export default Link;
