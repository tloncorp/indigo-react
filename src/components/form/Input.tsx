import React from 'react';
import {useField} from 'formik';
import styled from 'styled-components';
import {LayoutProps, SpaceProps} from 'styled-system';
import InputLabel from './InputLabel';
import InputCaption from './InputCaption';
import ErrorMessage from './ErrorMessage';
import Box from '../../primitives/Box';
import {Theme} from '../../theme/index';

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

type ColorOptions = 'default' | 'disabled' | 'caution' | 'primary';
type innerProps = StyledProps & {theme: Theme};

const styledBox = (k: ColorOptions, p: innerProps) => {
  const {borderColor, backgroundColor, textColor, outlineColor} = p.theme;
  return `
  border-color: ${borderColor[k].default};
  background-color: ${backgroundColor[k].default};
  color: ${textColor[k].default};
  box-shadow: ${`0px 0px 0px 4px ${outlineColor[k].default}`};
  * {
    fill:  ${textColor[k].active};
  }

  &:hover {
    border-color: ${borderColor[k].hover};
    color: ${textColor[k].hover};
    box-shadow: ${`0px 0px 0px 4px ${outlineColor[k].hover}`};
    * {
      fill:  ${textColor[k].active};
    }
  }

  &:focus {
    border-color: ${borderColor[k].focus};
    color: ${textColor[k].focus};
    box-shadow: ${`0px 0px 0px 4px ${outlineColor[k].focus}`};
    * {
      fill:  ${textColor[k].active};
    }
  }

  &:active {
    border-color: ${borderColor[k].active};
    color: ${textColor[k].active};
    box-shadow: ${`0px 0px 0px 4px ${outlineColor[k].active}`};
    * {
      fill:  ${textColor[k].active};
    }
  }
  `;
};

const StyledInput = styled.input<StyledProps>`
  outline: none;
  box-sizing: border-box;

  border-width: 1px;
  border-style: solid;

  padding-left: ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[1]}px;

  height: ${p => p.theme.sizes[7]}px;
  width: 100%;

  font-size: ${p => p.theme.fontSizes[2]}px;
  line-height: ${p => p.theme.lineHeights.short};

  border-radius: ${p => p.theme.boxRadii.minor}px;

  ${p => {
    if (p.disabled) return styledBox('disabled', p);
    if (p.hasError) return styledBox('caution', p);
    return styledBox('default', p);
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
