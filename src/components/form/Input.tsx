import React from 'react';
import { useField } from 'formik';
import styled from 'styled-components';

import InputLabel from './InputLabel';
import InputCaption from './InputCaption';
import ErrorMessage from './ErrorMessage';
import theme from '../../theme';
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

  border-color: ${props => {
    if (props.hasError) return theme.colors.red[2];
    return theme.colors.gray[4];
  }};
  color: ${props => {
    if (props.hasError) return theme.colors.red[2];
    return theme.colors.black;
  }};
  border-width: 1px;
  border-style: solid;
  border-radius: ${xt.borderRadiusMinor}px;

  padding-left: ${theme.space[2]}px;
  margin-top: ${theme.space[1]}px;

  height: ${theme.sizes[7]}px;
  width: 100%;

  font-size: ${theme.fontSizes[0]}px;
  line-height: ${theme.lineHeights.regular};

  &:focus {
    border-color: ${props => {
      if (props.hasError) return theme.colors.red[2];
      return theme.colors.black;
    }};
  }

  &:disabled {
    color: ${theme.colors.gray[3]};
    border: ${theme.borders[1] + theme.colors.gray[4]};
    background-color: ${theme.colors.gray[5]};
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
