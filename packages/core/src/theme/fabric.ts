import merge from 'deepmerge'
import * as presets from './presets'
import { $themes } from './store'
import { Theme, Themes } from './types'

export class ThemeFabric {
  static from(theme: Themes) {
    const fromTheme: Theme =
      $themes.state.find((item) => item.name === theme) ?? presets.darkTheme

    return {
      create: (name: Themes, theme: Omit<Theme, 'name'>) =>
        merge(fromTheme, {
          name,
          ...theme,
        }),
    }
  }
}
