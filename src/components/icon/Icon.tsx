import React from 'react';
import styled from 'styled-components';

import { space, SpaceProps, compose } from 'styled-system';

type InnerSVGProps = {
  fill: string;
};

type IconList = {
  [key: string]: (props: InnerSVGProps) => JSX.Element;
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

const NullIcon = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M13 3H3V13H13V3ZM12 4.70711L4.70711 12H6.29289L12 6.29289V4.70711ZM12 7.70711L7.70711 12H9.29289L12 9.29289V7.70711ZM12 10.7071L10.7071 12H12V10.7071ZM4 11.2929L11.2929 4H9.70711L4 9.70711V11.2929ZM4 8.29289L8.29289 4H6.70711L4 6.70711V8.29289ZM4 5.29289L5.29289 4H4V5.29289Z"
    fill={fill}
  />
);

const ChevronSouth = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M3.64648 6.35359L4.35359 5.64648L8.00004 9.29293L11.6465 5.64648L12.3536 6.35359L8.00004 10.7071L3.64648 6.35359Z"
    fill={fill}
  />
);

const ChevronWest = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M9.64641 3.64648L10.3535 4.35359L6.70707 8.00004L10.3535 11.6465L9.64641 12.3536L5.29286 8.00004L9.64641 3.64648Z"
    fill={fill}
  />
);

const ChevronEast = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M6.35359 12.3535L5.64648 11.6464L9.29293 7.99996L5.64648 4.35352L6.35359 3.64641L10.7071 7.99996L6.35359 12.3535Z"
    fill={fill}
  />
);

const ChevronNorth = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M12.3535 9.64641L11.6464 10.3535L7.99996 6.70707L4.35352 10.3535L3.64641 9.64641L7.99996 5.29286L12.3535 9.64641Z"
    fill={fill}
  />
);

const ArrowRefresh = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M5.83372 4.63739C6.63319 4.12235 7.59 3.90901 8.53254 4.03562C9.47508 4.16223 10.3417 4.62052 10.9769 5.32828C11.6121 6.03603 11.9744 6.94695 11.9987 7.89765C12.023 8.84834 11.7078 9.7766 11.1097 10.5159C10.5115 11.2553 9.66951 11.7573 8.73468 11.932C7.79985 12.1066 6.83338 11.9425 6.00861 11.4691C5.18383 10.9956 4.55473 10.2438 4.23414 9.34845C3.97146 8.61484 3.92998 7.82421 4.10882 7.07329L5.38912 8.35359L6.09623 7.64648L3.62136 5.17161L1.14648 7.64648L1.85359 8.35359L3.07607 7.13112C2.92597 7.98173 2.99791 8.86236 3.29267 9.68556C3.69341 10.8047 4.47979 11.7445 5.51076 12.3363C6.54172 12.9282 7.74982 13.1333 8.91835 12.915C10.0869 12.6966 11.1394 12.0691 11.8871 11.1449C12.6348 10.2208 13.0288 9.06042 12.9984 7.87206C12.9679 6.68369 12.5151 5.54504 11.7211 4.66034C10.9271 3.77565 9.84385 3.20279 8.66568 3.04452C7.4875 2.88626 6.29149 3.15294 5.29215 3.79673L5.83372 4.63739Z"
    fill={fill}
  />
);

const ArrowExpand = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M10.2929 5H8V4H12V8H11V5.70711L5.70711 11H8V12H4V8H5V10.2929L10.2929 5Z"
    fill={fill}
  />
);

const ArrowExternal = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M14 1H9V2H13.293L8.14648 7.14648L8.85359 7.85359L14 2.70718V7H15V2V1H14ZM7 3H2V14H13V9H12V13H3V4H7V3Z"
    fill={fill}
  />
);

const ArrowEast = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M11.0355 7.5L7.64641 4.11092L8.35352 3.40381L12.9497 8L8.35352 12.5962L7.64641 11.8891L11.0355 8.5L3.75732 8.5L3.75732 7.5H11.0355Z"
    fill={fill}
  />
);

const ArrowSouth = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M8.5 11.0355L11.8891 7.64641L12.5962 8.35352L8 12.9497L3.4038 8.35352L4.11091 7.64641L7.5 11.0355L7.5 3.75732L8.5 3.75732V11.0355Z"
    fill={fill}
  />
);

