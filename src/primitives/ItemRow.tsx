import * as React from 'react';
import Box from './Box';

import {
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  GridProps,
} from 'styled-system';

// GridTemplateColumns, GTC for short
type GTC = string | number | (string | number | null)[];

type Props = BackgroundProps &
  BorderProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  GridProps & {
    columns: GTC;
    gap?: number;
    children?: JSX.Element | JSX.Element[];
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

const ItemRow = ({ columns, gap = 0, ...props }: Props) => {
  const gridTemplateColumns = countToColumns(columns);
  return (
    <Box
      display="grid"
      gridGap={gap}
      gridTemplateColumns={gridTemplateColumns}
      {...props}
    />
  );
};

export default ItemRow;
