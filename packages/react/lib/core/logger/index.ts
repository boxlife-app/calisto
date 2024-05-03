export const logger = {
  debug: () => console.debug('hello'),
  warn: (message: string) =>
    console.warn(`%c[Calisto] -> ${message}`, 'color: #ceb73f;'),
  error: () => console.error('error'),
}

export * from './messages'
