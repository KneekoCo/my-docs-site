// Import React to use JSX
import React from 'react';

// Import Docusaurus layout wrapper
import Layout from '@theme/Layout';

// Import internal link component from Docusaurus
import Link from '@docusaurus/Link';

// Import utility to ensure correct paths based on baseUrl
import useBaseUrl from '@docusaurus/useBaseUrl';

// Home component for the landing page
export default function Home() {
  return (
    <Layout
      title="Welcome to KneekoCo"
      description="Your documentation, simplified."
    >
      <main
        className="homepage"
        style={{
          padding: '4rem 2rem',
          textAlign: 'center',
        }}
      >
        {/* Company Logo */}
        <img
          src={useBaseUrl('/img/ThaLogo.png')}
          alt="KneekoCo Logo"
          style={{
            maxWidth: '200px',
            marginBottom: '2rem',
          }}
        />

        {/* Main title */}
        <h1 className="homepage-title">Welcome to KneekoCo Docs</h1>

        {/* Description paragraph */}
        <p
          style={{
            fontSize: '1.2rem',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          Explore how I use Notion and Docusaurus to document my workflow and personal projects.
          This site showcases structured content, integrations, and real-world examples.
        </p>

        {/* Button container with spacing between buttons using gap */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',              // 👈 Adds space between buttons
            marginTop: '2rem',
            flexWrap: 'wrap',         // Responsive wrap for small screens
          }}
        >
          {/* Internal link to Docs */}
          <Link
            to="/docs/welcome"
            style={{
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

          {/* External link to GitHub repo */}
          <Link
            to="https://github.com/KneekoCo/my-docs-site"
            style={{
              padding: '0.75rem 1.5rem',
              background: '#EBEDF0',
              color: '#000',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1rem',
            }}
          >
            GitHub Repo
          </Link>
        </div>
      </main>
    </Layout>
  );
}
