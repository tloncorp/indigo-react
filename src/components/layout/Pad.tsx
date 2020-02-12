import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

type Props = SpaceProps & {};

export default styled.div<Props>`
  box-sizing: border-box;
  min-width: 0;
  padding: ${p => p.theme.space[2]}px;
  ${space}
`;
