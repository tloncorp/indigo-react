import * as React from "react";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { textInput } from "./systemTokens";
import { StructureProps, structureStyle } from "./systemHelpers";

export type StatelessTextAreaFieldProps = StructureProps & {
  hasError?: boolean;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLTextAreaElement>;

const stateStyle = (hasError: boolean, disabled: boolean) => {
  if (hasError) return textInput.state.hasError;
  if (disabled) return textInput.state.disabled;
  return textInput.state.default;
};

const style = ({
  hasError = false,
  disabled = false,
}: StatelessTextAreaFieldProps) =>
  css({
    boxSizing: "border-box",
    width: "100%",
    p: 2,
    border: "1px solid",
    borderRadius: 2,
    resize: "vertical",
    minHeight: 5,
    ...stateStyle(hasError, disabled),
  } as SystemStyleObject);

export const StatelessTextAreaField = styled.textarea<
  React.PropsWithChildren<StatelessTextAreaFieldProps>
>(style, ...structureStyle);

StatelessTextAreaField.defaultProps = {
  cols: 8,
};

StatelessTextAreaField.displayName = "StatelessTextAreaField";
