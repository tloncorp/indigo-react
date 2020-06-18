import styled from "styled-components";
import { MenuButton as _MenuButton, MenuButtonProps } from "@reach/menu-button";
import { space, SpaceProps, typography, TypographyProps } from "styled-system";
import { Theme } from "@tlon/indigo-light";

type Props = MenuButtonProps & SpaceProps &
  TypographyProps & {
    sm: boolean;
    wide: boolean;
    narrow: boolean;
    border: boolean;
    caution: boolean;
    primary: boolean;
  };

type BoxInput = Props & { theme: Theme };

const defaultBox = (p: BoxInput) => `
    border-color: ${p.theme.colors.white};
    background-color: ${p.theme.colors.white};
    color: ${p.theme.colors.black};
    * {
      fill: ${p.theme.colors.gray};
    }

    &:hover {
      border-color: ${p.theme.colors.gray};
      background-color: ${p.theme.colors.gray};
      * {
        fill: ${p.theme.colors.black};
      }
    }

    &:focus {
      border-color: ${p.theme.colors.highlight};
      background-color: ${p.theme.colors.white};
      * {
        fill: ${p.theme.colors.black};
      }
    }

    &:active {
      border-color: ${p.theme.colors.highlight};
      background-color: ${p.theme.colors.highlight};
      color: ${p.theme.colors.white};
      * {
        fill: ${p.theme.colors.white};
      }
    }
  `;

const cautionBox = (p: BoxInput) => `
    border-color: ${p.theme.colors.white};
    background-color: ${p.theme.colors.white};
    color: ${p.theme.colors.error};
    * {
      fill: ${p.theme.colors.error};
    }

    &:hover {
      border-color: ${p.theme.colors.white};
      background-color: ${p.theme.colors.white};
      * {
        fill: ${p.theme.colors.error};
      }
    }

    &:focus {
      border-color: ${p.theme.colors.error};
      * {
        fill: ${p.theme.colors.error};
      }
    }

    &:active {
      border-color: ${p.theme.colors.error};
      background-color: ${p.theme.colors.error};
      color: ${p.theme.colors.white};
      * {
        fill: ${p.theme.colors.white};
      }
    }
  `;

const disabledBox = (p: BoxInput) => `
    &:disabled {
      cursor: not-allowed;
      border-color: ${p.theme.colors.gray};
      background-color: ${p.theme.colors.gray};
      color: ${p.theme.colors.gray};
    }
  `;

// Bordered

const defaultBoxBordered = (p: BoxInput) => `
    border-color: ${p.theme.colors.gray};
    background-color: ${p.theme.colors.white};
    color: ${p.theme.colors.black};
    * {
      fill: ${p.theme.colors.gray};
    }

    &:hover {
      background-color: ${p.theme.colors.gray};
      * {
        fill: ${p.theme.colors.black};
      }
    }

    &:focus {
      border-color: ${p.theme.colors.highlight};
      background-color: ${p.theme.colors.white};
      * {
        fill: ${p.theme.colors.black};
      }
    }

    &:active {
      border-color: ${p.theme.colors.highlight};
      background-color: ${p.theme.colors.highlight};
      color: ${p.theme.colors.white};
      * {
        fill: ${p.theme.colors.white};
      }
    }
  `;

const cautionBoxBordered = (p: BoxInput) => `
    border-color: ${p.theme.colors.error};
    background-color: ${p.theme.colors.white};
    color: ${p.theme.colors.error};
    * {
      fill: ${p.theme.colors.error};
    }

    &:hover {
      background-color: ${p.theme.colors.white};
      * {
        fill: ${p.theme.colors.error};
      }
    }

    &:focus {
      * {
        fill: ${p.theme.colors.error};
      }
    }

    &:active {
      background-color: ${p.theme.colors.error};
      color: ${p.theme.colors.white};
      * {
        fill: ${p.theme.colors.white};
      }
    }
  `;

const disabledBoxBordered = (p: BoxInput) => `
    &:disabled {
      cursor: not-allowed;
      border-color: ${p.theme.colors.gray};
      background-color: ${p.theme.colors.gray};
      color: ${p.theme.colors.gray};
    }
  `;

const MenuButton = styled(_MenuButton)<Props>`
    box-style: border
    border: 0;
    outline: none;
    cursor: pointer;
    user-select: none;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    vertical-align: middle;
    line-height: 1.2;

    min-width: ${p => (p.narrow ? 0 : p.theme.sizes[10])}px;

    width: ${p => (p.wide ? "100%" : "auto")};

    padding: ${p => {
      if (p.sm) return `${p.theme.space[1]}px ${p.theme.space[2]}px`;
      return `${p.theme.space[2]}px ${p.theme.space[3]}px`;
    }};

    border-radius: ${p => p.theme.radii[1]}px;
    border-width: 1px;
    border-style: solid;

    border-color: ${p => (p.border ? p.theme.gray : p.theme.white)};
    background-color: ${p => p.theme.white};
    color: ${p => p.theme.black};

    ${p => {
      if (p.border) {
        if (p.disabled) return disabledBoxBordered(p);
        if (p.caution) return cautionBoxBordered(p);
        return defaultBoxBordered(p);
      } else {
        if (p.disabled) return disabledBox(p);
        if (p.caution) return cautionBox(p);
        return defaultBox(p);
      }
    }}

    ${space}
    ${typography}
  `;

MenuButton.defaultProps = {
  fontSize: 0,
  sm: false,
  wide: false,
  narrow: false,
  border: false,
  caution: false,
  primary: false
};

export default MenuButton;
