import React from 'react';
import styled from 'styled-components';

import { space, SpaceProps, compose } from 'styled-system';

type IconInnerSVGProps = {
  fill: string;
};

type IconList = {
  [key: string]: (props: IconInnerSVGProps) => JSX.Element;
};

type Props = SpaceProps & {
  icon: string;
  fill: string;
};

const Svg = styled.svg`
  width: ${p => p.theme.sizes[4]}px;
  height: ${p => p.theme.sizes[4]}px;
  ${compose(space)};
`;

const NullIcon = (props: IconInnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M13 3H3V13H13V3ZM12 4.70711L4.70711 12H6.29289L12 6.29289V4.70711ZM12 7.70711L7.70711 12H9.29289L12 9.29289V7.70711ZM12 10.7071L10.7071 12H12V10.7071ZM4 11.2929L11.2929 4H9.70711L4 9.70711V11.2929ZM4 8.29289L8.29289 4H6.70711L4 6.70711V8.29289ZM4 5.29289L5.29289 4H4V5.29289Z"
    fill={props.fill}
  />
);

const ChevronSouth = (props: IconInnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M3.64648 6.35359L4.35359 5.64648L8.00004 9.29293L11.6465 5.64648L12.3536 6.35359L8.00004 10.7071L3.64648 6.35359Z"
    fill={props.fill}
  />
);

const ChevronWest = (props: IconInnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M9.64641 3.64648L10.3535 4.35359L6.70707 8.00004L10.3535 11.6465L9.64641 12.3536L5.29286 8.00004L9.64641 3.64648Z"
    fill={props.fill}
  />
);

const ChevronEast = (props: IconInnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M6.35359 12.3535L5.64648 11.6464L9.29293 7.99996L5.64648 4.35352L6.35359 3.64641L10.7071 7.99996L6.35359 12.3535Z"
    fill={props.fill}
  />
);

const iconList: IconList = {
  NullIcon,
  ChevronSouth,
  ChevronWest,
  ChevronEast,
};

const defaultProps = {
  icon: 'NullIcon',
  fill: '#000000',
};

const Icon = (props: Props) => {
  const { icon, fill, ...rest } = props;

  const IconComponent = iconList[props.icon];

  return (
    <Svg {...rest}>
      <IconComponent fill={props.fill} />
    </Svg>
  );
};

Icon.defaultProps = defaultProps;

export default Icon;
