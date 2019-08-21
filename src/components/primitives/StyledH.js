import styled from 'styled-components'
import { color, opacity, space, compose, typography } from 'styled-system'

const defaults = {
  fontFamily: 'sans',
  fontWeight: 400
}

export const H1 = styled.h1`
  ${compose(
    opacity,
    color,
    typography,
    space
  )}
`

H1.defaultProps = {
  ...defaults,
  fontSize: 7,
  lineHeight: 'short'
}

export const H2 = styled.h2`
  ${compose(
    opacity,
    color,
    typography,
    space
  )}
`

H2.defaultProps = {
  ...defaults,

  fontSize: 6,
  lineHeight: 'regular'
}

export const H3 = styled.h3`
  ${compose(
    opacity,
    color,
    typography,
    space
  )}
`

H3.defaultProps = {
  ...defaults,
  fontSize: 5,
  lineHeight: 'short'
}

export const H4 = styled.h4`
  ${compose(
    opacity,
    color,
    typography,
    space
  )}
`

H4.defaultProps = {
  ...defaults,
  fontSize: 4,
  lineHeight: 'short'
}

export const H5 = styled.h5`
  ${compose(
    opacity,
    color,
    typography,
    space
  )}
`

H5.defaultProps = {
  ...defaults,
  fontSize: 2,
  lineHeight: 'regular'
}

export const H6 = styled.h6`
  ${compose(
    opacity,
    color,
    typography,
    space
  )}
`

H6.defaultProps = {
  ...defaults,
  fontSize: 0,
  lineHeight: 'short'
}
