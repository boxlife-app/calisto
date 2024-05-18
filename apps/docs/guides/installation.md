# Getting Started {#getting-started}

To start using Calisto in your React project, simply install the library via package manager:

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

Import the [components](/recipes/button) you need, and begin building your user interface with confidence:

```tsx
import { CalistoProvider } from '@calisto/react';

function App() {
  return (
    <CalistoProvider>
      /// Your Application
    </CalistoProvider>
  );
}
```