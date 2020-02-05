import React from 'react'
// import styled from "styled-components";
import theme from "../../theme"

import Svg from "../../primitives/Svg"
import {  IconInnerSVGProps, IconList } from '../../types'

import {
  LayoutProps,
  SpaceProps,
} from "styled-system";

const NullIcon = (props:IconInnerSVGProps) => (
  <path fillRule="evenodd" clipRule="evenodd" d="M13 3H3V13H13V3ZM12 4.70711L4.70711 12H6.29289L12 6.29289V4.70711ZM12 7.70711L7.70711 12H9.29289L12 9.29289V7.70711ZM12 10.7071L10.7071 12H12V10.7071ZM4 11.2929L11.2929 4H9.70711L4 9.70711V11.2929ZM4 8.29289L8.29289 4H6.70711L4 6.70711V8.29289ZM4 5.29289L5.29289 4H4V5.29289Z" fill={props.color}/>
)

const ChevronSouth = (props:IconInnerSVGProps) => (
  <path fillRule="evenodd" clipRule="evenodd" d="M3.64648 6.35359L4.35359 5.64648L8.00004 9.29293L11.6465 5.64648L12.3536 6.35359L8.00004 10.7071L3.64648 6.35359Z" fill={props.color}/>
)

const iconList:IconList = {
  NullIcon,
  ChevronSouth,
}

// interface Props {} & typeof defaultProps;
const defaultProps = {
  icon: "NullIcon",
  color: '#000000',
};

type Props = LayoutProps & SpaceProps &   {
  icon: string
  color: string
}

const Icon = (props:Props) => {
  const IconComponent = iconList[props.icon]
  return (
    <Svg size={theme.sizes[4] + 'px'}>
      <IconComponent color={props.color} />
    </Svg>
  )
}

Icon.defaultProps = defaultProps;


export {
  Icon
}
