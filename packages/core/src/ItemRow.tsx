import * as React from 'react';
import Box from '../core/Box';

import {
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  GridProps,
} from 'styled-system';

// GridTemplateColumns, GTC for short
type GTC = string | number | (string | number | null)[];

type Props = BorderProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  GridProps & {
    columns: GTC;
    width?: GTC;
    gap?: number;
    children?: JSX.Element | JSX.Element[];
  };

const px = (n: string | number | null) => (typeof n === 'number' ? n + 'px' : n);

const widthToColumns = (p: GTC): GTC => {
  if (Array.isArray(p)) {
    return p.map(v => {
      if (v === null) return null;
      return `repeat(auto-fit, minmax(${px(v)}, 1fr))`;
    });
  }
  return `repeat(auto-fit, minmax(${px(p)}, 1fr))`;
};

const countToColumns = (p: GTC): GTC => {
  if (Array.isArray(p)) {
    return p.map(v => {
      if (v === null) return null;
      return `repeat(${v}, 1fr)`;
    });
  }
  return `repeat(${p}, 1fr)`;
};

const ItemRow = (props: Props) => {
  const gtc =
    typeof props.width === 'undefined'
      ? countToColumns(props.columns)
      : widthToColumns(props.width);

  return <Box display="grid" gridGap={props.gap} gridTemplateColumns={gtc} {...props} />;
};

export default ItemRow;
export {Props};
