import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  position,
  PositionProps,
  background,
  BackgroundProps,
} from "styled-system";

export type BackgroundImageProps = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps &
  PositionProps &
  BackgroundProps & {
    src?: string;
  };

const style = ({ src }: BackgroundImageProps) =>
  css({
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    backgroundImage: `url(${src})`,
  } as SystemStyleObject);

const styleProps = [
  border,
  color,
  flexbox,
  layout,
  space,
  background,
  position,
];

const BackgroundImage = styled.div<
  React.PropsWithChildren<BackgroundImageProps>
>(style, ...styleProps);

BackgroundImage.displayName = "BackgroundImage";
export default BackgroundImage;
