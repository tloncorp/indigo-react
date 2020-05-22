// import * as React from 'react';
import styled from "styled-components";

// import { SpaceProps } from 'styled-system';
import { MenuList } from "@reach/menu-button";

const StyledMenuList = styled(MenuList)`
  width: 200px;
  padding: 0;
  outline: none;
  margin-top: 1px;
  padding-top: 8px;
  padding-bottom: 8px;

  border: 1px solid ${p => p.theme.colors.gray1};
  background-color: ${p => p.theme.colors.white};

  border-radius: ${p => p.theme.radii[2]}px;
`;

export default StyledMenuList;
