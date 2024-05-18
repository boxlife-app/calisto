import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const common = defineConfig({
  title: 'Calisto',
 
  appearance: 'force-dark',

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

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
