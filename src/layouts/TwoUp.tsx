import * as React from 'react';
import {FlexboxProps, LayoutProps, PositionProps, SpaceProps} from 'styled-system';

import {Row, Col} from '../core/index';

type Props = FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps & {
    children: JSX.Element[] | (string | JSX.Element)[];
  };

type InnerProps = FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps & {
    children: JSX.Element | string;
  };

const C = ({children, ...props}: InnerProps) => (
  <Col width={['100%', '100%', '50%']} {...props}>
    {children || <div />}
  </Col>
);

const TwoUp = ({children, ...props}: Props) => (
  <Row flexDirection={['column', 'row', 'row']} flexWrap="wrap" {...props}>
    <C mb={['7', '7', '0']}>{children[0]}</C>
    <C mb={['0', '0', '0']}>{children[1]}</C>
  </Row>
);

export default TwoUp;
