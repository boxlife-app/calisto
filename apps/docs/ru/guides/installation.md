# Начало работы {#getting-started}

Чтобы начать использовать Calisto в вашем проекте на React, просто установите библиотеку через пакетный менеджер:

::: code-group

```sh [npm]
npm install @calisto/core @calisto/react
```

```sh [yarn]
yarn add @calisto/core @calisto/react
```

```sh [bun]
bun add @calisto/core @calisto/react
```

:::

Импортируете [компоненты](/recipes/button), которые вам нужны, и начинайте создавать свой пользовательский интерфейс с уверенностью:

```tsx
import { CalistoProvider } from '@calisto/react';

function App() {
  return (
    <CalistoProvider>
      /// Ваше приложение
    </CalistoProvider>
  );
}
```