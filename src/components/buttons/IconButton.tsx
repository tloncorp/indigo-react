import React from 'react';
import Button from './Button';
import { ButtonProps } from '../../types';
import { Icon } from '../icon/Icon';

type Props = ButtonProps & {
  children?: React.ReactNode;
  iconLeft?: string;
  iconRight?: string;
  icon?: string;
  color?: string;
};

const IconButton = (props: Props) => {
  return (
    <Button {...props}>
      {props.iconLeft ? (
        <Icon marginRight="2" fill={props.color} icon={props.iconLeft} />
      ) : (
        ''
      )}
      {props.children}
      {props.iconRight ? (
        <Icon marginLeft="2" fill={props.color} icon={props.iconRight} />
      ) : (
        ''
      )}
      {props.icon ? <Icon fill={props.color} icon={props.icon} /> : ''}
    </Button>
  );
};

export default IconButton;
