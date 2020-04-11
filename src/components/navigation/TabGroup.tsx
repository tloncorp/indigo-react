import * as React from 'react';
import styled from 'styled-components';
import Row from '../layout/Row';

import {LayoutProps, PositionProps, SpaceProps} from 'styled-system';

type Props = LayoutProps &
  PositionProps &
  SpaceProps & {
    children: JSX.Element | JSX.Element[];
  };

const Cap = styled.div`
  width: 16px;
  min-width: 16px;
  height: 32px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${p => p.theme.colors.gray2};
`;

const End = styled.div`
  width: 100%;
  height: 32px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${p => p.theme.colors.gray2};
`;

const TabGroup = ({children, ...props}: Props) => (
  <Row width="100%" {...props}>
    <Cap />
    {children}
    <End />
  </Row>
);

export default TabGroup;
