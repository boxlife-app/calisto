import createCache from '@emotion/cache'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import {
  ConsumerProps,
  createContext,
  FC,
  PropsWithChildren,
  use,
  useEffect,
  useState,
} from 'react'
import { prefixer } from 'stylis'
import { CACHE_KEY, STORAGE_KEY } from '../constants'
import { logger, UNKNOWN_THEME } from '../logger'
import { Storage } from '../storage'
import { localStorageAdapter } from '../storage/adapters'
import { presets } from './presets'
import { Theme, Themes } from './types'

export interface CalistoContextProps {
  themes: Record<Themes, Theme>
  currentTheme: Themes
  update: (theme: Themes) => void
}

export interface CalistoProviderProps extends PropsWithChildren {
  themes?: Record<Themes, Theme>
  defaultTheme?: Themes
  storage?: Storage
}

const CalistoContext = createContext<CalistoContextProps>(
  {} as CalistoContextProps,
)

export const CalistoConsumer: FC<ConsumerProps<CalistoContextProps>> = ({
  children,
}) => <CalistoContext.Consumer>{children}</CalistoContext.Consumer>

const cache = createCache({
  key: CACHE_KEY,
  stylisPlugins: [prefixer],
})

export const CalistoProvider: FC<CalistoProviderProps> = ({
  children,
  themes = {},
  defaultTheme = 'dark',
  storage = localStorageAdapter,
}) => {
  const themeList = {
    ...themes,
    ...presets,
  } as Record<Themes, Theme>
  const memorizedTheme = storage.getOr(STORAGE_KEY, defaultTheme)

  const [currentTheme, setCurrentTheme] = useState<Themes>(
    themeList[memorizedTheme] ? memorizedTheme : 'dark',
  )

  const update = (theme: Themes) => {
    document.documentElement.dataset.theme = theme
    storage.save(STORAGE_KEY, theme)
  }

  useEffect(() => update(currentTheme), [currentTheme])

  if (!themeList[memorizedTheme]) {
    logger.warn(UNKNOWN_THEME)
  }

  return (
    <CalistoContext.Provider
      value={{
        themes: themeList,
        currentTheme,
        update: setCurrentTheme,
      }}
    >
      <CacheProvider value={cache}>
        <CalistoConsumer>
          {({ themes, currentTheme }) => (
            <ThemeProvider theme={themes[currentTheme]}>
              {children}
            </ThemeProvider>
          )}
        </CalistoConsumer>
      </CacheProvider>
    </CalistoContext.Provider>
  )
}

export const useCalisto = () => use(CalistoContext)
