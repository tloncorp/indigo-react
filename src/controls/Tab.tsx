import styled from "styled-components";
import { Tab as _Tab, TabProps } from "@reach/tabs";

type Props = TabProps

const Tab = styled(_Tab)<Props>`
  font-family: "Inter";
  border: 0;
  outline: none;
  cursor: pointer;
  user-select: none;
  font-size: ${p => p.theme.fontSizes[0]}px;

  background-color: ${p => p.theme.colors.white};

  padding: 8px 16px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  line-height: 1.2;

  &[aria-selected=true] {
    border-bottom-color: ${p => p.theme.colors.black};
    color: ${p => p.theme.colors.black};
  }

  &[aria-selected=false] {
    border-bottom-color: ${p => p.theme.colors.lightGray};
    color: ${p => p.theme.colors.lightGray};
  }
`;



export default Tab;
