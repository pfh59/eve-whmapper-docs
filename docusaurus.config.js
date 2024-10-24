// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Eve Wormhole Mapper',
  tagline: 'documentation for the eve wormhole mapper tool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/eve-whmapper-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pfh59', // Usually your GitHub org/user name.
  projectName: 'eve-whmapper-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  /*i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },*/

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'EVE-WHMAPPER',
        logo: {
          alt: 'EVE Wormhole Mapper Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/home', label: 'Home', position: 'left' },
          /*{
            type: 'localeDropdown',
            position: 'right',
          },*/
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'EVE Online',
                href: 'https://www.eveonline.com/',
              },
              {
                label: 'EVE Online Forums',
                href: 'https://forums.eveonline.com/',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'EVE Wormhole Mapper Github',
                href: 'https://github.com/pfh59/eve-whmapper',
              },
              {
                label: 'EVE Wormhole Mapper forums',
                href: 'https://forums.eveonline.com/t/whmapper/421061',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EVE Wormhole Mapper`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        disableSwitch: true,
        defaultMode: 'dark', // ou 'dark' selon votre préférence
      },
    }),
};

export default config;