import styled from 'styled-components';

import Text from './Text';

const T3 = styled(Text)``;

T3.defaultProps = {
  lineHeight: 'short',
  fontSize: 3,
  margin: 0,
  fontWeight: 400,
};

export default T3;
