import { css } from '@/core/styling'

export const button = {
  base: css.static({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),

  primary: css.dynamic((theme) => ({
    backgroundColor: theme.color.gray12,
    color: theme.color.gray2,
    padding: `${theme.spacing[4]}px ${theme.spacing[8]}px`,
  })),

  xs: css.dynamic((theme) => ({})),

  sm: css.dynamic((theme) => ({})),

  md: css.dynamic((theme) => ({})),

  lg: css.dynamic((theme) => ({})),

  xl: css.dynamic((theme) => ({})),
}
