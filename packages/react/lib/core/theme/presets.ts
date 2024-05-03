import { blue, gray, green, red } from '@radix-ui/colors'
import { Theme } from './types'

const lightTheme: Theme = {
  name: 'light',
  color: {
    ...gray,
    ...blue,
    ...red,
    ...green,
  },
  spacing: {
    1: 2,
    2: 4,
    3: 8,
    4: 12,
    5: 16,
    6: 18,
    7: 20,
    8: 24,
    10: 32,
    12: 42,
  },
  container: {
    xs: 380,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
  typography: {
    display: {
      font: 'geist',
    },
    text: {
      font: 'geist',
    },
  },
  shadow: {},
  blur: {},
  variable: {
    background: '#3c3c3c',
  },
}

const darkTheme: Theme = {
  name: 'dark',
  color: {
    ...gray,
    ...blue,
    ...red,
    ...green,
  },
  spacing: {
    1: 2,
    2: 4,
    3: 8,
    4: 12,
    5: 16,
    6: 18,
    7: 20,
    8: 24,
    10: 32,
    12: 42,
  },
  container: {
    xs: 380,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
  typography: {
    display: {
      font: 'geist',
    },
    text: {
      font: 'geist',
    },
  },
  shadow: {},
  blur: {},
  variable: {
    background: '#1c1c1c',
  },
}

export const presets = {
  dark: darkTheme,
  light: lightTheme,
} as const
