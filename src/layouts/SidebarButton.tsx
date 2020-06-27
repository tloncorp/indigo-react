import styled from "styled-components";
import { DisclosureButton as _DisclosureButton, DisclosureButtonProps } from "@reach/disclosure";
import { compose, space, SpaceProps, display, DisplayProps } from "styled-system";
import { Theme } from "@tlon/indigo-light";

type Props = DisclosureButtonProps & SpaceProps &
  DisplayProps & {
    sm?: boolean;
    wide?: boolean;
    narrow?: boolean;
    border?: boolean;
    error?: boolean;
    primary?: boolean;
  };

type BoxInput = Props & { theme: Theme };

const defaultBox = (p: BoxInput) => `
  border-color: ${p.theme.colors.white};
  background-color: ${p.theme.colors.white};
  color: ${p.theme.colors.black};
  * {
    fill: ${p.theme.colors.lightGray};
  }

  &:hover {
    border-color: ${p.theme.colors.white};
    background-color: ${p.theme.colors.washedGray};
    * {
      fill: ${p.theme.colors.black};
    }
  }
`;

const cautionBox = (p: BoxInput) => `
  border-color: ${p.theme.colors.white};
  background-color: ${p.theme.colors.white};
  color: ${p.theme.colors.red};
  * {
    fill: ${p.theme.colors.red};
  }

  &:hover {
    border-color: ${p.theme.colors.white};
    background-color:${p.theme.colors.washedRed};
    * {
      fill: ${p.theme.colors.red};
    }
  }

  &:active {
    border-color: ${p.theme.colors.red};
    background-color: ${p.theme.colors.red};
    color: ${p.theme.colors.white};
    * {
      fill: ${p.theme.colors.white};
    }
  }
`;

const disabledBox = (p: BoxInput) => `
  &:disabled {
    cursor: not-allowed;
    border-color: ${p.theme.colors.lightGray};
    background-color: ${p.theme.colors.washedGray};
    color: ${p.theme.colors.lightGray};
  }
`;

// Bordered

const defaultBoxBordered = (p: BoxInput) => `
  border-color: ${p.theme.colors.lightGray};
  background-color: ${p.theme.colors.white};
  color: ${p.theme.colors.black};
  * {
    fill: ${p.theme.colors.lightGray};
  }

  &:hover {
    * {
      fill: ${p.theme.colors.black};
    }
  }

  &:active {
    border-color: ${p.theme.colors.washedGray};
    background-color: ${p.theme.colors.washedGray};
    color: ${p.theme.colors.black};
    * {
      fill: ${p.theme.colors.black};
    }Â
  }
`;

const primaryBoxBordered = (p: BoxInput) => `
  border-color: rgba(0,142,255,0.5);
  background-color: ${p.theme.colors.white};
  color: ${p.theme.colors.blue};
  * {
    fill: ${p.theme.colors.lightBlue};
  }

  &:hover {
    * {
      fill: ${p.theme.colors.blue};
    }
  }

  &:active {
    border-color: ${p.theme.colors.blue};
    background-color: ${p.theme.colors.blue};
    color: ${p.theme.colors.white};
    * {
      fill: ${p.theme.colors.white};
    }
  }
`;

const primaryBox = (p: BoxInput) => `
border-color: ${p.theme.colors.white};
background-color: ${p.theme.colors.white};
color: ${p.theme.colors.blue};
* {
  fill: ${p.theme.colors.lightGray};
}

&:hover {
  border-color: ${p.theme.colors.white};
  background-color: ${p.theme.colors.washedBlue};
  * {
    fill: ${p.theme.colors.black};
  }
}

&:active {
  border-color: ${p.theme.colors.blue};
  background-color: ${p.theme.colors.blue};
  color: ${p.theme.colors.white};
  * {
    fill: ${p.theme.colors.white};
  }
}
`;

const cautionBoxBordered = (p: BoxInput) => `
  border-color: rgba(255,65,54,0.5);
  background-color: ${p.theme.colors.white};
  color: ${p.theme.colors.red};
  * {
    fill: rgba(255,65,54,0.5);
  }

  &:hover {
    background-color: ${p.theme.colors.white};
    * {
      fill: ${p.theme.colors.red};
    }
  }
  
  &:active {
    background-color: ${p.theme.colors.red};
    color: ${p.theme.colors.white};
    * {
      fill: ${p.theme.colors.white};
    }
  }
`;

const disabledBoxBordered = (p: BoxInput) => `
  &:disabled {
    cursor: not-allowed;
    border-color: ${p.theme.colors.lightGray};
    background-color: ${p.theme.colors.washedGray};
    color: ${p.theme.colors.lightGray};
  }
`;

const SidebarButton = styled(_DisclosureButton)<Props>`
  box-style: border-box;
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
  font-weight: 500;
  font-size: ${p => p.theme.fontSizes[0]}px;

  min-width: ${p => (p.narrow ? 0 : p.theme.sizes[10])}px;

  width: ${p => (p.wide ? "100%" : "32px")};

  height:32px;

  border-radius: ${p => p.theme.radii[2]}px;
  border-width: 1px;
  border-style: solid;

  border-color: ${p => (p.border ? p.theme.lightGray : p.theme.white)};
  background-color: ${p => p.theme.white};
  color: ${p => p.theme.black};

  ${p => {
    if (p.border) {
      if (p.disabled) return disabledBoxBordered(p);
      if (p.error) return cautionBoxBordered(p);
      if (p.primary) return primaryBoxBordered(p);
      return defaultBoxBordered(p);
    } else {
      if (p.disabled) return disabledBox(p);
      if (p.error) return cautionBox(p);
      if (p.primary) return primaryBox(p);
      return defaultBox(p);
    }
  }}
  ${compose(space, display)};

`;

SidebarButton.defaultProps = {
  sm: false,
  wide: false,
  narrow: true,
  border: false,
  error: false,
  primary: false
};

export default SidebarButton;
