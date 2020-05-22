import styled from "styled-components";

import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  background,
  BackgroundProps,
  compose
} from "styled-system";

type Props = LayoutProps & SpaceProps & BackgroundProps & { src: string };

const BackgroundImg = styled.div<Props>`
  background-image: url(${(p: Props) => p.src});
  ${compose(background, space, layout)};
`;

BackgroundImg.defaultProps = {
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  height: "100%"
};

export default BackgroundImg;
