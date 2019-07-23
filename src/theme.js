const theme = {
  colors: {
    black: '#000e1a',
    white: '#fff',
    blue: '#007ce0',
    navy: '#004175',
    green: '#33cc77'
  },
  fonts: {
    body: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace'
  },
  space: [
    // margin and padding
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256
  ],
  fontSizes: [12, 14, 16, 18, 24, 32, 48, 64, 72],
  breakpoints: ['40em', '52em', '64em'],
  lineHeights: {
    body: 1.75,
    heading: 1.25
  },
  sizes: []
}

theme.breakpoints.small = theme.breakpoints[0]
theme.breakpoints.medium = theme.breakpoints[1]
theme.breakpoints.large = theme.breakpoints[2]

export default theme
