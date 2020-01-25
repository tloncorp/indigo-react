// import original module declarations
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string,
      white: string,
      gray: string[],
      blue: string[],
      red: string[],
      green: string[],
      yellow: string[]
    },
    fonts: {
      sans: string,
      mono: string
    },
    fontSizes: number[],
    fontWeights: {
      regular: number,
      bold: number
    },
    lineHeights: {
      short: number,
      regular: number,
      tall: number
    },
    borders: string[],
    space: number[],
    radii: number[],
    sizes: number[],
    zIndices: number[],
    breakpoints: string[]
    global: {
      borderRadius: string,
    }
  }
}
