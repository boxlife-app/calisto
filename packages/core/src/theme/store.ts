import { Store } from '~/reactivity'
import * as presets from './presets'
import { Theme, Themes } from './types'

export const $theme = new Store<Themes>('dark')
export const $themes = new Store<Theme[]>([
  presets.darkTheme,
  presets.lightTheme,
])
