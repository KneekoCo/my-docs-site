// Import React for JSX syntax
import React from 'react';

// Import the default Docusaurus layout component
import Layout from '@theme/Layout';

// Import Link component for internal navigation
import Link from '@docusaurus/Link';

// Hook to handle base URL adjustments (useful when deploying to subdirectories)
import useBaseUrl from '@docusaurus/useBaseUrl';

// Main homepage component
export default function Home() {
  return (
    // Wrap the content in Docusaurus' layout component
    <Layout
      title="Welcome to KneekoCo"                      // This sets the HTML <title> tag
      description="Your documentation, simplified."     // This sets the meta description tag
    >
      {/* Main page content area */}
      <main
        className="homepage"
        style={{
          padding: '4rem 2rem',
          textAlign: 'center',
        }}
      >
        {/* Logo image, dynamically resolved with base URL */}
        <img
          src={useBaseUrl('/img/ThaLogo.png')}          // Ensures correct path regardless of base URL
          alt="KneekoCo Logo"                           // Alt text for accessibility
          style={{
            maxWidth: '200px',
            marginBottom: '2rem',
          }}
        />

        {/* Page headline */}
        <h1 className="homepage-title">Welcome to KneekoCo Docs</h1>

        {/* Introductory paragraph */}
        <p
          style={{
            fontSize: '1.2rem',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          Explore how I use Notion and Docusaurus to document my workflow and personal projects.
          This site showcases structured content, integrations, and examples.
        </p>

        {/* 'Get Started' button that links to the welcome doc */}
        <Link
          to="/docs/welcome"                            // Internal link to documentation start page
          style={{
            display: 'inline-block',
            marginTop: '2rem',
            padding: '0.75rem 1.5rem',
            background: '#a02124',
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
          }}
        >
          Get Started
        </Link>
         <Link
            
            style={{ display: 'inline-block', color: '#000000',marginTop: '2rem',  padding: '0.75rem 1.5rem',borderRadius: '8px',background: '#EBEDF0',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem', }}
            to="https://github.com/KneekoCo/my-docs-site"
          >
            GitHub Repo
          </Link>
      </main>
    </Layout>
  );
}
