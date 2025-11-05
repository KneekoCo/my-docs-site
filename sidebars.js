// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'welcome',
    'notion-task-tracker',
    'sharepoint-recipes-backend', 
    'eam-app',  // <-- FIXED: no "docs/" prefix
  ],
};

module.exports = sidebars;
