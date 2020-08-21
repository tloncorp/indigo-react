import * as React from "react";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { AllSystemProps, allSystemStyle } from "../systemHelpers";

export type DisclosureBoxProps = AllSystemProps & {
  isOpen?: boolean;
};

const style = ({ isOpen }: DisclosureBoxProps) =>
  css({
    display: isOpen ? "flex" : "none",
    flexDirection: "column",
    visibility: isOpen ? "visible" : "hidden",
    borderLeft: isOpen ? "1px solid" : "none",
    borderColor: isOpen ? "lightGray" : "transparent",
    padding: 2,
    mx: 3,
  } as SystemStyleObject);

export const DisclosureBox = styled.div<
  React.PropsWithChildren<DisclosureBoxProps>
>(style, ...allSystemStyle);

DisclosureBox.displayName = "DisclosureBox";
