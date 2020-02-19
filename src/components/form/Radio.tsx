import React from 'react';
import styled from 'styled-components';
import { useField } from 'formik';
import InputLabel from './InputLabel';
import InputCaption from './InputCaption';

type Props = {
  caption?: string;
  placeholder?: string;
  label: string;
  name: string;
  id?: string;
  disabled?: boolean;
  type?: string;
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
  margin-top: ${p => p.theme.space[2]}px;
  display: block;
  position: relative;
  padding-left: ${p => p.theme.space[6]}px;
  cursor: ${p => {
    if (p.disabled) return 'not-allowed';
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
  height: ${p => p.theme.sizes[4]}px;
  width: ${p => p.theme.sizes[4]}px;
  border-radius: 50%;

  border-width: 1px;
  border-style: solid;
  border-color: ${p => {
    if (p.disabled) {
      if (p.theme.dark) return p.theme.colors.grayDarkest;
      return p.theme.colors.grayLight;
    }
    if (p.theme.dark) return p => p.theme.colors.grayDark;
    return p.theme.colors.grayLight;
  }};

  background-color: ${p => {
    if (p.disabled) {
      if (p.theme.dark) return p.theme.colors.grayDark;
      return p.theme.colors.grayLightest;
    }
    if (p.theme.dark) return p => p.theme.colors.black;
    return p.theme.colors.white;
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
    border-color: ${p => {
      if (p.theme.dark) return p => p.theme.colors.white;
      return p.theme.colors.black;
    }};
  }

  &:after {
    top: 4px;
    left: 4px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${p => {
      if (p.checked) {
        if (p.theme.dark) return p.theme.colors.white;
        return p.theme.colors.black;
      }
      if (p.theme.dark) return p.theme.colors.black;
      return p.theme.colors.white;
    }};
  }
`;

const Radio = ({ label, caption, ...props }: Props) => {
  const [field] = useField({ ...props, value: props.id, type: 'radio' });
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
