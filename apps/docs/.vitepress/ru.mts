import { DefaultTheme, defineConfig } from "vitepress";

export const ru = defineConfig({
    lang: 'ru-RU',
    description: 'UI-Kit для нормальных людей',

    themeConfig: {
        nav: [
            { text: 'Главная', link: '/ru/' },
            { text: 'Гайды', link: '/ru/guides/wtf-is-this', activeMatch: '^/ru/guides/' },
            { text: 'Компоненты', link: '/ru/recipes/button', activeMatch: '^/ru/recipes/' },
            {
              text: 'Релизы',
              items: [
                { text: 'v0.1.0', link: '#' }
              ]
            }
        ],
          
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024-present Mikita Pitunou',
        },
      
        sidebar: {
            '/ru/recipes/': {
              base: '/ru/recipes/',
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
            
            '/ru/guides/': {
              base: '/ru/guides/',
              items: [
                {
                  text: "Введение",
                  items: [
                    { text: "Что это?", link: 'wtf-is-this' },
                    { text: "Начало работы", link: 'installation' },
                    // { text: "Intergrate with", link: 'intergrate' }
                  ]
                }
              ]
            }
        },
    }
})

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
    ru: {
      placeholder: 'Поиск в документации',
      translations: {
        button: {
          buttonText: 'Поиск',
          buttonAriaLabel: 'Поиск'
        },
        modal: {
          searchBox: {
            resetButtonTitle: 'Сбросить поиск',
            resetButtonAriaLabel: 'Сбросить поиск',
            cancelButtonText: 'Отменить поиск',
            cancelButtonAriaLabel: 'Отменить поиск'
          },
          startScreen: {
            recentSearchesTitle: 'История поиска',
            noRecentSearchesText: 'Нет истории поиска',
            saveRecentSearchButtonTitle: 'Сохранить в истории поиска',
            removeRecentSearchButtonTitle: 'Удалить из истории поиска',
            favoriteSearchesTitle: 'Избранное',
            removeFavoriteSearchButtonTitle: 'Удалить из избранного'
          },
          errorScreen: {
            titleText: 'Невозможно получить результаты',
            helpText: 'Вам может потребоваться проверить подключение к Интернету'
          },
          footer: {
            selectText: 'выбрать',
            navigateText: 'перейти',
            closeText: 'закрыть',
            searchByText: 'поставщик поиска'
          },
          noResultsScreen: {
            noResultsText: 'Нет результатов для',
            suggestedQueryText: 'Вы можете попытаться узнать',
            reportMissingResultsText:
              'Считаете, что поиск даёт ложные результаты？',
            reportMissingResultsLinkText: 'Нажмите на кнопку «Обратная связь»'
          }
        }
      }
    }
  }