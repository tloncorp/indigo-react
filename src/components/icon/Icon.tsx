import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

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
  width: ${theme.sizes[4]}px;
  height: ${theme.sizes[4]}px;
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

const iconList: IconList = {
  NullIcon,
  ChevronSouth,
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

export { Icon };
