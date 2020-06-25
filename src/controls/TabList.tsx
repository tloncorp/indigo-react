import styled from "styled-components";
import { TabList as _TabList, TabListProps } from "@reach/tabs";

type Props = TabListProps

const TabList = styled(_TabList)<Props>`
  font-family: "Inter UI";
  display: flex;
`;

export default TabList;