const ArrowWest = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M4.9645 8.5L8.35359 11.8891L7.64648 12.5962L3.05029 8L7.64648 3.4038L8.35359 4.11091L4.9645 7.5L12.2427 7.5L12.2427 8.5L4.9645 8.5Z"
    fill={fill}
  />
);

const ArrowNorth = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M7.5 4.96438L4.11092 8.35347L3.40381 7.64636L8 3.05017L12.5962 7.64636L11.8891 8.35347L8.5 4.96438L8.5 12.2426L7.5 12.2426V4.96438Z"
    fill={fill}
  />
);

const ArrowNorthEast = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M10.2963 5H5.00346V4L12.0035 4V11H11.0035V5.70711L4.85701 11.8536L4.1499 11.1464L10.2963 5Z"
    fill={fill}
  />
);

const ArrowSouthEast = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M11 10.2965L11 5.00358L12 5.00358L12 12.0036L5 12.0036L5 11.0036L10.2929 11.0036L4.14645 4.85713L4.85355 4.15002L11 10.2965Z"
    fill={fill}
  />
);

const ArrowSouthWest = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M5.70707 11L11 11L11 12L3.99996 12L3.99996 5L4.99996 5L4.99996 10.2929L11.1464 4.14645L11.8535 4.85355L5.70707 11Z"
    fill={fill}
  />
);

const ArrowNorthWest = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M5 5.70707L5 11L4 11L4 3.99996L11 3.99996L11 4.99996L5.70711 4.99996L11.8536 11.1464L11.1464 11.8535L5 5.70707Z"
    fill={fill}
  />
);

const Locked = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M6 7H10V5C10 3.89543 9.10457 3 8 3C6.89543 3 6 3.89543 6 5V7ZM5 7H3V14H13V7H11V5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5V7Z"
    fill={fill}
  />
);

const Unlocked = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M13 7V4C13 2.89543 12.1046 2 11 2C9.89543 2 9 2.89543 9 4V8H13V10.2361V12V15H3V8H8V4C8 2.34315 9.34315 1 11 1C12.6569 1 14 2.34315 14 4V7H13Z"
    fill={fill}
  />
);

const Mail = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M13.135 4H2.86497L8 8.34502L13.135 4ZM2 4.57805V12H14V4.57805L8.32297 9.38169L8 9.65498L7.67703 9.38169L2 4.57805ZM1 13V3H15V13H1Z"
    fill={fill}
  />
);

const Copy = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M9 3H4V10H6V6V5H7H9V3ZM10 5H12H13V6V13V14H12H7H6V13V11H4H3V10V3V2H4H9H10V3V5ZM7 6H12V13H7V6Z"
    fill={fill}
  />
);

const MagnifyingGlass = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M11 7.5C11 9.433 9.433 11 7.5 11C5.567 11 4 9.433 4 7.5C4 5.567 5.567 4 7.5 4C9.433 4 11 5.567 11 7.5ZM10.3088 11.016C9.53901 11.6318 8.56251 12 7.5 12C5.01472 12 3 9.98528 3 7.5C3 5.01472 5.01472 3 7.5 3C9.98528 3 12 5.01472 12 7.5C12 8.56251 11.6318 9.53901 11.016 10.3088L13.3536 12.6464L12.6464 13.3536L10.3088 11.016Z"
    fill={fill}
  />
);

const ChevronDouble = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M8.00004 1.79285L4.14648 5.6464L4.85359 6.35351L8.00004 3.20706L11.1465 6.35351L11.8536 5.6464L8.00004 1.79285ZM4.85367 9.64648L4.14656 10.3536L8.00011 14.2071L11.8537 10.3536L11.1466 9.64648L8.00011 12.7929L4.85367 9.64648Z"
    fill={fill}
  />
);

const ChevronDoubleSmall = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M8.00004 3.79285L5.14648 6.6464L5.85359 7.35351L8.00004 5.20706L10.1465 7.35351L10.8536 6.6464L8.00004 3.79285ZM5.85367 8.64648L5.14656 9.35358L8.00011 12.2071L10.8537 9.35358L10.1466 8.64648L8.00011 10.7929L5.85367 8.64648Z"
    fill={fill}
  />
);

const Plus = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M7.5 8.5V13.5H8.5V8.5H13.5V7.5H8.5V2.5H7.5V7.5H2.5V8.5H7.5Z"
    fill={fill}
  />
);

