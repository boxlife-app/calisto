import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'Calisto',
  description: 'A UI-Kit for normal peoples',
  appearance: 'force-dark',

  head: [
    ["link", { rel: "icon", href: '/logo.svg', type: 'image/svg+xml' }],
    ["script", { src: "/_vercel/insights/script.js", defer: "true" }]
  ],

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    siteTitle: 'Calisto',
    logo: '/logo.svg',

    search: {
      provider: 'algolia',
      options: {
        appId: 'VN3VY2RELI',
        apiKey: '33c76f621285dcbcf359ef2b9dc1142e',
        indexName: 'calisto',
      }
    },
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/guides/wtf-is-this', activeMatch: '^/guides/' },
      { text: 'Recipes', link: '/recipes/button', activeMatch: '^/recipes/' }
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Mikita Pitunou',
    },

    sidebar: {
      '/recipes/': {
        base: '/recipes/',
        items: [
          {
            text: 'Blocks',
            items: [
              { text: 'Button', link: 'button' },
              { text: 'Input', link: 'input' },
              { text: 'Checkbox', link: 'checkbox' },
            ]
          },
          {
            text: 'Data Display',
            items: [
              { text: 'Accordion', link: 'accordion' },
              { text: 'Avatar', link: 'avatar' },
              { text: 'Timeline', link: 'timeline' },
            ]
          },
          {
            text: 'Feedback',
            items: [
              { text: 'Alert', link: 'alert' },
              { text: 'Loader', link: 'loader' },
              { text: 'Progress', link: 'progress' },
              { text: 'Skeleton', link: 'skeleton' },
              { text: 'Slider', link: 'slider' },
              { text: 'Toast', link: 'toast' },
            ]
          },
          {
            text: 'Layout',
            items: [
              { text: 'Aspect Ration', link: 'aspect-ratio' },
              { text: 'Center', link: 'center' },
              { text: 'Container', link: 'container' },
              { text: 'Flex', link: 'flex' },
              { text: 'Grid', link: 'grid' },
              { text: 'Group', link: 'group' },
              { text: 'Space', link: 'space' },
              { text: 'Stack', link: 'stack' },
              { text: 'Tab', link: 'tab' },
            ]
          },
          {
            text: 'Overlay',
            items: [
              { text: 'Affix', link: 'affix' },
              { text: 'Dialog', link: 'dialog' },
              { text: 'Drawer', link: 'drawer' },
              { text: 'Loading', link: 'loading' },
              { text: 'Menu', link: 'menu' },
              { text: 'Modal', link: 'modal' },
              { text: 'Overlay', link: 'overlay' },
              { text: 'Popover', link: 'popover' },
              { text: 'tooltip', link: 'tooltip' },
            ]
          },
          {
            text: 'Typography',
            items: [
              { text: 'Blockquote', link: 'blockquote' },
              { text: 'Code', link: 'code' },
              { text: 'Heading', link: 'heading' },
              { text: 'List', link: 'list' },
              { text: 'Text', link: 'text' },
            ]
          }
        ]
      },
      
      '/guides/': {
        base: '/guides/',
        items: [
          {
            text: "Introduction",
            items: [
              { text: "What is this?", link: 'wtf-is-this' },
              { text: "Getting Started", link: 'installation' },
              // { text: "Intergrate with", link: 'intergrate' }
            ]
          }
        ]
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/boxlife-app/calisto' }
    ]
  }
})
