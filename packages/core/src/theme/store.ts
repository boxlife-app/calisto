import { Store } from '~/reactivity'
import * as presets from './presets'
import { Theme, Themes, ThemeStore } from './types'

export const createThemeStore = (): ThemeStore => ({
  $theme: new Store<Themes>('dark'),
  $themes: new Store<Theme[]>([presets.darkTheme, presets.lightTheme]),
})

export const { $theme, $themes } = createThemeStore()
