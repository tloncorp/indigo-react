import * as React from "react";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { CommonStyleProps, commonStyle } from "./system/unions";
import { Icon } from "./Icon";

type DisclosureButtonWrapperProps = CommonStyleProps & {
  isOpen?: boolean;
};

const style = () =>
  css({
    width: "100%",
    height: 5,
    borderRadius: 2,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    px: "2",
    border: "1px solid",
    borderColor: "transparent",
  } as SystemStyleObject);

const DisclosureButtonWrapper = styled.button<
  React.PropsWithChildren<DisclosureButtonWrapperProps>
>(style, ...commonStyle);

export type DisclosureButtonProps = DisclosureButtonWrapperProps &
  React.HTMLAttributes<HTMLButtonElement>;

export const DisclosureButton = ({
  isOpen,
  children,
  ...props
}: DisclosureButtonProps) => (
  <DisclosureButtonWrapper isOpen={isOpen} {...props}>
    <Icon mr="2" icon={isOpen ? "TriangleSouth" : "TriangleEast"} />
    {children}
  </DisclosureButtonWrapper>
);

DisclosureButton.displayName = "DisclosureButton";
