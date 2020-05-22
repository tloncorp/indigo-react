import styled from "styled-components";
import { DisclosurePanel as _DisclosurePanel } from "@reach/disclosure";

type Props = {
  children: JSX.Element | JSX.Element[] | string | (string | JSX.Element)[];
}

const DisclosurePanel = styled(_DisclosurePanel)<Props>`
  outline: none;
`;

export default DisclosurePanel;
