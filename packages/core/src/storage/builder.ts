import { Storage } from './types'

export interface IStorageBuilder<T = Storage> {
  bind<K extends keyof T>(key: K, value: T[K]): IStorageBuilder<T>
  build(): Storage
}

export class StorageBuilder<T = Storage> implements IStorageBuilder<T> {
  private buildParameters: Record<any, any> = {}

  bind<K extends keyof T>(key: K, value: T[K]): IStorageBuilder<T> {
    this.buildParameters[key] = value

    return this
  }

  build(): Storage {
    return {
      ...this.buildParameters,
    } as Storage
  }
}
