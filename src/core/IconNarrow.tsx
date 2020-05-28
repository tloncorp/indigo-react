import * as React from "react";
import styled from "styled-components";
import {
  space,
  layout,
  position,
  LayoutProps,
  SpaceProps,
  PositionProps
} from "styled-system";

const NullIcon = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M13 3H3V13H13V3ZM12 4.70711L4.70711 12H6.29289L12 6.29289V4.70711ZM12 7.70711L7.70711 12H9.29289L12 9.29289V7.70711ZM12 10.7071L10.7071 12H12V10.7071ZM4 11.2929L11.2929 4H9.70711L4 9.70711V11.2929ZM4 8.29289L8.29289 4H6.70711L4 6.70711V8.29289ZM4 5.29289L5.29289 4H4V5.29289Z"
  />
);

const ChevronEast = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M2.20711 12.3471L1.5 11.64L5.14645 7.99357L1.5 4.34712L2.20711 3.64001L6.56066 7.99357L2.20711 12.3471Z"
  />
);

const Blank = () => <path />;

type IconList = {
  [key: string]: () => JSX.Element;
};

const iconList: IconList = {
  NullIcon,
  ChevronEast,
  Blank
};

type InnerProps = PositionProps &
  LayoutProps &
  SpaceProps & {
    fill: string;
  };

type Props = InnerProps & {
  icon: string;
  narrow?: boolean;
};

const Svg = styled.svg<InnerProps>`
  * {
    fill: ${p => p.theme.colors[p.fill]};
  }
  ${layout};
  ${space};
  ${position};
`;

const IconNarrow = ({ icon, fill = "black", ...rest }: Props) => {
  const IconComponent = iconList[icon];
  return (
    // @ts-ignore
    <Svg {...rest} fill={fill} viewBox={"0 0 8 16"}>
      <IconComponent />
    </Svg>
  );
};

IconNarrow.defaultProps = {
  icon: "NullIcon",
  fill: "black",
  height: 4,
  width: 2
};

export default IconNarrow;
