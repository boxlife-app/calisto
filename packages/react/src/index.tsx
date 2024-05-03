import React from 'react'
import ReactDOM from 'react-dom/client'
import { css } from '@/core/styling'
import { CalistoProvider, useCalisto } from '@/core/theme'
import { CssBaseline, ThemeFabric } from '@/main'
import { Button } from '@/ui/blocks/button'

const customTheme = ThemeFabric.createFromDark('rainbow', {
  variable: {
    background: 'pink',
  },
})

const secondCustomTheme = ThemeFabric.createFromLight('green', {
  variable: {
    background: 'green',
  },
})

const button = {
  base: css.dynamic((theme) => ({
    color: theme.variable.background,
    backgroundColor: 'white',
  })),
}

const App = () => {
  const { update } = useCalisto()

  return (
    <>
      <button onClick={() => update('light')}>change1</button>
      <button onClick={() => update('dark')}>change2</button>
      <button onClick={() => update('rainbow')}>change1</button>
      <button className={button.base()} onClick={() => update('green')}>
        change2
      </button>
      <Button>Im new button</Button>
    </>
  )
}

ReactDOM.createRoot(document.querySelector('#app')!).render(
  <React.StrictMode>
    <CalistoProvider
      themes={{ ...customTheme, ...secondCustomTheme }}
      defaultTheme="dark"
    >
      <CssBaseline />
      <App />
    </CalistoProvider>
  </React.StrictMode>,
)
