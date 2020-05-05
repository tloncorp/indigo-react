import * as React from 'react';
import styled from 'styled-components';
import {Text} from '@tlon/indigo-core';

type OuterProps = {
  selected?: boolean;
};

type Props = OuterProps & {
  title: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const Outer = styled.button<OuterProps>`
  border: 0;
  outline: none;
  cursor: pointer;
  user-select: none;

  background-color: ${p => p.theme.colors.white};

  padding: 8px 16px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${p => (p.selected ? p.theme.colors.black : p.theme.colors.gray2)};
  line-height: 1.2;
`;

const Tab = ({title, selected, onClick}: Props) => (
  <Outer selected={selected} onClick={onClick}>
    <Text gray={!selected}>{title}</Text>
  </Outer>
);

export default Tab;
