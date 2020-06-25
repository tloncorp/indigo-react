import * as React from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { Theme } from "@tlon/indigo-light";
import { Icon } from "../core/index";

type Props = SpaceProps & {
  sm?: boolean;
  size?: number | string;
  lg?: boolean;
  icon?: string;
  border?: boolean;
  caution?: boolean;
  primary?: boolean;
  disabled?: boolean;
  onClick?: Function;
};

type BoxInput = Props & { theme: Theme };

const defaultBox = (p: BoxInput) => `
  border-color: ${p.border ? p.theme.colors.black : p.theme.colors.white};
  background-color: ${p.border ? p.theme.colors.white : p.theme.colors.white};
  color: ${p.theme.colors.black};

  &:hover {
    border-color: ${p.border ? p.theme.colors.gray : p.theme.colors.white};
    background-color: ${p.border ? p.theme.colors.white : p.theme.colors.gray};
    color: ${p.theme.colors.black};
  }

  &:focus {
    border-color: ${p.theme.colors.blue};
    background-color: ${p.theme.colors.white};
    color: ${p.theme.colors.black};
  }

  &:active {
    border-color: ${p.theme.colors.blue};
    background-color: ${p.theme.colors.blue};
    color: ${p.theme.colors.white};
    * {
      fill: ${p.theme.colors.white};
    }
  }

  &:disabled {
    cursor: not-allowed;
    border-color: ${p.border ? p.theme.colors.gray : p.theme.colors.white};
    background-color: ${p.theme.colors.gray};
    color: ${p.theme.colors.gray};
    * {
      fill: ${p.theme.colors.gray};
    }
  }
`;

const cautionBox = (p: BoxInput) => `
  &:hover {
    border-color: ${p.border ? p.theme.colors.gray : p.theme.colors.white};
    background-color: ${p.border ? p.theme.colors.gray : p.theme.colors.gray};
    color: ${p.theme.colors.black};
  }

  &:focus {
    border-color: ${p.theme.colors.blue};
    background-color: ${p.theme.colors.white};
    color: ${p.theme.colors.black};
  }

  &:active {
    border-color: ${p.theme.colors.blue};
    background-color: ${p.theme.colors.blue};
    color: ${p.theme.colors.white};
  }

  &:disabled {
    cursor: not-allowed;
    border-color: ${p.border ? p.theme.colors.gray : p.theme.colors.white};
    background-color: ${p.theme.colors.gray};
    color: ${p.theme.colors.gray};
  }
`;

const Button = styled.button<Props>`
  border: 0;
  outline: none;
  cursor: pointer;
  user-select: none;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  line-height: 1.33334;

  padding: ${p => {
    if (p.sm) return `${p.theme.space[1]}px`;
    return `${p.theme.space[2]}px`;
  }};

  border-radius: ${p => p.theme.radii[2]}px;

  ${p => (p.caution ? cautionBox(p) : defaultBox(p))}

  ${space}
`;

const IconButton = ({ icon, size, ...props }: Props) => (
  // @ts-ignore
  <Button {...props}>
    <Icon icon={icon} size={size} />
  </Button>
);

export default IconButton;
