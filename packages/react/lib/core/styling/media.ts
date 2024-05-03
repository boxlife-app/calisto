export interface Query {
  value: number
  unit: string
  operator: 'min-width' | 'max-width'
}

export const media = (...queries: Query[]) => {
  const stringifiedQueries = queries
    .map((query) => `(${query.operator}: ${query.value}${query.unit})`)
    .join(', ')

  return '@media ' + stringifiedQueries
}
