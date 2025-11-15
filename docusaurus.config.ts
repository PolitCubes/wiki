import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'PolitCubes Wiki',
  tagline: 'PolitCubes - официальная документация',
  favicon: 'favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.politcubes.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'politcubes', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
    },
    experimental_faster: true,
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['en', 'ru'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/PolitCubes/wiki/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/PolitCubes/wiki/blob/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    //image: 'img/docusaurus-social-card.jpg',
    algolia: {
      appId: 'XVA4Z2U2B0',
      apiKey: 'd28d0ed636fae9bd6beb6526c268de4a',
      indexName: 'politcubes',
      contextualSearch: false,
      searchPagePath: 'search',
      insights: false,
    },
    navbar: {
      title: 'PolitCubes Wiki',
      logo: {
        alt: 'PolitCubes Logo',
        src: 'logo.svg',
        srcDark: 'logo_dark.svg'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Документация',
        },
//        {to: '/', label: 'Документация', position: 'left'},
        {to: '/blog', label: 'Блог', position: 'left'},
        {
          href: 'https://github.com/PolitCubes/wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'PolitCubes Logo',
        src: 'logo_dark.svg',
      },
      links: [
        {
          title: 'Основное',
          items: [
            {
              label: 'Правила проекта',
              href: '/general/rules',
            },
            {
              label: 'Регистрация',
              href: '/general/registration',
            },
            {
              label: 'FAQ',
              href: '/general/faq',
            },
          ],
        },
        {
          title: 'Сообщество',
          items: [
            {
              label: 'VK',
              href: 'https://vk.com/politcubes',
            },
            {
              label: 'Сайт',
              href: 'https://politcubes.com',
            },

            {
              label: 'Discord',
              href: 'https://cc.politcubes.com/classic/discord',
            },
            {
              label: 'Служба поддержки',
              href: 'mailto:support@politcubes.com',
            },
          ],
        },
        {
          title: 'Аккаунт',
          items: [
            {
              label: 'Личный кабинет',
              href: 'https://politcubes.com/auth',
            },
            {
              label: 'Забыли пароль?',
              href: 'https://politcubes.com/restore',
            },
            {
              label: 'Регистрация',
              href: 'https://politcubes.com/actions',
            },
          ],
        },
        {
          title: 'Другое',
          items: [
            {
              label: 'HotMC',
              href: 'https://hotmc.ru/minecraft-server-214692',
            },
            {
              label: 'Онлайн-карта',
              href: 'https://map.politcubes.com',
            },
          ],
        },
      ],
      copyright: `© 2019-${new Date().getFullYear()} Команда PolitCubes`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
