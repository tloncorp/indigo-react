import { ColorProps, LayoutProps, SpaceProps } from 'styled-system';

type Xt = {
  borderRadiusMinor: number;
  borderRadiusMid: number;
  borderRadiusMajor: number;
};

// interface ButtonProps extends
//   LayoutProps
//   SpaceProps {
//     sm?: boolean
//     md?: boolean
//     lg?: boolean
//   }

type ButtonProps = LayoutProps &
  SpaceProps & {
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
  };

// interface IconButtonProps extends
// ButtonProps {
//   children?: any
//   iconLeft?: string
//   iconRight?: string
// }

// type IconProps = LayoutProps & ColorProps &
//   SpaceProps & {
//     icon?: string;
//   };

// interface IconSvgProps extends
//   ColorProps,
//   SpaceProps
//   {}

export {
  Xt,
  ButtonProps,
  // IconButtonProps,
  // IconProps,
  // IconSvgProps,
  // IconInnerSVGProps,
  // IconList,
};
