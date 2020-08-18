import styled from "styled-components";
import { compose } from "styled-system";
import { allSystemStyle, AllSystemProps } from "./systemHelpers";

export type BaseImageProps = AllSystemProps;

export const BaseImage = styled.img<React.PropsWithChildren<BaseImageProps>>(
  compose(...allSystemStyle)
);

BaseImage.displayName = "BaseImage";
