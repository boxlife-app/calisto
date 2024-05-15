import { IntRange, TruthKeys } from '~/types'

export interface CustomThemes {
  rainbow: true
  green: true
}

export interface CustomColors {}

export interface CustomVariables {
  background: string
}

export type Themes = 'dark' | 'light' | TruthKeys<CustomThemes>
export type Colors = 'gray' | 'blue' | 'green' | 'red' | TruthKeys<CustomColors>
export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type ExtendSizeIterator<
  N extends number,
  Acc extends string[] = [],
> = Acc['length'] extends N
  ? `${Acc[number]}`
  : ExtendSizeIterator<N, [...Acc, `${Acc['length']}xl`]>

export type ExtendSize<F extends number, T extends number> = Exclude<
  ExtendSizeIterator<T>,
  ExtendSizeIterator<F>
>

export type Spacing =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 10
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64

export interface Theme {
  name: Themes
  color: Partial<Record<`${Colors}${IntRange<0, 13>}`, string>>
  spacing: Partial<Record<Spacing, number>>
  container: Partial<Record<Sizes, number>>
  typography: {
    display: Partial<Record<Sizes | ExtendSize<2, 3>, number>> & {
      font: string
    }
    text: Partial<Record<Sizes, number>> & { font: string }
  }
  shadow: Partial<Record<Sizes | ExtendSize<2, 4>, string>>
  blur: Partial<Record<Sizes, string>>
  variable: CustomVariables
}
