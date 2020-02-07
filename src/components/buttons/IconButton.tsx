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
        <Icon mr="2" color={props.color} icon={props.iconLeft} />
      ) : (
        ''
      )}
      {props.children}
      {props.iconRight ? (
        <Icon ml="2" color={props.color} icon={props.iconRight} />
      ) : (
        ''
      )}
      {props.icon ? <Icon color={props.color} icon={props.icon} /> : ''}
    </Button>
  );
};

export default IconButton;
