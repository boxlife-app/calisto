import { Observer } from './observer'
import { IStore } from './types'

export class Store<T> extends Observer<T> implements IStore<T> {
  constructor(defaultState: T) {
    super()

    this.defaultState = defaultState
  }

  readonly id = crypto.randomUUID()

  private defaultState: T = {} as T
  private currentState: T = this.defaultState

  get state() {
    return this.currentState
  }

  set(payload: T) {
    this.currentState = payload

    this.publish(payload)
  }
}
