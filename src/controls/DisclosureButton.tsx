import styled from 'styled-components'
import { DisclosureButton } from '@reach/disclosure';
import {space, SpaceProps, typography, TypographyProps} from 'styled-system';

type Props = SpaceProps &
  TypographyProps & {
    sm?: boolean;
    wide?: boolean;
    narrow?: boolean;
    border?: boolean;
    caution?: boolean;
    primary?: boolean;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    children?: JSX.Element | JSX.Element[] | string | (string | JSX.Element)[];
  };


const Button = styled(DisclosureButton)<Props>`
    box-style: border
    border: 0;
    outline: none;
    cursor: pointer;
    user-select: none;

    display: flex;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    line-height: 1.2;

    width: 100%;

    padding: ${p => {
        if (p.sm) return `${p.theme.space[1]}px ${p.theme.space[2]}px`;
        return `${p.theme.space[2]}px ${p.theme.space[3]}px`;
    }};

    &:before {
        width: 16px;
        height: 16px;
        padding-left: 8px;
        content: ' ';
        background-size: contain;
        background-repeat: no-repeat;
    }

    &[data-state='collapsed']::before {
        background-image: url("data:image/svg+xml;charset=UTF-8,<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M12 8L6 11.4641L6 4.5359L12 8Z' fill='black'/>
        </svg>        
        ");
    }

    &[data-state='open']::before {
        background-image:url("data:image/svg+xml;charset=UTF-8,<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M8 12L4.5359 6L11.4641 6L8 12Z' fill='black'/>
        </svg>
        ");
    }

    border-width: 0px;

    background-color: ${p => p.theme.white};
    color: ${p => p.theme.black};

    ${space}
    ${typography}
`

Button.defaultProps = {
    border: false,
}

export default Button