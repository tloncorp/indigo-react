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
  disabled?: boolean;
};

// Hide this input completely
const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const Container = styled.label<StyledProps>`
  margin-top: ${theme.space[2]}px;
  display: block;
  position: relative;
  padding-left: ${theme.space[6]}px;
  cursor: ${props => {
    if (props.disabled) return 'not-allowed';
    return 'pointer';
  }};
  user-select: none;
  font-size: 12px;
  ${StyledInput}:disabled {
    cursor: not-allowed;
  }
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
  border-color: ${props => {
    if (props.disabled) return theme.colors.gray[3];
    return theme.colors.gray[4];
  }};

  background-color: ${props => {
    if (props.checked) return theme.colors.white;
    if (props.disabled) return theme.colors.gray[5];
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

  ${StyledInput}:focus ~ & {
    border: 1px solid black;
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
      <Container disabled={props.disabled} htmlFor={props.id || props.name}>
        <InputLabel>{label}</InputLabel>
        {caption ? <InputCaption>{caption}</InputCaption> : null}
        <StyledInput {...field} {...props} value={props.id} type="radio" />
        <RadioButton disabled={props.disabled} checked={field.checked} />
      </Container>
    </>
  );
};

export default Radio;
