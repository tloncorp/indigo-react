import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

type Props = SpaceProps & {};

const Pad = styled.div<Props>`
  box-sizing: border-box;
  min-width: 0;
  ${space}
`;

Pad.defaultProps = {
  padding: 2,
};

export default Pad;
