import styled from 'styled-components';

import Text from './Text';

const T4 = styled(Text)``;

T4.defaultProps = {
  lineHeight: 'short',
  fontSize: 4,
  margin: 0,
  fontWeight: 400,
};

export default T4;