const Checkmark = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M12.3536 5.35359L6.50004 11.2071L3.64648 8.35359L4.35359 7.64648L6.50004 9.79293L11.6465 4.64648L12.3536 5.35359Z"
    fill={fill}
  />
);

const Minus = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M13.5 8.5H2.5V7.5H13.5V8.5Z"
    fill={fill}
  />
);

const X = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M7.29289 7.99995L3.75747 11.5354L4.46458 12.2425L8 8.70706L11.5355 12.2426L12.2426 11.5355L8.70711 7.99995L12.2428 4.46431L11.5356 3.7572L8 7.29285L4.46443 3.75728L3.75732 4.46438L7.29289 7.99995Z"
    fill={fill}
  />
);

const ExclaimationMark = ({ fill }: InnerSVGProps) => (
  <path
    d="M8.58008 3.27273L8.49485 9.54545H7.50621L7.42099 3.27273H8.58008ZM8.00053 12.0682C7.79031 12.0682 7.60991 11.9929 7.45934 11.8423C7.30877 11.6918 7.23349 11.5114 7.23349 11.3011C7.23349 11.0909 7.30877 10.9105 7.45934 10.7599C7.60991 10.6094 7.79031 10.5341 8.00053 10.5341C8.21076 10.5341 8.39116 10.6094 8.54173 10.7599C8.69229 10.9105 8.76758 11.0909 8.76758 11.3011C8.76758 11.5114 8.69229 11.6918 8.54173 11.8423C8.39116 11.9929 8.21076 12.0682 8.00053 12.0682Z"
    fill={fill}
  />
);

const Bullet = ({ fill }: InnerSVGProps) => (
  <circle cx="8" cy="8" r="3" fill={fill} />
);

const Circle = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11ZM8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
    fill={fill}
  />
);

const Ellipsis = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M2 7H4V9H2V7ZM7 7H9V9H7V7ZM14 7H12V9H14V7Z"
    fill={fill}
  />
);

const Star = ({ fill }: InnerSVGProps) => (
  <path
    d="M8 3L9.46946 5.97746L12.7553 6.45492L10.3776 8.77254L10.9389 12.0451L8 10.5L5.06107 12.0451L5.62236 8.77254L3.24472 6.45492L6.53054 5.97746L8 3Z"
    fill={fill}
  />
);

const TriangleEast = ({ fill }: InnerSVGProps) => (
  <path d="M12 8L6 11.4641L6 4.5359L12 8Z" fill={fill} />
);

const TriangleSouth = ({ fill }: InnerSVGProps) => (
  <path d="M8 12L4.5359 6L11.4641 6L8 12Z" fill={fill} />
);

const TriangleWest = ({ fill }: InnerSVGProps) => (
  <path d="M4 8L10 4.5359L10 11.4641L4 8Z" fill={fill} />
);

const TriangleNorth = ({ fill }: InnerSVGProps) => (
  <path d="M8 4L11.4641 10H4.5359L8 4Z" fill={fill} />
);

const CreateGroup = ({ fill }: InnerSVGProps) => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M3.5 8C3.5 5.51472 5.51472 3.5 8 3.5V2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5C11.0376 13.5 13.5 11.0376 13.5 8H12.5C12.5 10.4853 10.4853 12.5 8 12.5C5.51472 12.5 3.5 10.4853 3.5 8ZM10 3H11V5H13V6H11V8H10V6H8V5H10V3Z"
    fill={fill}
  />
);

const iconList: IconList = {
  NullIcon,
  ChevronNorth,
  ChevronSouth,
  ChevronWest,
  ChevronEast,
  ArrowRefresh,
  ArrowExpand,
  ArrowExternal,
  ArrowEast,
  ArrowSouth,
  ArrowWest,
  ArrowNorth,
  ArrowNorthEast,
  ArrowSouthEast,
  ArrowSouthWest,
  ArrowNorthWest,
  Locked,
  Unlocked,
  Mail,
  Copy,
  MagnifyingGlass,
  ChevronDouble,
  ChevronDoubleSmall,
  Plus,
  Checkmark,
  Minus,
  ExclaimationMark,
  Bullet,
  Circle,
  Ellipsis,
  Star,
  TriangleEast,
  TriangleSouth,
  TriangleWest,
  TriangleNorth,
  CreateGroup,
  X,
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
