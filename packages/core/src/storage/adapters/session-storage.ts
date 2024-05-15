import { StorageBuilder } from '../builder'

export const sessionStorageAdapter = new StorageBuilder()
  .bind('save', <T>(key: string, value: T) =>
    sessionStorage.setItem(key, value as string),
  )
  .bind('get', <T>(key: string): T => sessionStorage.getItem(key) as T)
  .bind('getOr', <T>(key: string, replaced: T): T => {
    const storagedValue = sessionStorage.getItem(key)

    return (storagedValue as T) ?? replaced
  })
  .bind('remove', sessionStorage.removeItem)
  .bind('clear', sessionStorage.clear)
  .build()
