import * as React from 'react';
import {useField} from 'formik';
import styled from 'styled-components';
import {LayoutProps, SpaceProps} from 'styled-system';
import {Theme} from '@tlon/indigo-tokens';

import InputLabel from './InputLabel';
import InputCaption from './InputCaption';
import ErrorMessage from './ErrorMessage';

import {Box} from '../core/index';

type Props = LayoutProps &
  SpaceProps & {
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

type BoxInput = StyledProps & {theme: Theme};

const defaultBox = (p: BoxInput) => `
  border-color: ${p.theme.colors.gray2};
  background-color: ${p.theme.colors.white};
  color: ${p.theme.colors.black};

  caret-color: ${p.theme.colors.blue1};

  &:hover {}

  ::selection {
    background-color: ${p.theme.colors.blue0};
  }

  &:focus {
    border-color: ${p.theme.colors.blue1};
  }
`;

const errorBox = (p: BoxInput) => `
  border-color: ${p.theme.colors.red1};
  background-color: ${p.theme.colors.red0};
  color: ${p.theme.colors.red1};

  caret-color: ${p.theme.colors.red1};

  &:hover {}

  ::selection {
    background-color: ${p.theme.colors.red0};
  }

  &:focus {
    background-color: ${p.theme.colors.white};
  }
`;

const disabledBox = (p: BoxInput) => `
  border-color: ${p.theme.colors.gray2};
  background-color: ${p.theme.colors.gray0};
  color: ${p.theme.colors.gray5};

  &:hover {}

  &:focus {}
`;

const StyledInput = styled.input<StyledProps>`
  outline: none;
  box-sizing: border-box;

  border-width: 1px;
  border-style: solid;

  margin-top: ${p => p.theme.space[1]}px;

  padding: ${p => {
    return `${p.theme.space[2]}px ${p.theme.space[3]}px`;
  }};

  width: 100%;

  font-size: ${p => p.theme.fontSizes[2]}px;
  line-height: 1.2;

  border-radius: ${p => p.theme.radii[2]}px;

  ${p => {
    if (p.disabled) return disabledBox(p);
    if (p.hasError) return errorBox(p);
    return defaultBox(p);
  }};

  &:disabled {
    cursor: not-allowed;
  }
`;

const Input = ({label, caption, type, disabled, id, placeholder, ...props}: Props) => {
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
      <ErrorMessage>{meta.touched && meta.error ? meta.error : null}</ErrorMessage>
    </Box>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
