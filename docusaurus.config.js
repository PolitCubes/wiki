const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'PolitCubes Wiki',
  tagline: 'Dinosaurs are cool',
  url: 'https://wiki.politcubes.ru',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'PolitCubes',
  projectName: 'wiki',
  themeConfig: {
    navbar: {
      title: 'PolitCubes Wiki',
      logo: {
        alt: 'PolitCubes Logo',
        src: 'static/logo.svg',
        srcDark: 'static/logo_dark.svg'
      },
      items: [
        { 
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Введение',
        },
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
        src: 'static/logo_dark.svg',
      },

      links: [
        {
          title: 'Основное',
          items: [
            {
              label: 'Правила проекта',
              href: '/docs/general/rules',
            },
            {
              label: 'Регистрация',
              href: '/docs/general/registration',
            },
            {
              label: 'FAQ',
              href: '/docs/general/faq',
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
              href: 'https://politcubes.ru',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/upFFUFMrWC',
            },
            {
              label: 'Служба поддержки',
              href: 'mailto:support@politcubes.ru',
            },
          ],
        },
        {
          title: 'Аккаунт',
          items: [
            {
              label: 'Личный кабинет',
              href: 'https://politcubes.ru/auth',
            },
            {
              label: 'Забыли пароль?',
              href: 'https://politcubes.ru/restore',
            },
            {
              label: 'Регистрация',
              href: 'https://politcubes.ru/actions',
            },
          ],
        },
        {
          title: 'Другое',
          items: [
            {
              label: 'MCTOP',
              href: 'https://mctop.su/servers/5527',
            },
            {
              label: 'Онлайн карта',
              href: 'https://politcubes.ru/map',
            },
          ],
        },
      ],
      copyright: `© 2019-${new Date().getFullYear()} Команда PolitCubes`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/PolitCubes/wiki/edit/main/',
        },
      },
    ],
  ],
};
