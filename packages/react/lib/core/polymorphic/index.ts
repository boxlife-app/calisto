export type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never

export interface OverridableTypeMap {
  props: object
  defaultComponent: React.ElementType
}

export interface PolymorphicComponent<TypeMap extends OverridableTypeMap> {
  <RootComponent extends React.ElementType = TypeMap['defaultComponent']>(
    props: PolymorphicProps<TypeMap, RootComponent>,
  ): JSX.Element | null
  propTypes?: any
  displayName?: string | undefined
}

export type PolymorphicProps<
  TypeMap extends OverridableTypeMap,
  RootComponent extends React.ElementType,
> = TypeMap['props'] &
  DistributiveOmit<
    React.ComponentPropsWithRef<RootComponent>,
    keyof TypeMap['props']
  >
