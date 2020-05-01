import styled from 'styled-components';
import {typography, TypographyProps} from 'styled-system';

// import { SpaceProps } from 'styled-system';
import {MenuItem} from '@reach/menu-button';

type Props = TypographyProps;

const StyledMenuItem = styled(MenuItem)<Props>`
  cursor: pointer;
  display: block;
  font-family: inherit;
  text-decoration: initial;

  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[4]}px;

  background-color: color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.black};

  font-family: ${p => p.theme.fonts.sans};

  &:hover {
    background-color: ${p => p.theme.colors.blue1};
    color: ${p => p.theme.colors.white};
    outline: none;
  }

  ${typography}
`;

StyledMenuItem.defaultProps = {
  fontSize: 2,
};

export default StyledMenuItem;
