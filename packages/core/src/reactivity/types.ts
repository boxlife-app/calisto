export type ObserverFn<T = any> = (payload: T) => void

export interface IObserver<T = any> {
  subscribe(callback: ObserverFn<T>): () => void
  publish(payload: T): void
  unsubscribe(id: string): void
}

export interface Listener<T = any> {
  id: string
  callback: ObserverFn<T>
}

export interface IStore<T = any> {
  get state(): T
}
