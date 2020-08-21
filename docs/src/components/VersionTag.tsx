import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { commonStyle, CommonStyleProps, Label } from "local-indigo-react";

export type VersionTagProps = CommonStyleProps & {
  disabled?: boolean;
  destructive?: boolean;
};

const style = () =>
  css({
    fontFeatureSettings: "'tnum' on, 'lnum' on, 'zero' on, 'ss01' on",
    fontFamily: "mono",
    px: "2",
    height: "4",
    color: "blue",
    bg: "washedBlue",
    borderRadius: "2",
    border: "1px solid",
    borderColor: "washedBlue",
  } as SystemStyleObject);

export const VersionTag = styled(Label)<
  React.PropsWithChildren<VersionTagProps>
>(style, ...commonStyle);
