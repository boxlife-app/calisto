import '@emotion/react'
import { Theme as CalistoTheme } from '@/main'

declare global {
  type TruthKeys<T> = {
    [K in keyof T]: T[K] extends true ? K : never
  }[keyof T]

  type Enumerate<
    N extends number,
    Acc extends number[] = [],
  > = Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>

  type IntRange<F extends number, T extends number> = Exclude<
    Enumerate<T>,
    Enumerate<F>
  >
}

declare module '@emotion/react' {
  export interface Theme extends CalistoTheme {}
}

export {}
