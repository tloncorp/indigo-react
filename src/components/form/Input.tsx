import React from 'react';
import { useField } from 'formik';
import styled from 'styled-components';

import InputLabel from './InputLabel';
import InputCaption from './InputCaption';
import ErrorMessage from './ErrorMessage';
import Box from '../../primitives/Box';
import xt from '../../extendedTheme';

type Props = {
  caption?: string;
  placeholder?: string;
  label?: string;
  id: string;
  disabled?: boolean;
  type: string;
};

type StyledProps = {
  hasError?: boolean;
  hasSuccess?: boolean;
};

const StyledInput = styled.input<StyledProps>`
  outline: none;
  box-sizing: border-box;

  color: ${p => {
    if (p.hasError) return p.theme.colors.red2;
    return p.theme.colors.black;
  }};

  background-color: ${p => {
    return p.theme.colors.white;
  }};

  border-width: 1px;
  border-style: solid;
  border-color: ${p => {
    if (p.hasError) return p.theme.colors.red2;
    return p.theme.colors.gray3;
  }};
  border-radius: ${xt.borderRadiusMinor}px;

  padding-left: ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[1]}px;

  height: ${p => p.theme.sizes[7]}px;
  width: 100%;

  font-size: ${p => p.theme.fontSizes[2]}px;
  line-height: ${p => p.theme.lineHeights.short};

  &:focus {
    border-color: ${p => {
      if (p.hasError) return p.theme.colors.red2;
      return p.theme.colors.black;
    }};
    box-shadow: ${p => {
      if (p.hasError) return `0px 0px 0px 4px  ${p.theme.colors.red0}`;
      return `0px 0px 0px 4px ${p.theme.colors.gray1}`;
    }};
  }

  &:disabled {
    color: ${p => {
      return p.theme.colors.gray5;
    }};
    border-color: ${p => {
      return p.theme.colors.gray2;
    }};
    background-color: ${p => {
      return p.theme.colors.gray1;
    }};
    cursor: not-allowed;
  }
`;

const Input = ({
  label,
  caption,
  type,
  disabled,
  id,
  placeholder,
  ...props
}: Props) => {
  const [field, meta] = useField(id);
  return (
    <Box {...props}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      {caption ? <InputCaption>{caption}</InputCaption> : null}
      <StyledInput
        hasError={meta.touched && meta.error !== undefined}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        {...field}
      />
      <ErrorMessage>
        {meta.touched && meta.error ? meta.error : null}
      </ErrorMessage>
    </Box>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
