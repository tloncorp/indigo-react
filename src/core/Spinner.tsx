import * as React from 'react';
import styled from 'styled-components';
import {space, SpaceProps} from 'styled-system';

type Props = SpaceProps & {
  loading?: boolean;
};

const Outer = styled.div<Props>`
  width: ${p => p.theme.space[4]}px;
  height: ${p => p.theme.space[4]}px;

  max-width: ${p => p.theme.space[4]}px;
  max-height: ${p => p.theme.space[4]}px;

  border-width: 1px;
  border-style: solid;
  border-color: ${p => p.theme.colors.gray2};
  border-radius: 50%;

  animation: ${p => (p.loading ? 'spin 750ms linear infinite' : '')};

  visibility: ${p => (p.loading ? 'visible' : 'hidden')};

  display: ${p => (p.loading ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  * path {
    fill: ${p => p.theme.colors.black};
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  ${space}
`;

const InnerSVG = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13 7C13 8.5913 12.3679 10.1174 11.2426 11.2426C10.1174 12.3679 8.5913 13 7 13C5.4087 13 3.88258 12.3679 2.75736 11.2426C1.63214 10.1174 1 8.5913 1 7L7 7L13 7Z"
      fill="black"
    />
  </svg>
);

const Spinner = ({loading}: Props) => (
  <div>
    <Outer loading={loading}>
      <InnerSVG />
    </Outer>
  </div>
);

export default Spinner;
export {Props};
