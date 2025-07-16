// Enable TypeScript type checking for this config file
// @ts-check

// Import available code highlighting themes from prism-react-renderer
import { themes as prismThemes } from 'prism-react-renderer';

// Define the configuration object for your Docusaurus site
/** @type {import('@docusaurus/types').Config} */
const config = {
  // Site metadata
  title: 'KneekoCo',                         // Title of your documentation site
  tagline: 'Lets Document Easy',             // Short description that appears in metadata
  favicon: 'img/ThaLogo.png',                // Path to the favicon image

  // Base URL settings for deployment
  url: 'https://kneekoco.github.io',         // Your website's domain
  baseUrl: '/my-docs-site/',                 // Path under which the site is served (GitHub Pages subfolder)

  // GitHub repo information for deployment
  organizationName: 'KneekoCo',              // GitHub username or org
  projectName: 'my-docs-site',               // Repository name
  deploymentBranch: 'gh-pages',              // Branch used for static site deployment

  // Docusaurus behavior settings
  trailingSlash: false,                      // Do not add trailing slashes to URLs
  onBrokenLinks: 'warn',                     // Show a warning when a broken link is found
  onBrokenMarkdownLinks: 'warn',             // Show a warning when a broken Markdown link is found

  // Internationalization settings (i18n)
  i18n: {
    defaultLocale: 'en',                     // Default language
    locales: ['en'],                         // Supported languages
  },

  // Configure the content preset
  presets: [
    [
      '@docusaurus/preset-classic',          // Use the "classic" preset
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'), // Path to the sidebar configuration
          routeBasePath: 'docs',                         // URL path for documentation pages
          // If you want the docs to be at the site root, use routeBasePath: '/'
        },
        // You can also add blog or pages here if needed
      },
    ],
  ],

  // Configure theme and UI options
  themeConfig: {
    image: 'img/ThaLogo.png',                 // Default image used in meta tags for social sharing

    // Color mode (light/dark theme) settings
    colorMode: {
      defaultMode: 'light',                   // Default color theme
      disableSwitch: false,                   // Allow users to switch themes
      respectPrefersColorScheme: false,       // Ignore system color scheme
    },

    // Configure the site navigation bar
    navbar: {
      title: 'KneekoCo',                      // Title shown in the navbar
      logo: {
        alt: 'KneekoCo Logo',                 // Alt text for the logo image
        src: 'img/ThaLogo.png',               // Path to the logo image
      },
      items: [
        { type: 'search', position: 'right' },                             // Add a search bar
        { href: 'https://github.com/KneekoCo/my-docs-site', label: 'GitHub', position: 'right' }, // GitHub repo link
      ],
    },

    // Configure the site footer
    footer: {
      style: 'dark',                          // Footer background style (dark or light)
      links: [],                              // Add footer links here if needed
      copyright: `Copyright © ${new Date().getFullYear()} KneekoCo, LLC.`, // Dynamic year
    },

    // Syntax highlighting theme configuration
    prism: {
      theme: prismThemes.github,              // Light mode syntax highlighting theme
      darkTheme: prismThemes.dracula,         // Dark mode syntax highlighting theme
    },
  },
};

// Export the config object so Docusaurus can use it
export default config;
