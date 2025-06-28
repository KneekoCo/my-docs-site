// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import { startTransition } from 'react';

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

  organizationName: 'KneekoCo',
  projectName: 'my-docs-site',

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

    // Added color mode toggle support
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
          href: 'https://github.com/KneekoCo/my-docs-site',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Home',
              to: 'docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/KneekoCo/my-docs-site',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} KneekoCo, LLC. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
