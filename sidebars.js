presets: [
  [
    '@docusaurus/preset-classic',
    {
      docs: {
        routeBasePath: 'docs',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/your/repo/edit/main/',
        // 👇 THIS LINE
        docLayoutComponent: '@theme/DocPage',
        docItemComponent: '@theme/DocItem',
      },
    },
  ],
],
