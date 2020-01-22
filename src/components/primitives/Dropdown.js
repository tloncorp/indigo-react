import React from 'react'
import Span from './Span'
import Box from './Box'
import styled, { createGlobalStyle } from 'styled-components'
// css warning not included in production
import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button'

const Style = createGlobalStyle`
[data-reach-menu] {
    display: block;
    position: absolute;
    font-family: "Inter UI";
  }


  [data-reach-menu-list] {
    display: block;
    white-space: nowrap;
    border: solid 1px #000;
    background: #fff;
    outline: none;
    font-family: inherit;
  }


  [data-reach-menu-item] {
    cursor: pointer;
    display: block;
    font-family: inherit;
    text-decoration: initial;
    padding: 8px 12px;

  }

  [data-reach-menu-item][data-selected] {
    background-color: #E6E6E6;
    outline: none;
  }
`;

const StyledMenuButton = styled(MenuButton)`
  border: 1px solid #b1b2b3;
  color: #7f7f7f;
  background: none;
  font-size: inherit;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 48px;
  padding: 12px;

  &:disabled {
    cursor: not-allowed;
    background-color: #f9f9f9;
    border: 1px solid #e6e6e6;
    color: #b1b2b3;
  }
`;

const StyledMenuList = styled(MenuList)`
  width: 100%;
  margin-top: 6px;
  padding: 0;

  > * {
    font-family: 'Inter UI';
  }
`;

class Dropdown extends React.Component {
  state = {
    selectedText: null
  };
  setSelectedText(option) {
    this.setState({
      selectedText: option.text
    });
    this.props.setOption(option);
  }
  render() {
    return (
      <Box
        css={`
          :root {
            --reach-dialog: 1;
          }
        `}
      >
        <Style />
        <Menu>
          <StyledMenuButton disabled={this.props.disabled}>
            <Span>
              {this.state.selectedText ? this.state.selectedText : 'Options'}
            </Span>
            <span aria-hidden>▼</span>
          </StyledMenuButton>

          <StyledMenuList>
            {this.props.options.map(option => (
              <MenuItem
                key={option.value}
                onSelect={() => this.setSelectedText(option)}
              >
                {option.text}
              </MenuItem>
            ))}
          </StyledMenuList>
        </Menu>
      </Box>
    );
  }
}

export default Dropdown;
