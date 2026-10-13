// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EVE Wormhole Mapper',
  tagline: 'Map wormhole chains, track your pilots and share them live with your corporation.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://pfh59.github.io',
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
  onBrokenAnchors: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/pfh59/eve-whmapper-docs/edit/main/',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        docsRouteBasePath: '/',
        indexBlog: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      navbar: {
        style: 'dark',
        title: 'EVE Wormhole Mapper',
        logo: {
          alt: 'EVE Wormhole Mapper Logo',
          src: 'img/logo.png',
        },
        items: [
          { to: '/home', label: 'Home', position: 'left' },
          { to: '/GettingStarted/installation', label: 'Installation', position: 'left' },
          { to: '/Notes/updates', label: 'Release Notes', position: 'left' },
          { href: 'https://github.com/pfh59/eve-whmapper', label: 'GitHub', position: 'right' },
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
        theme: prismThemes.vsDark,
        darkTheme: prismThemes.vsDark,
      },
      colorMode: {
        disableSwitch: true,
        defaultMode: 'dark',
      },
    }),
};

export default config;