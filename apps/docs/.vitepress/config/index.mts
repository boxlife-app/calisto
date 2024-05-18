import { defineConfig } from 'vitepress'
import { en } from './en.mts'
import { ru, search as ruSeach } from './ru.mts'
import { common } from './common.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...common,
  locales: {
    root: { label: 'English', ...en },
    ru: { label: 'Русский', ...ru }
  }
})
