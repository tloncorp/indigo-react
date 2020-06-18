import styled from "styled-components";
import { space, SpaceProps, typography, TypographyProps } from "styled-system";
import { Theme } from "@tlon/indigo-light";

type Props = SpaceProps &
  TypographyProps & {
    sm?: boolean;
    wide?: boolean;
    narrow?: boolean;
    border?: boolean;
    error?: boolean;
    primary?: boolean;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    children?: JSX.Element | JSX.Element[] | string | (string | JSX.Element)[];
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
    border-color: ${p.theme.colors.lightGray};
    background-color: ${p.theme.colors.lightGray};
    * {
      fill: ${p.theme.colors.black};
    }
  }

  &:active {
    border-color: ${p.theme.colors.gray};
    background-color: ${p.theme.colors.gray};
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
    background-color: rgba(255,65,54,0.1);
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
    background-color: ${p.theme.colors.lightGray};
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
    * {
      fill: ${p.theme.colors.black};
    }
  }

  &:active {
    border-color: ${p.theme.colors.gray};
    background-color: ${p.theme.colors.gray};
    color: ${p.theme.colors.white};
    * {
      fill: ${p.theme.colors.white};
    }
  }
`;

const primaryBoxBordered = (p: BoxInput) => `
  border-color: rgba(0,142,255,0.5);
  background-color: ${p.theme.colors.white};
  color: ${p.theme.colors.highlight};
  * {
    fill: rgba(0,142,255,0.5);
  }

  &:hover {
    * {
      fill: ${p.theme.colors.highlight};
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

const primaryBox = (p: BoxInput) => `
border-color: ${p.theme.colors.white};
background-color: ${p.theme.colors.white};
color: ${p.theme.colors.highlight};
* {
  fill: ${p.theme.colors.gray};
}

&:hover {
  border-color: ${p.theme.colors.lightGray};
  background-color: rgba(0,142,255,0.1);
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
  border-color: rgba(255,65,54,0.5);
  background-color: ${p.theme.colors.white};
  color: ${p.theme.colors.error};
  * {
    fill: rgba(255,65,54,0.5);
  }

  &:hover {
    background-color: ${p.theme.colors.white};
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
    background-color: ${p.theme.colors.lightGray};
    color: ${p.theme.colors.gray};
  }
`;

const Button = styled.button<Props>`
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
  font-weight: 500;

  min-width: ${p => (p.narrow ? 0 : p.theme.sizes[10])}px;

  width: ${p => (p.wide ? "100%" : "auto")};

  height:32px;

  padding: ${p => {
    // if (p.sm) return `${p.theme.space[1]}px ${p.theme.space[2]}px`;
    // return `${p.theme.space[0]}px ${p.theme.space[4]}px`;
    return `${p.theme.space[0]}px ${p.theme.space[2]}px`;
  }};

  border-radius: ${p => p.theme.radii[2]}px;
  border-width: 1px;
  border-style: solid;

  border-color: ${p => (p.border ? p.theme.gray : p.theme.white)};
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

  ${space}
  ${typography}
`;

Button.defaultProps = {
  fontSize: 0,
  sm: false,
  wide: false,
  narrow: false,
  border: false,
  error: false,
  primary: false
};

export default Button;
