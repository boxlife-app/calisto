import { css as emotion, CSSInterpolation } from '@emotion/css'
import { FunctionInterpolation } from '@emotion/react'
import emotionStyled from '@emotion/styled'
import { Theme, useCalisto } from '../theme'

export const css = {
  static: emotion,

  dynamic: (Interpolation: FunctionInterpolation<Theme>) => () => {
    const { themes, currentTheme } = useCalisto()

    return emotion(Interpolation(themes[currentTheme]) as CSSInterpolation)
  },
} as const

export const styled = emotionStyled
