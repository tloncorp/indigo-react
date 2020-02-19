import React from 'react';
import { useField } from 'formik';
import styled from 'styled-components';

import InputLabel from './InputLabel';
import InputCaption from './InputCaption';
import ErrorMessage from './ErrorMessage';
import xt from '../../extendedTheme';

type Props = {
  caption?: string;
  placeholder?: string;
  label?: string;
  name: string;
  id?: string;
  disabled?: boolean;
  type: string;
};

type StyledProps = {
  hasError?: boolean;
  hasSuccess?: boolean;
};

const StyledInput = styled.input<StyledProps>`
  outline: none;

  color: ${p => {
    if (p.hasError) return p.theme.colors.red;
    if (p.theme.dark) return p.theme.colors.white;
    return p.theme.colors.black;
  }};
  border-width: 1px;
  border-style: solid;
  border-color: ${p => {
    if (p.hasError) return p.theme.colors.red;
    if (p.theme.dark) return p.theme.colors.grayDark;
    return p.theme.colors.grayLight;
  }};
  border-radius: ${xt.borderRadiusMinor}px;

  background-color: ${p => {
    if (p.theme.dark) return p.theme.colors.black;
    return p.theme.colors.white;
  }};

  padding-left: ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[1]}px;

  height: ${p => p.theme.sizes[7]}px;
  width: 100%;

  font-size: ${p => p.theme.fontSizes[0]}px;
  line-height: ${p => p.theme.lineHeights.short};

  &:focus {
    border-color: ${p => {
      if (p.hasError) return p.theme.colors.red;
      if (p.theme.dark) return p.theme.colors.white;
      return p.theme.colors.black;
    }};
  }

  &:disabled {
    color: ${p => {
      if (p.theme.dark) return p.theme.colors.gray;
      return p.theme.colors.grayMid;
    }};
    border-color: ${p => {
      if (p.theme.dark) return p.theme.colors.grayDark;
      return p.theme.colors.grayLight;
    }};
    background-color: ${p => {
      if (p.theme.dark) return p.theme.colors.grayDarkest;
      return p.theme.colors.grayLightest;
    }};
    cursor: not-allowed;
  }
`;

const Input = ({ label, caption, ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <InputLabel htmlFor={props.id || props.name}>{label}</InputLabel>
      {caption ? <InputCaption>{caption}</InputCaption> : null}
      <StyledInput
        hasError={meta.touched && meta.error !== undefined}
        {...field}
        {...props}
      />
      <ErrorMessage>
        {meta.touched && meta.error ? meta.error : null}
      </ErrorMessage>
    </>
  );
};

export default Input;
