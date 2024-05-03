import { Storage } from '../storage'

export const sessionStorageAdapter: Storage = {
  save<T>(key: string, value: T): void {
    sessionStorage.setItem(key, value as string)
  },
  get<T>(key: string): T {
    throw new Error('Function not implemented.')
  },
  getOr<T>(key: string, replaced: T): T {
    const storagedValue = sessionStorage.getItem(key)

    return (storagedValue as T) ?? replaced
  },
  remove(key: string): void {
    throw new Error('Function not implemented.')
  },
  clear(): void {
    throw new Error('Function not implemented.')
  },
}
