import styled from 'styled-components';

import Text from './Text';

const T5 = styled(Text)``;

T5.defaultProps = {
  lineHeight: 'short',
  fontSize: 8,
  margin: 0,
  fontWeight: 400,
};

export default T5;
