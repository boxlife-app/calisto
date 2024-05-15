export type StorageSave = <T>(key: string, value: T) => void
export type StorageGet = <T = unknown>(key: string) => T
export type StorageGetOr = <T = unknown>(key: string, replaced: T) => T
export type StorageRemove = (key: string) => void
export type StorageClear = () => void

export interface Storage {
  save: StorageSave
  get: StorageGet
  getOr: StorageGetOr
  remove: StorageRemove
  clear: StorageClear
}
