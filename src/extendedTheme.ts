import theme from './theme'

interface Ixt {
  buttons: {
    default: {
      color: string
      border: string
      backgroundColor: string
    }
    hover: {
      color: string
      border: string
      backgroundColor: string
    }
    active: {
      color: string
      border: string
      backgroundColor: string
    }
    disabled: {
      color: string
      border: string
      backgroundColor: string
    }
    focus: {
      color: string
      border: string
      backgroundColor: string
    }
  },
  global: {
    borderRadiusMinor: number,
    borderRadiusMajor: number,
  }
}

const xt:Ixt = {
  buttons: {
    default: {
      color: theme.colors.black,
      border: theme.borders[1] + theme.colors.gray[4],
      backgroundColor: theme.colors.white,
    },
    hover: {
      color: theme.colors.black,
      border: theme.borders[1] + theme.colors.black,
      backgroundColor: theme.colors.white,
    },
    focus: {
      color: theme.colors.black,
      border: theme.borders[1] + theme.colors.black,
      backgroundColor: theme.colors.white,
    },
    active: {
      color: theme.colors.gray[3],
      border: theme.borders[1] + theme.colors.gray[3],
      backgroundColor: theme.colors.white,
    },
    disabled: {
      color: theme.colors.gray[3],
      border: theme.borders[1] + theme.colors.gray[3],
      backgroundColor: theme.colors.gray[4],
    },
  },
  global: {
    borderRadiusMinor: theme.radii[1],
    borderRadiusMajor: theme.radii[3],
  }
}

export default xt
