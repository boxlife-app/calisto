import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Calisto UI-Kit",
  description: "A UI-Kit for normal peoples",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    siteTitle: "Calisto",
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Recipes', link: '/recipes/button', activeMatch: '^/recipes/', }
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present. Made in <img class="belarus" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Belarus_%281918%2C_1991%E2%80%931995%29.svg/1200px-Flag_of_Belarus_%281918%2C_1991%E2%80%931995%29.svg.png"/> by Mikita Pitunou',
    },

    sidebar: [
      {
        text: 'Blocks',
        items: [
          { text: 'Button', link: '/recipes/button' },
          { text: 'Input', link: '/recipes/input' },
          { text: 'Checkbox', link: '/recipes/api-examples' },
        ]
      },
      {
        text: 'Data Display',
        items: [
          { text: 'Accordion', link: '/recipes/accordion' },
          { text: 'Avatar', link: '/recipes/avatar' },
          { text: 'Timeline', link: '/recipes/timeline' },
        ]
      },
      {
        text: 'Feedback',
        items: [
          { text: 'Alert', link: '/recipes/alert' },
          { text: 'Loader', link: '/recipes/loader' },
          { text: 'Progress', link: '/recipes/progress' },
          { text: 'Skeleton', link: '/recipes/skeleton' },
          { text: 'Slider', link: '/recipes/slider' },
          { text: 'Toast', link: '/recipes/toast' },
        ]
      },
      {
        text: 'Layout',
        items: [
          { text: 'Aspect Ration', link: '/recipes/aspect-ratio' },
          { text: 'Center', link: '/recipes/center' },
          { text: 'Container', link: '/recipes/container' },
          { text: 'Flex', link: '/recipes/flex' },
          { text: 'Grid', link: '/recipes/grid' },
          { text: 'Group', link: '/recipes/group' },
          { text: 'Space', link: '/recipes/space' },
          { text: 'Stack', link: '/recipes/stack' },
          { text: 'Tab', link: '/recipes/tab' },
        ]
      },
      {
        text: 'Overlay',
        items: [
          { text: 'Affix', link: '/recipes/affix' },
          { text: 'Dialog', link: '/recipes/dialog' },
          { text: 'Drawer', link: '/recipes/drawer' },
          { text: 'Loading', link: '/recipes/loading' },
          { text: 'Menu', link: '/recipes/menu' },
          { text: 'Modal', link: '/recipes/modal' },
          { text: 'Overlay', link: '/recipes/overlay' },
          { text: 'Popover', link: '/recipes/popover' },
          { text: 'tooltip', link: '/recipes/tooltip' },
        ]
      },
      {
        text: 'Typography',
        items: [
          { text: 'Blockquote', link: '/recipes/blockquote' },
          { text: 'Code', link: '/recipes/code' },
          { text: 'Heading', link: '/recipes/heading' },
          { text: 'List', link: '/recipes/list' },
          { text: 'Text', link: '/recipes/text' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/boxlife-app/calisto' }
    ]
  }
})
