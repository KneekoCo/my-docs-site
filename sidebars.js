// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'welcome',
    'notion-task-tracker',
    'sharepoint-recipes-backend',
    'eam-zero-to-running',
    {
      type: 'category',
      label: 'Compliance Inspection API',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Compliance Inspection API',
        description:
          'Record and track regulated equipment inspections. Start with the Quickstart, set up authentication, then work through the endpoint reference.',
      },
      items: [
        'compliance-inspection-api/quickstart',
        'compliance-inspection-api/authentication',
        'compliance-inspection-api/create-inspection',
      ],
    },
  ],
};
module.exports = sidebars;
