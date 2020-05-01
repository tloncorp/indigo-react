import React from 'react';
import styled from 'styled-components';
import {space, SpaceProps} from 'styled-system';

type Props = SpaceProps & {
  className?: string;
  children: JSX.Element | JSX.Element[];
};

const classnames = (...args: string[]) => {
  return args.join(' ');
};

const getClassName = (el: JSX.Element) => {
  return (el.props && el.props.className) || '';
};

export const StyledChildren = ({className, children}: Props) => {
  const styledChildren = React.Children.map(children, child => {
    return React.cloneElement(child, {
      className: classnames(getClassName(child), className || ''),
    });
  });
  return <>{styledChildren}</>;
};

const Space = styled(StyledChildren)(space);

export default Space;
export {Props};
