export interface Storage {
  save: <T>(key: string, value: T) => void
  get: <T = unknown>(key: string) => T
  getOr: <T = unknown>(key: string, replaced: T) => T
  remove: (key: string) => void
  clear: () => void
}
