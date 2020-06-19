import * as React from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

import Box from '../core/Box'


type Props = SpaceProps & {
  className?: string;
  children: JSX.Element | JSX.Element[];
  vertical?: boolean,
  collapse?: boolean,
};

const classnames = (...args: string[]) => {
  return args.join(" ");
};

const getClassName = (el: JSX.Element) => {
  return (el.props && el.props.className) || "";
};

export const StyledChildren = ({ className, children, vertical, ...props }: Props) => {
  const styledChildren = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      className: classnames(getClassName(child), className || "")
    });
  });
  return <Box width={p.collapse ? "auto" : "100%"} display='flex' flexDirection={vertical ? 'column' : 'row'} {...props}>{styledChildren}</Box>;
};

const Layout = styled(StyledChildren)(space);

export default Layout;
export { Props };
