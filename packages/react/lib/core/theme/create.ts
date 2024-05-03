import { Theme } from '@emotion/react'
import merge from 'deepmerge'
import { presets } from './presets'
import { Theme as BaseTheme, Themes } from './types'

export const ThemeFabric = {
  createFromLight: (
    name: Themes,
    theme: Partial<BaseTheme>,
  ): Record<Themes, Theme> => {
    const base = presets.light

    return {
      [name]: merge(base, theme),
    } as Record<Themes, Theme>
  },

  createFromDark: (
    name: Themes,
    theme: Partial<BaseTheme>,
  ): Record<Themes, Theme> => {
    const base = presets.dark

    return {
      [name]: merge(base, theme),
    } as Record<Themes, Theme>
  },
} as const
