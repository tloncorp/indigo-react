import React from 'react'
import styled from 'styled-components'
import theme from "../../theme";
import {
  color, ColorProps,
  layout, LayoutProps,
  space, SpaceProps,
  typography, TypographyProps,
  compose
} from 'styled-system'

type Props = LayoutProps & ColorProps & SpaceProps & TypographyProps & {
  error?: string
  touched?: boolean
  className?: string
}

const __LabelCaption = (props:Props) => {
  return (
    <span className={props.className}>
      { props.touched && props.error
          ? props.error
          : ' '
      }
    </span>
  )
}

const LabelCaption = styled(__LabelCaption)<Props>`
  color: ${theme.colors.red[2]};
  padding-top: ${theme.space[1]}px;
  height: ${theme.space[4]}px;
  content: ' ';
  font-size: ${theme.fontSizes[0]}px;
  line-height: ${theme.lineHeights.regular}px;
  ${compose(color, layout, space, typography)}
`

export default LabelCaption;
