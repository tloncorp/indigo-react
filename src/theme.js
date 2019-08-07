const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    gray: ['#333333', '#4d4d4d', '#7f7f7f', '#b1b2b3', '#e6e6e6', '#f9f9f9'],
    blue: ['#ecf6ff', '#b0c7ff', '#4330fc', '#190d7b'],
    red: ['#f9d6ce', '#ffa073', '#ee5432', '#c10d30'],
    green: ['#bdebcc', '#2ed196', '#2aa779', '#286e55'],
    yellow: ['#ffefc5', '#ffd972', '#fcc440', '#ee892b']
  },
  fonts: {
    sans: '"Inter", Helvetica, Arial, sans-serif',
    mono: '"Source Code Pro", monospace'
  },
  space: [0, 4, 8, 12, 16, 20, 24, 32, 48, 64, 96, 160, 288],
  fontSizes: [12, 14, 16, 18, 24, 32, 48, 64, 72],
  breakpoints: ['550px', '750px', '960px'],
  lineHeights: {
    short: 1.333333,
    regular: 1.5,
    tall: 1.666666
  },
  sizes: [0, 4, 8, 12, 16, 20, 24, 32, 48, 64, 96, 160, 288]
}

theme.breakpoints.small = theme.breakpoints[0]
theme.breakpoints.medium = theme.breakpoints[1]
theme.breakpoints.large = theme.breakpoints[2]

export default theme
