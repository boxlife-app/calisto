import { cva } from 'class-variance-authority'
import {
  ClassProp,
  ClassValue,
  StringToBoolean,
} from 'class-variance-authority/types'
import { Sizes } from '../theme'

type DynamicClassValue = (() => string) | ClassValue

interface ConfigSchema {
  intent: Partial<Record<string, DynamicClassValue>>
  size: Partial<Record<Sizes, DynamicClassValue>>
}

type ConfigVariants<T extends ConfigSchema> = {
  [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | null | undefined
}

type ConfigVariantsMulti<T extends ConfigSchema> = {
  [Variant in keyof T]?:
    | StringToBoolean<keyof T[Variant]>
    | StringToBoolean<keyof T[Variant]>[]
    | undefined
}

type Config<T> = T extends ConfigSchema
  ? {
      variants?: T
      defaultVariants?: ConfigVariants<T>
      compoundVariants?: (T extends ConfigSchema
        ? (ConfigVariants<T> | ConfigVariantsMulti<T>) & ClassProp
        : ClassProp)[]
    }
  : never

type Props<T> = T extends ConfigSchema
  ? ConfigVariants<T> & ClassProp
  : ClassProp

export const createVariance =
  <T>(base?: DynamicClassValue, config?: Config<T> | undefined) =>
  (props?: Props<T> | undefined): string => {
    return cva(base, config as any)(props)
  }
