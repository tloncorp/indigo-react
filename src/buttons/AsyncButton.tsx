import * as React from 'react';
import {SpaceProps} from 'styled-system';
import {Spinner} from '../core/index';

import Button from './Button';

type Props = SpaceProps & {
  sm?: boolean;
  wide?: boolean;
  caution?: boolean;
  primary?: boolean;
  onClick?: Function;
  loading?: boolean;
  children?: JSX.Element | JSX.Element[] | string | (string | JSX.Element)[];
};

const AsyncButton = ({loading, children, ...props}: Props) => (
  // @ts-ignore
  <Button {...props}>{loading ? <Spinner loading={loading} /> : children}</Button>
);

AsyncButton.propTypes = {
  loading: false,
};

export default AsyncButton;