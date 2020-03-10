import * as React from 'react';
import {SpaceProps} from 'styled-system';

import Button from './Button';
import Indefinite from '../status/Indefinite';

type Props = SpaceProps & {
  sm?: boolean;
  wide?: boolean;
  caution?: boolean;
  primary?: boolean;
  onClick?: Function;
  loading?: boolean;
  children?: JSX.Element | JSX.Element[] | string;
};

const AsyncButton = ({loading, children, ...props}: Props) => (
  // @ts-ignore
  <Button {...props}>{loading ? <Indefinite loading={loading} /> : children}</Button>
);

export default AsyncButton;
