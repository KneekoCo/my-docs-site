// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KneekoCo',
  tagline: 'Lets Document Easy',
  favicon: 'img/ThaLogo.png',

  url: 'https://kneekoco.github.io',
  baseUrl: '/my-docs-site/',

  organizationName: 'KneekoCo', // GitHub username
  projectName: 'my-docs-site',  // GitHub repo
  deploymentBranch: 'gh-pages',

  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

presets: [
  [
    '@docusaurus/preset-classic',
    {
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        routeBasePath: 'docs', // or '/' if using as root
      },
      // other options...
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
        { type: 'search', position: 'right' },
        { href: 'https://github.com/KneekoCo/my-docs-site', label: 'GitHub', position: 'right' },
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
