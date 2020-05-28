import * as React from "react";
import styled from "styled-components";
import { color, layout, space, typography, compose } from "styled-system";
import { Link as RouterLink } from "react-router-dom";
import {
  Row,
  Col,
  Text,
  Icon
} from "@tlon/indigo-react";

const BreadcrumbLink = styled(RouterLink)`
  color: ${p => {
    if (typeof p.color !== 'undefined') return p.color;
    if (p.gray) return p.theme.colors.gray5;
    return p.theme.colors.black;
  }};

  font-weight: ${p =>
    p.bold ? p.theme.fontWeights.bold : p.theme.fontWeights.regular};

  font-family: ${p => (p.mono ? p.theme.fonts.mono : p.theme.fonts.sans)};
  text-decoration: none;

  display: inline;

  &:hover {
    color: ${p => p.theme.colors.black};
  }

  border-radius: ${p => p.theme.radii[1]}px;
  border-width: 1px;
  border-style: solid;

  padding: ${p => {
    return `${p.theme.space[1]}px ${p.theme.space[2]}px`;
    // return `${p.theme.space[2]}px ${p.theme.space[3]}px`;
  }};


  ${p => defaultBox(p)}

  ${compose(color, layout, space, typography)};
`;

BreadcrumbLink.defaultProps = {
  lineHeight: "short",
  fontSize: 2
};

const defaultBox = (p) => `
  border-color: ${p.theme.colors.white};
  background-color: ${p.theme.colors.white};

  &:hover {
    border-color: ${p.theme.colors.gray0};
    background-color: ${p.theme.colors.gray0};
  }

  &:focus {
    border-color: ${p.theme.colors.primary};
    background-color: ${p.theme.colors.white};
  }
`;

const BreadcrumbRow = styled(Row)`
  border-radius: ${p => p.theme.radii[2]}px;
  border-width: 1px;
  border-style: solid;

  border-color: ${p => p.theme.colors.white};


  padding: ${p => p.theme.space[1]}px;

`

const Breadcrumbs = ({pathname}) => {

  const pathTokenArray = pathname.slice(1).split("/");

  return (
    <BreadcrumbRow alignItems="center">
      <BreadcrumbLink fontSize='4' gray to="/">
        Home
      </BreadcrumbLink>
      {pathTokenArray.map((token, index) => {
        if (pathname === "/") return null;
        return (
          <div key={`BreadcrumbLink:${index}`}>
            <Icon key={`BreadcrumbIcon:${index}`} fill="gray" size='5' icon="ChevronEast" />
            <BreadcrumbLink key={`BreadcrumbLink:${index}`}fontSize='4' gray={pathTokenArray.length-1 === index ? false : true} to={`/${token}`}>
              { token.charAt(0).toUpperCase() + token.slice(1) }
            </BreadcrumbLink>
          </div>
        )
      })}
    </BreadcrumbRow>
  );
};

export default Breadcrumbs;
