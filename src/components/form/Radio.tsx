import React from 'react';

import styled from 'styled-components';
import { useField } from 'formik';
import InputLabel from './InputLabel';
import InputCaption from './InputCaption';

import theme from '../../theme';

type Props = {
  caption?: string;
  placeholder?: string;
  label: string;
  name: string;
  id?: string;
  disabled?: boolean;
  type: string;
};

type StyledProps = {
  checked?: boolean;
};

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const Container = styled.label`
  margin-top: ${theme.space[2]}px;
  display: block;
  position: relative;
  padding-left: ${theme.space[6]}px;
  cursor: pointer;
  pointer-events: all;
  user-select: none;
  font-size: 12px;
`;

const RadioButton = styled.span<StyledProps>`
  position: absolute;
  top: 0px;
  left: 0px;
  height: ${theme.sizes[4]}px;
  width: ${theme.sizes[4]}px;
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  border-color: ${theme.colors.gray[4]};

  ${Container}:hover & {
    border-color: ${theme.colors.gray[1]};
  }

  background-color: ${props => {
    if (props.checked) return theme.colors.white;
    return theme.colors.white;
  }};

  &:after {
    content: '';
    position: absolute;
    display: none;
  }

  ${StyledInput}:checked ~ &:after {
    display: block;
  }

  &:after {
    top: 4px;
    left: 4px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${props => {
      if (props.checked) return theme.colors.black;
      return theme.colors.white;
    }};
  }
`;

const Radio = ({ label, caption, ...props }: Props) => {
  const [field, meta] = useField({ ...props, value: props.id, type: 'radio' });
  console.log(field, meta);
  return (
    <>
      <Container htmlFor={props.id || props.name}>
        <InputLabel>{label}</InputLabel>
        {caption ? <InputCaption>{caption}</InputCaption> : null}
        <StyledInput {...field} {...props} value={props.id} type="radio" />
        <RadioButton checked={field.checked} />
      </Container>
    </>
  );
};

export default Radio;
