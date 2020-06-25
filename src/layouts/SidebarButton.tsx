import styled from "styled-components";
import { DisclosureButton as _DisclosureButton, DisclosureButtonProps } from "@reach/disclosure";
import { space, SpaceProps, typography, TypographyProps } from "styled-system";

type Props = DisclosureButtonProps & SpaceProps &
  TypographyProps & {
    wide?: boolean;
    narrow?: boolean;
    border?: boolean;
    caution?: boolean;
    primary?: boolean;
  };

const SidebarButton = styled(_DisclosureButton)<Props>`
    box-style: border-box;
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

    font-family: "Inter";


    padding: ${p => {
      return `${p.theme.space[2]}px ${p.theme.space[0]}px`;
    }};

    &:before {
        width: 16px;
        height: 16px;
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

    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.black};

    ${space}
    ${typography}
`;

SidebarButton.defaultProps = {
  border: false,
  fontSize: 0,
};

export default SidebarButton;
