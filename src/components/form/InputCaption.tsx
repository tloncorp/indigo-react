import styled from 'styled-components';
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  compose,
} from 'styled-system';

type Props = ColorProps & LayoutProps & SpaceProps & TypographyProps & {};

const InputCaption = styled.label<Props>`
  color: ${p => {
    return p.theme.colors.gray;
  }};
  width: 100%;
  display: block;
  pointer-events: none;
  ${compose(color, layout, space, typography)}
`;

InputCaption.defaultProps = {
  lineHeight: 'short',
  fontSize: 2,
  margin: 0,
  fontWeight: 400,
};

export default InputCaption;
