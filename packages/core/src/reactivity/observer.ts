import { IObserver, Listener, ObserverFn } from './types'

export class Observer<T = any> implements IObserver<T> {
  readonly listeners: Set<Listener<T>> = new Set()

  subscribe(callback: ObserverFn<T>) {
    const id = crypto.randomUUID()

    this.listeners.add({
      id,
      callback,
    })

    return () => this.unsubscribe(id)
  }

  publish(payload: T) {
    this.listeners.forEach((listener) => {
      listener.callback(payload)
    })
  }

  unsubscribe(id: string) {
    this.listeners.forEach((listener) => {
      if (listener.id === id) return this.listeners.delete(listener)
    })
  }
}
