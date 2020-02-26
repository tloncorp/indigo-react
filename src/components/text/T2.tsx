import styled from 'styled-components';

import Text from './Text';

const T2 = styled(Text)``;

T2.defaultProps = {
  lineHeight: 'short',
  fontSize: 2,
  margin: 0,
  fontWeight: 400,
};

export default T2;