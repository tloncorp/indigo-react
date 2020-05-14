import styled from 'styled-components';

import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  compose,
} from 'styled-system';

type Props = 
  LayoutProps &
  SpaceProps & {
    narrow?: boolean;
    wide?: boolean;
  };

const Measure = styled.div<Props>`
  max-width: ${p => (
    p.narrow
    ? '28em'
    : p.wide
    ? '34em'
    : '30em'
  )};
  ${compose(space, layout)}
`;

Measure.defaultProps = {
  narrow: false,
  wide: false,
};

export default Measure;
export {Props};
