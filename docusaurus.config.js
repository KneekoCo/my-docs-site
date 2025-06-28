// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KneekoCo',
  tagline: 'Lets Document Easy',
  favicon: 'img/ThaLogo.png',

  future: {
    v4: true,
  },

  url: 'https://kneekoco.github.io',
  baseUrl: '/my-docs-site/',

  organizationName: 'KneekoCo', // GitHub username or org
  projectName: 'my-docs-site',  // GitHub repo name
  deploymentBranch: 'gh-pages', // Required for deploy
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/KneekoCo/my-docs-site',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/ThaLogo.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'KneekoCo',
      logo: {
        alt: 'KneekoCo Logo',
        src: 'img/ThaLogo.png',
      },
      items: [
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/KneekoCo/my-docs-site',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} KneekoCo, LLC.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
