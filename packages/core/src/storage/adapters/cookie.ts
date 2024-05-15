import { StorageBuilder } from '../builder'

export const cookieAdapter = new StorageBuilder()
  .bind('save', <T>(key: string, value: T) =>
    localStorage.setItem(key, value as string),
  )
  .bind('get', <T>(key: string): T => localStorage.getItem(key) as T)
  .bind('getOr', <T>(key: string, replaced: T): T => {
    const storagedValue = localStorage.getItem(key)

    return (storagedValue as T) ?? replaced
  })
  .bind('remove', localStorage.removeItem)
  .bind('clear', localStorage.clear)
  .build()
