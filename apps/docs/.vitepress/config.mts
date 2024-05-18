import { defineConfig } from 'vitepress'
import { en } from './en.mts'
import { ru, search as ruSeach } from './ru.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'Calisto',
  description: 'A UI-Kit for normal peoples',
  appearance: 'force-dark',

  sitemap: {
    hostname: 'https://calisto.boxlife.app'
  },

  head: [
    ["link", { rel: "icon", href: '/favicon.svg', type: 'image/svg+xml' }],
    ["script", { src: "/_vercel/insights/script.js", defer: "true" }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Calisto | A UI-Kit for normal peoples' }],
    ['meta', { property: 'og:site_name', content: 'Calisto' }],
    ['meta', { property: 'og:image', content: 'https://calisto.js.org/preview.png' }],
    ['meta', { property: 'og:url', content: 'https://calisto.js.org/' }]
  ],

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      ...en
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      link: '/ru/',
      ...ru
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    siteTitle: 'Calisto',
    logo: '/logo.svg',

    search: {
      provider: 'algolia',
      options: {
        appId: 'VN3VY2RELI',
        apiKey: '33c76f621285dcbcf359ef2b9dc1142e',
        indexName: 'calisto'
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/boxlife-app/calisto' }
    ]
  }
})
