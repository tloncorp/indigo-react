import styled from 'styled-components';

import Text from './Text';

const T1 = styled(Text)``;

T1.defaultProps = {
  lineHeight: 'short',
  fontSize: 1,
  margin: 0,
  fontWeight: 400,
};

export default T1;
