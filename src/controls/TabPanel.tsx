import styled from "styled-components";
import { TabPanel as _TabPanel, TabPanelProps } from "@reach/tabs";

type Props = TabPanelProps

const TabPanel = styled(_TabPanel)<Props>`
    border: 0;
    outline: none;
`;

export default TabPanel;
